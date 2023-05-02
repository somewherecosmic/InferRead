import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { catchError, Observable, Subscription, throwError, switchMap, tap, map, of} from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Bank, User } from '../../models/user.model';
import { AuthorizationService } from '../../services/authorization-service/authorization.service';
import { BankService } from '../../services/bank-service/bank.service';
import { ScaleBreak } from 'devextreme/common/charts';
import { CanDeactivate } from '@angular/router';

// TODO: Remove timer logic at some point - when happy with request-response speed

interface PageResponse {
  _id: string;
  pageIndex?: number;
  page: string;
}

interface WordHelpResponse {
  partOfSpeech: string;
  root: string;
  morphology: {
    Voice?: string,
    Tense?: string,
    Number?: string,
    Gender?: string,
    VerbForm? : string 
  }
  isRare: boolean;
}

@Component({
  selector: 'app-reading-view',
  templateUrl: './reading-view.component.html',
  styleUrls: ['./reading-view.component.scss'],
})
export class ReadingViewComponent implements OnInit, CanDeactivate<ReadingViewComponent> {
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private authService: AuthorizationService,
    private bankService: BankService,
    private cdRef: ChangeDetectorRef
  ) {}

  paramSubscription: Subscription;
  documentId: string;
  pageIndex: number;
  user$: Observable<User>;
  bank$: Observable<Bank>;
  currentPageSubscription: Subscription;
  nextPageSubscription: Subscription;
  wordHelpSubscription: Subscription;
  text: string;
  wordHelp: WordHelpResponse;
  disambiguation = this.bankService.disambiguation;

  ngOnInit(): void {
    this.user$ = this.authService.user;
    this.user$.pipe(switchMap(user => {
      return this.bankService.getBank(user);
    })).subscribe();
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

  canDeactivate() : Observable<boolean> {
    console.log("Can deactivate called");
    return this.user$.pipe(switchMap(user => {
      return this.bankService.updateBank(user).pipe(
        map(() => true),
        catchError(() => of(false))
      )
    }));
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
          this.pageIndex++;
          this.bankService.addToKnown(this.text);
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
  
  ngOnDestroy(): void {
    if (this.paramSubscription) {
      this.paramSubscription.unsubscribe();
    }
    if (this.currentPageSubscription) {
      this.currentPageSubscription.unsubscribe();
    }
    if (this.nextPageSubscription) {
      this.nextPageSubscription.unsubscribe();
    }
    if (this.wordHelpSubscription) {
      this.wordHelpSubscription.unsubscribe();
    }
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
    return sentence;
  }

  highlight(event) {
    var selection = window.getSelection();
    this.selectedWord = selection.toString();
    // if (this.selectedWord.indexOf('-') !== -1) {
    //   var words = this.selectedWord.split('-');
    //   var fullString = words.join('-').trim();
    //   var range = document.createRange();
    //   range.selectNodeContents(event.target);
    //   var startIndex = event.target.textContent.indexOf(fullString);
    //   var endIndex = startIndex + fullString.length;
    //   range.setStart(event.target.firstChild, startIndex);
    //   range.setEnd(event.target.firstChild, endIndex);
    //   window.getSelection().removeAllRanges();
    //   window.getSelection().addRange(range);
    // }
    const sentence = this.grabSurroundingSentence(selection);
    // Send to NLP backend and process
    // display information inside helper window

    if (this.bankService.known.has(this.selectedWord)) {
      this.bankService.known.delete(this.selectedWord);
    }
    this.wordHelpSubscription = this.user$
      .pipe(
        switchMap((user) =>
          this.http.post<WordHelpResponse>('http://127.0.0.1:8000/processWord', {
            word: this.selectedWord,
            context: sentence,
            userId: user.id,
          })
        ),
        tap((response) => { 
          console.log(response);
          this.wordHelp = response;
          //console.log(this.bankService.learning);
          this.bankService.learning.push(
          {"word": this.selectedWord,
          "partOfSpeech": response.partOfSpeech,
          "morphology": response.morphology,
          "root": response.root
        });
        console.log(this.bankService.learning);
  }),
        catchError((err) => {
          return throwError(() => new Error(err));
        })
      )
      .subscribe();
  
  }
}
