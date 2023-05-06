import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  catchError,
  Observable,
  Subscription,
  throwError,
  switchMap,
  tap,
  map,
  of,
} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Bank, User, UserConfig } from '../../models/user.model';
import { AuthorizationService } from '../../services/authorization-service/authorization.service';
import { UserConfigService } from 'src/app/services/user-config-service/user-config.service';
import { BankService } from '../../services/bank-service/bank.service';
import { CanDeactivate } from '@angular/router';
import { PageResponse, WordHelpResponse } from 'src/app/models/reading.model';
import {
  faChevronRight,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';

// TODO: Remove timer logic at some point - when happy with request-response speed

@Component({
  selector: 'app-reading-view',
  templateUrl: './reading-view.component.html',
  styleUrls: ['./reading-view.component.scss'],
})
export class ReadingViewComponent
  implements OnInit, CanDeactivate<ReadingViewComponent>
{
  faChevronRight = faChevronRight;
  faChevronLeft = faChevronLeft;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private authService: AuthorizationService,
    private bankService: BankService,
    private cdRef: ChangeDetectorRef,
    private userConfigService: UserConfigService
  ) {}

  paramSubscription: Subscription;
  documentId: string;
  pageIndex: number;
  user$: Observable<User>;
  bank$: Observable<Bank>;
  userConfig$: Observable<UserConfig>;
  selectedLanguage: string;
  currentPageSubscription: Subscription;
  nextPageSubscription: Subscription;
  wordHelpSubscription: Subscription;
  text: string;
  wordHelp: WordHelpResponse;
  disambiguation = this.bankService.disambiguation;
  FR_MASK = ' <mask> ';

  ngOnInit(): void {
    this.user$ = this.authService.user;
    this.user$
      .pipe(
        switchMap((user) => {
          return this.bankService.getBank(user);
        })
      )
      .subscribe();
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

    this.userConfig$ = this.user$.pipe(
      switchMap((user: any) => this.userConfigService.getUserConfig(user))
    );
    this.userConfig$
      .pipe(map((userConfig: UserConfig) => userConfig))
      .subscribe((userConfigSuperObject: any) => {
        this.selectedLanguage =
          userConfigSuperObject.userConfig.selectedLanguage;
        console.log(this.selectedLanguage);
      });
  }

  // Patch HTTP on pageIndex
  // pageIndex inside of document
  // setup endpoint in API
  canDeactivate(): Observable<boolean> | boolean {
    if (confirm('Are you sure you want to finish reading?')) {
      return this.user$.pipe(
        switchMap((user) => {
          this.updatePageIndex(user);
          return this.bankService.updateBank(user);
        }),
        tap((response) => {
          console.log('Response:', response);
        }),
        map(() => true),
        catchError(() => of(false))
      );
    } else {
      return false;
    }
  }

  // fetch page function, pagination on click? First page should be loaded on init
  // fetch via fastAPI backend
  // retrieve pageIndex, set local pageIndex var, get the respective page

  getCurrentPage() {
    // Use docID and pageIndex in DB to retrieve the current page
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
        }),
        catchError((err) => {
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

  updatePageIndex(user) {
    this.http
      .patch(
        `http://127.0.0.1:8000/updatePageIndex/${user.id}/${this.documentId}`,
        { pageIndex: this.pageIndex }
      )
      .pipe(
        tap((response) => {
          console.log(response);
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

    // Add MASK token to context sentence here, in case of sentences where word appears twice
    let sentence: string;
    let maskedSentence: string;
    if (this.selectedLanguage === 'French') {
      sentence = sentenceStart + this.selectedWord + sentenceEnd;
      maskedSentence = sentenceStart + this.FR_MASK + sentenceEnd;
    } else {
      sentence = sentenceStart + this.selectedWord + sentenceEnd;
    }
    return [sentence, maskedSentence];
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
    const [sentence, maskedSentence] = this.grabSurroundingSentence(selection);
    // Send to NLP backend and process
    // display information inside helper window

    if (this.bankService.known.has(this.selectedWord)) {
      this.bankService.known.delete(this.selectedWord);
    }
    let processWordLangURL =
      'http://127.0.0.1:8000/processWord' + this.selectedLanguage;
    this.wordHelpSubscription = this.user$
      .pipe(
        switchMap((user) =>
          this.http.post<WordHelpResponse>(processWordLangURL, {
            word: this.selectedWord,
            context: sentence,
            maskedContext: maskedSentence,
            userId: user.id,
          })
        ),
        tap((response) => {
          console.log(response);
          this.wordHelp = response;
          for (let i = 0; i < this.bankService.learning.length; i++) {
            if (this.bankService.learning[i].word === this.selectedWord) {
              return;
            }
          }
          this.bankService.learning.push({
            word: this.selectedWord,
            partOfSpeech: response.partOfSpeech,
            morphology: response.morphology,
            root: response.root,
            lastReviewed: undefined,
            interval: undefined
          });
          console.log(this.bankService.learning);
        }),
        catchError((err) => {
          return throwError(() => new Error(err));
        })
      )
      .subscribe();
    // else if (user.userConfig.selectedLanguage == 'French') {
    //   return this.http.post('http://127.0.0.1:8000/processWordFrench', {
    //     word: this.selectedWord,
    //     context: sentence,
    //     userId: user.id,
    //   });
  }
}
