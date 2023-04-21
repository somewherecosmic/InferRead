import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { catchError, Observable, Subscription, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user.model';
import { AuthorizationService } from '../../services/authorization-service/authorization.service';
import { switchMap, tap } from 'rxjs';
import { ScaleBreak } from 'devextreme/common/charts';

// TODO: Remove timer logic at some point - when happy with request-response speed

interface PageResponse {
  _id: string;
  pageIndex?: number;
  page: string;
}

@Component({
  selector: 'app-reading-view',
  templateUrl: './reading-view.component.html',
  styleUrls: ['./reading-view.component.scss'],
})
export class ReadingViewComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private authService: AuthorizationService
  ) {}

  paramSubscription: Subscription;
  documentId: string;
  pageIndex: number;
  user$: Observable<User>;
  currentPageSubscription: Subscription;
  nextPageSubscription: Subscription;
  wordHelpSubscription: Subscription;
  text: string;

  // check localStorage cache - key = docId
  // access cache via routeParam passed
  // read tab should keep latest route docId if you leave
  // use router to store url
  ngOnInit(): void {
    this.user$ = this.authService.user;
    // perform check for docId in localStorage later
    this.paramSubscription = this.route.queryParams.subscribe((params) => {
      this.documentId = params['docId'];
      if (localStorage.getItem(this.documentId) === null) {
        this.getCurrentPage();
      } else {
        this.text = localStorage.getItem(this.documentId);
        this.pageIndex = parseInt(
          localStorage.getItem('${this.documentId}/pageIndex')
        );
      }
    });
  }

  // fetch page function, pagination on click? First page should be loaded on init
  // fetch via fastAPI backend
  // retrieve pageIndex, set local pageIndex var, get the respective page

  getCurrentPage() {
    // Use docID and pageIndex in DB to retrieve the current page
    console.time('now');
    this.currentPageSubscription = this.user$
      .pipe(
        switchMap((user) =>
          this.http.get<PageResponse>(
            `http://127.0.0.1:8000/getCurrentPage/${user.id}/${this.documentId}`
          )
        ),
        tap((response) => {
          this.pageIndex = response.pageIndex;
          this.text = response.page;
          this.setLocalStorage();
          console.timeEnd('now');
        }),
        catchError((err) => {
          console.log(err);
          return throwError(() => new Error(err));
        })
      )
      .subscribe();
  }

  // get the next page in the array
  // set this.pageIndex to this.pageIndex++ when done
  getPreviousPage() {
    this.nextPageSubscription = this.user$
      .pipe(
        switchMap((user) =>
          this.http.get<PageResponse>(
            `http://127.0.0.1:8000/getPreviousPage/${user.id}/${this.documentId}/${this.pageIndex}`
          )
        ),
        tap((response) => {
          this.pageIndex--;
          this.text = response.page;
          this.setLocalStorage();
        }),
        catchError((err) => {
          console.log(err);
          return throwError(() => new Error(err));
        })
      )
      .subscribe();
  }

  getNextPage() {
    this.nextPageSubscription = this.user$
      .pipe(
        switchMap((user) =>
          this.http.get<PageResponse>(
            `http://127.0.0.1:8000/getNextPage/${user.id}/${this.documentId}/${this.pageIndex}`
          )
        ),
        tap((response) => {
          console.log(response);
          this.pageIndex++;
          this.text = response.page;
          this.setLocalStorage();
        }),
        catchError((err) => {
          console.log(err);
          return throwError(() => new Error(err));
        })
      )
      .subscribe();
  }

  setLocalStorage() {
    localStorage.setItem(this.documentId, this.text);
    localStorage.setItem(
      '${this.documentId}/pageIndex',
      this.pageIndex.toString()
    );
  }

  // cache reading-view data onDestroy
  ngOnDestroy(): void {
    this.paramSubscription.unsubscribe();
    this.currentPageSubscription.unsubscribe();
  }

  selectedWord: string;

  grabSurroundingSentence(selection) {
    const anchorText = selection.anchorNode.textContent;
    const focusText = selection.focusNode.textContent;

    const textStartIndex = Math.min(
      selection.anchorOffset,
      selection.focusOffset
    );
    const textEndIndex = Math.max(
      selection.anchorOffset,
      selection.focusOffset
    );

    const textBefore = anchorText.slice(0, textStartIndex);
    const textAfter = focusText.slice(textEndIndex);

    const punctuationRegex = /[.!?]/;

    const punctuationBeforeIndex = textBefore
      .split('')
      .reverse()
      .join('')
      .search(punctuationRegex);
    const sentenceStart =
      punctuationBeforeIndex !== -1
        ? textBefore.slice(-punctuationBeforeIndex)
        : textBefore;

    const punctuationAfterIndex = textAfter.search(punctuationRegex);
    const sentenceEnd =
      punctuationAfterIndex !== -1
        ? textAfter.slice(0, punctuationAfterIndex)
        : textAfter;

    const sentence = sentenceStart + this.selectedWord + sentenceEnd;
    console.log(sentence);
    return sentence;
  }

  highlight(event) {
    var selection = window.getSelection();
    this.selectedWord = selection.toString();
    const sentence = this.grabSurroundingSentence(selection);
    // Send to NLP backend and process
    // display information inside helper window

    this.wordHelpSubscription = this.user$
      .pipe(
        switchMap((user) =>
          this.http.post('http://127.0.0.1:8000/processWord', {
            word: this.selectedWord,
            context: sentence,
            userId: user.id,
          })
        ),
        tap((response) => console.log(response)),
        catchError((err) => {
          return throwError(() => new Error(err));
        })
      )
      .subscribe();

    //this.findSentence(this.selectedWord);

    // while the selection's anchor isn't a fullstop
    // while the selection's focus isn't a fullstop

    // this.text = this.text.replace(
    //   this.selectedWord,
    //   '<mark>' + this.selectedWord + '</mark>'
    // );
  }
}
