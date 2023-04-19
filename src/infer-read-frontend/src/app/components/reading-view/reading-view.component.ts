import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user.model'
import { AuthorizationService } from '../../services/authorization-service/authorization.service'
import { switchMap, tap } from 'rxjs'


// TODO: Remove timer logic at some point - when happy with request-response speed


interface PageResponse {
  _id: string,
  pageIndex: number,
  page: string,
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
  user$: Observable<User>
  pageSubscription: Subscription;
  text: string;

  // check localStorage cache - key = docId
  // access cache via routeParam passed
  // read tab should keep latest route docId if you leave
  // use router to store url
  ngOnInit(): void {
    this.user$ = this.authService.user
    // perform check for docId in localStorage later
    this.paramSubscription = this.route.queryParams.subscribe((params) => {
      this.documentId = params['docId'];
      // if (localStorage.getItem(this.documentId) 
      this.getCurrentPage()
    });
    // fetch page in here
    // store index in database? 

  }

  // fetch page function, pagination on click? First page should be loaded on init
  // fetch via fastAPI backend
  // retrieve pageIndex, set local pageIndex var, get the respective page

  getCurrentPage() {
    // Use docID and pageIndex in DB to retrieve the current page
    console.time('now')
    this.pageSubscription = this.user$.pipe(
      switchMap(user => 
        this.http.get<PageResponse>(`http://127.0.0.1:8000/getCurrentPage/${user.id}/${this.documentId}/`)
        ),
        tap(response => {
          this.pageIndex = response.pageIndex;
          this.text = response.page
          console.timeEnd('now');
        })
    ).subscribe()
  }

  // cache reading-view data onDestroy
  ngOnDestroy(): void {
    this.paramSubscription.unsubscribe();
  }

  selectedWord: string;

  highlight(event) {
    this.selectedWord = window.getSelection().toString();
    // this.text = this.text.replace(
    //   this.selectedWord,
    //   '<mark>' + this.selectedWord + '</mark>'
    // );
  }
}
