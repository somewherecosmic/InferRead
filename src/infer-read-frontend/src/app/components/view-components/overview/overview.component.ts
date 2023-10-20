import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import {
  Observable,
  Subscription,
  catchError,
  map,
  switchMap,
  tap,
  throwError,
} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import config from 'devextreme/core/config';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { AuthorizationService } from '../../../services/authorization-service/authorization.service';
import { UserConfigService } from 'src/app/services/user-config-service/user-config.service';
import { User, UserConfig } from '../../../models/user.model';
import {
  DocumentGetResponse,
  DocumentDeletionResponse,
  DocumentPostResponse,
  UploadedDocument,
} from 'src/app/models/documents.model';
import { environment } from 'src/environments/environment';

config({
  //BMcQ Comment: Configuration of floating action button
  floatingActionButtonConfig: {
    position: {
      my: 'right bottom',
      at: 'right bottom',
      of: '#documents-display-without-filter-options',
      offset: '-16 -16',
    },
  },
});

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements OnInit {
  // BMcQ Comment: FontAwesome variables for icons.
  faTrash = faTrash;

  constructor(
    private authService: AuthorizationService,
    private userConfigService: UserConfigService,
    private httpClient: HttpClient,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  user$: Observable<User>;
  userConfig$: Observable<UserConfig>;
  selectedLanguage: string;
  private documentsSubscription!: Subscription;
  documentsFromDB: UploadedDocument[];
  filteredDocuments: UploadedDocument[] = localStorage.getItem("filteredDocuments") ? JSON.parse(localStorage.getItem("filteredDocuments")) : [];
  addDocumentVisible = false;
  isDeleteDocument = false;
  uploadDocData = new FormData();
  isSubmitAvailable = false;
  authURL = environment.authURL;

  //BMcQ Comment: copying code from file-upload which will be moved here
  text = '';
  fileName = '';

  // Fetch the user docs array and display them on the template

  ngOnInit(): void {
    this.user$ = this.authService.user;
    this.userConfig$ = this.user$.pipe(
      switchMap((user: any) => this.userConfigService.getUserConfig(user))
    );
    this.userConfig$
      .pipe(map((userConfig: UserConfig) => userConfig))
      .subscribe((userConfigSuperObject: any) => {
        this.selectedLanguage =
          userConfigSuperObject.userConfig.selectedLanguage;
        console.log('Language: ' + this.selectedLanguage);
      });
    localStorage.getItem("filteredDocuments") ? this.filteredDocuments = JSON.parse(localStorage.getItem("filteredDocuments")) : this.getDocuments();
  }

  sortDocuments(filter: string) {
    // figure out how to sort based on which values, enums?

    console.log("Sorting docs: " + this.filteredDocuments);

    switch (filter) {
      // Need to add a last read field to the schema for this option
      // case 'Last Read': { 
      //   this
      // }
      case 'Title': {
        this.filteredDocuments.sort((a, b) => {
          return a.title.localeCompare(b.title);
        })
        break;
      }

      case 'Length': {
        this.filteredDocuments.sort((a, b) => {
          return a.pages.length - b.pages.length;
        })
        break;
      }

      // Add a date field to the schema for this option
      // case 'Upload Date': {

      // }
    }
    localStorage.setItem("filteredDocuments", JSON.stringify(this.filteredDocuments));
    this.cdr.detectChanges();
  }

  getDocuments() {
    this.documentsSubscription = this.user$
      .pipe(
        switchMap((user) =>
          this.httpClient.get<DocumentGetResponse>(
            `${this.authURL}documents/getDocuments/${user.id}`
          )
        ),
        map((response) => response.documents),
        tap((documentsFromDB) => {
          this.documentsFromDB = documentsFromDB;
          if (this.filterDocuments !== undefined) {
            this.filteredDocuments = this.filterDocuments(
              documentsFromDB,
              this.selectedLanguage
            );
          }
        }),
        catchError((err) => {
          return throwError(() => new Error(err));
        })
      )
      .subscribe();
  }

  filterDocuments(documents: any, language: string) {
    if (documents && documents.length) {
      return documents.filter(
        (doc: UploadedDocument) => doc.language === language
      );
    }
  }

  // get ID of document, send to url for deletion
  deleteDocument(documentID: string) {
    this.documentsSubscription = this.user$
      .pipe(
        switchMap((user) =>
          this.httpClient.delete<DocumentDeletionResponse>(
            `${this.authURL}documents/deleteDocument/${user.id}/${documentID}`
          )
        ),
        tap(() => {
          this.getDocuments();
        }),
        catchError((err) => {
          console.log(err);
          return throwError(() => new Error(err));
        })
      )
      .subscribe();
    // Remove doc from existing array
    for (var i = 0; i < this.filteredDocuments.length; i++) {
      if (this.filteredDocuments[i]._id === documentID) {
        this.filteredDocuments.splice(i, 1);
      }
    }
    localStorage.setItem("filteredDocuments", JSON.stringify(this.filteredDocuments));
  }

  ngOnDestroy(): void {
    if (this.documentsSubscription) {
      this.documentsSubscription.unsubscribe();
    }
  }

  onFileSelected(event) {
    const file: File = event.target.files[0];

    if (file) {
      this.fileName = file.name;
      this.uploadDocData = new FormData();
      this.uploadDocData.append(
        'user',
        JSON.parse(localStorage.getItem('userObject')).id
      );
      this.uploadDocData.append('document', file, this.fileName);
      this.uploadDocData.append('language', this.selectedLanguage);

      this.onFileSubmit();
    }
  }

  onFileSubmit() {
    const upload$ = this.httpClient.post<DocumentPostResponse>(
      'http://127.0.0.1:8000/preprocess',
      this.uploadDocData
    );

    upload$.subscribe((response) => {
      if (response.successfulUpload) {
        this.filteredDocuments.push(response.successfulUpload);
        localStorage.setItem("filteredDocuments", JSON.stringify(this.filteredDocuments));
      }
    });
  }

  readDocument(docId: string) {
    // pass ID to READ tab via query params and route.navigate()
    this.router.navigate(['./read'], { queryParams: { docId: docId } });
  }
}
