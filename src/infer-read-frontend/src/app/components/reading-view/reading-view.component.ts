import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';

interface PageResponse {
  // should be an NLP document, need to figure out how to handle this
}

@Component({
  selector: 'app-reading-view',
  templateUrl: './reading-view.component.html',
  styleUrls: ['./reading-view.component.scss'],
})

export class ReadingViewComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}

  paramSubscription: Subscription;
  documentId: string;
  pageIndex: number;

  // DocID is passed to READ, now pages have to be fetched from the doc
  // What is the smartest way to do this?
  ngOnInit(): void {
    this.paramSubscription = this.route.queryParams.subscribe((params) => {
      this.documentId = params['docId'];
      console.log(this.documentId);
    });
    // fetch page in here
    // store index in database? 

  }

  // fetch page function, pagination on click? First page should be loaded on init
  // fetch via fastAPI backend
  // retrieve pageIndex, set local pageIndex var, get the respective page

  // fetchDocumentPage(pageIndex: number) {
  //   this.http.get<PageResponse>();
  // }

  ngOnDestroy(): void {
    this.paramSubscription.unsubscribe();
  }

  text = ""
  selectedWord: string;

  highlight(event) {
    this.selectedWord = window.getSelection().toString();
    // this.text = this.text.replace(
    //   this.selectedWord,
    //   '<mark>' + this.selectedWord + '</mark>'
    // );
  }
}
