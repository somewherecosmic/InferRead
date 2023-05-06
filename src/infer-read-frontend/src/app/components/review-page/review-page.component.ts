import { Component, OnInit, ViewChild, AfterViewInit, ElementRef, HostListener } from '@angular/core';
import { LearningWord, User } from 'src/app/models/user.model';
import { AuthorizationService } from 'src/app/services/authorization-service/authorization.service';
import { BankService } from '../../services/bank-service/bank.service';
import { Observable, switchMap, tap } from 'rxjs';
import { PassThrough } from 'stream';
import { doesNotReject } from 'assert';

@Component({
  selector: 'app-review-page',
  templateUrl: './review-page.component.html',
  styleUrls: ['./review-page.component.scss']
})
export class ReviewPageComponent implements OnInit, AfterViewInit {
  @ViewChild('cardDiv') cardDiv: ElementRef;

  constructor(private bankService: BankService, private authService: AuthorizationService) { }

  new: LearningWord[] = []
  inProgress: LearningWord[] = []
  due: LearningWord[] = []
  total: number;
  currentCard: LearningWord;
  start: boolean = true;
  user$: Observable<User>;
  displayCard: boolean = false;
  showElement: boolean = false;
  disambiguation = this.bankService.disambiguation;
  // ms values for intervals, 1 day and 10 minutes respectively
  dayInterval = 86400000;
  goodInterval = 600000;
  easyInterval = this.dayInterval * 3;
  done: LearningWord[] = [];



  ngOnInit(): void {
    // Initialise new and due, set inProgress during
    this.user$ = this.authService.user;
    this.user$
    .pipe(
      switchMap((user) => {
        return this.bankService.getBank(user).pipe(tap(res => {
          this.initCards();
          this.total = this.new.length + this.inProgress.length + this.due.length;
        }));
      })
    ).subscribe()
    console.log(this.bankService.learning);
  }
  
  ngAfterViewInit(): void {
      if (this.cardDiv) {
        this.cardDiv.nativeElement.focus();
      }
  }

  @HostListener('document:keyup.space', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    this.showElement = true;
    this.displayCard = true;
  }


  initCards() {
    this.bankService.learning.forEach(learningWord => {
      if (learningWord.lastReviewed === undefined ) {
        this.new.push(learningWord);
      }
      else if (learningWord.lastReviewed && learningWord.interval < this.dayInterval) {
        this.inProgress.push(learningWord);
      }
      else if (learningWord.lastReviewed.getTime() + learningWord.interval < Date.now()) {
        this.due.push(learningWord);
      }
    })
  }

  startRevision() {
    this.start = false;
    this.displayCard = false;
    this.getCard();

  }

  getCard() {
    if (this.due.length > 0 && this.inProgress.length > 0) {
      this.currentCard = this.inProgress.pop();
      console.log("Popped from in prog");
    }
    else if (this.due.length > 0 && this.inProgress.length === 0) {
      this.currentCard = this.due.pop();
      console.log("Popped from due");
    }
    else if (this.new.length > 0 && this.inProgress.length < 5) {
      this.currentCard = this.new.pop();
      console.log("Popped from new");
    }
    else if (this.inProgress.length > 5) {
      this.currentCard = this.inProgress.pop();
      console.log("Popped from in prog");
    }
    else {
      this.currentCard = this.inProgress.pop();
      console.log("Popped from in prog");
    }
  }
  // buttons
  // again -> show card again in 1 minute -> push to inProgress, reset interval
  // good -> show card again in 10 mins first time round, then 1 day, then a multiplier of **2?
  // easy -> show card again in 4 days, then multiplier of **3?

  againHandler(currentCard: LearningWord) {
    if (currentCard.interval > this.goodInterval) {
      currentCard.interval = this.goodInterval;
    }
    currentCard.lastReviewed = new Date();
    this.inProgress.push(currentCard);
    if (this.total !== 0) {
      this.getCard();
    } 
    this.displayCard = false;
  }

  goodHandler(currentCard: LearningWord) {
    if (currentCard.interval >= this.dayInterval) {
      currentCard.interval *= 2;
      currentCard.lastReviewed = new Date();
      this.done.push(currentCard);
      this.total--;
    }
    if (currentCard.interval === this.goodInterval) {
      currentCard.interval = this.dayInterval;  
      currentCard.lastReviewed = new Date();
      this.done.push(currentCard);
      this.total--;
    }
    if (currentCard.interval === undefined) {
      currentCard.interval = this.goodInterval;
      currentCard.lastReviewed = new Date();
      this.inProgress.push(currentCard);
    }
    if (this.total !== 0) {
      this.getCard();
    }
    this.displayCard = false;
  }

  easyHandler(currentCard: LearningWord) {
    if (currentCard.interval === undefined || currentCard.interval === this.goodInterval) {
      currentCard.interval = this.easyInterval;
    }
    else {
      currentCard.interval *= 3;
    }
    currentCard.lastReviewed = new Date();
    if (this.total !== 0) {
      this.getCard();
    } 
    this.displayCard = false;
  }


}
  // Buttons -> again, good, easy


  // Review Page -> starts with an overview of cards -> new, due, under revision
  // Add timestamp / datetime to words in learning, for new cards, set to 0
  // Review should have its own version of the bank?
  // lastReviewed = date of last review - Due in =  with a timedelta for when the card will be due next
  // if currentDate - Due in > lastReviewed, then the card is due
  // or add a timedelta onto the lastReviewed data and check if < currentDate
  // this approach makes the most sense if we want to be able to update the time the card is due in by some multiple according
  // to how mature the card is
  // Once an arbitrary amount of time has been achieved for due, put in known

  // OVERVIEW OF CARDS