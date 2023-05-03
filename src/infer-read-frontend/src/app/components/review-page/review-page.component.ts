import { Component, OnInit } from '@angular/core';
import { BankService } from '../../services/bank-service/bank.service';

@Component({
  selector: 'app-review-page',
  templateUrl: './review-page.component.html',
  styleUrls: ['./review-page.component.scss']
})
export class ReviewPageComponent implements OnInit {

  constructor(private bankService: BankService) { }

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

  

  
  ngOnInit(): void {
  }

}
