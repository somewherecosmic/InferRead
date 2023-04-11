import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../../services/authorization-service/authorization.service';
import { UserConfigService } from 'src/app/services/user-config-service/user-config.service';
import { Subscription } from 'rxjs';
import { User } from '../../models/user.model';
import { HttpClient } from '@angular/common/http';
import config from 'devextreme/core/config';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { EMPTY, catchError, tap, finalize } from 'rxjs';

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

// TODO fetch user's books and display them here
// Need to add user ID or username to the book so we know who it belongs to

interface DocumentGetResponse {
  id: string;
  documents: Document[];
}

interface DocumentPostResponse {
  text: string;
}
interface DocumentDeletionResponse {
  acknowledged: boolean;
}

interface Document {
  _id: string;
  title: string;
  pages: [string];
  language: string;
}

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements OnInit {
  // TODO implement the rest of the CRUD operations - Update and Delete, on the overview page
  // remove UPLOAD tab and have the user upload directly on the overview page?
  // BMcQ Comment: FontAwesome variables for icons.
  faTrash = faTrash;

  constructor(
    private authService: AuthorizationService,
    private userConfigService: UserConfigService,
    private httpClient: HttpClient
  ) {}

  private userSubscription!: Subscription;
  user!: User;
  private documentsSubscription!: Subscription;
  documentsFromDB: Document[];
  filteredDocuments: Document[] = [];
  addDocumentVisible = false;
  isDeleteDocument = false;
  uploadDocData = new FormData();
  isSubmitAvailable = false;
  selectedLang!: string;

  //BMcQ Comment: copying code from file-upload which will be moved here
  text = '';
  fileName = '';

  // Fetch the user docs array and display them on the template

  ngOnInit(): void {
    this.userSubscription = this.authService.user
      .pipe(
        tap((user) => {
          this.user = user;
        }),
        catchError((err) => {
          console.log(err);
          return EMPTY;
        }),
        finalize(() => {})
      )
      .subscribe();
    this.getDocuments();
    this.userConfigService.userChosenLang.subscribe((language) => {
      this.selectedLang = language;
      this.filterDocuments(this.documentsFromDB, this.selectedLang);
    });
  }

  getDocuments() {
    // id as a request parameter
    this.documentsSubscription = this.httpClient
      .get<DocumentGetResponse>(
        'http://localhost:3000/documents/getDocuments/' + this.user.id
      )
      .subscribe(
        (res) => {
          this.documentsFromDB = res.documents;
          this.filterDocuments(this.documentsFromDB, this.selectedLang);
          console.log(this.documentsFromDB);
        },
        (err) => {
          console.log(err);
        }
      );
  }

  filterDocuments(documents: any, language: string) {
    if (documents && documents.length) {
      this.filteredDocuments = documents.filter(
        (doc) => doc.language === language
      );
    }
  }

  // get ID of document, send to url for deletion
  deleteDocument(docId: string) {
    this.httpClient
      .delete<DocumentDeletionResponse>(
        'http://localhost:3000/documents/deleteDocument/' +
          this.user.id +
          '/' +
          docId
      )
      .subscribe(
        (res) => {
          console.log(res);
          this.getDocuments();
          console.log(this.documentsFromDB);
        },
        (err) => {
          console.log(err);
        }
      );
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
    this.documentsSubscription.unsubscribe();
  }

  onAddDocument(): void {
    this.addDocumentVisible = true;
  }

  onFileSelected(event) {
    const file: File = event.target.files[0];

    if (file) {
      this.fileName = file.name;

      this.uploadDocData = new FormData();
      const userId: string = this.authService.getUserId();

      this.uploadDocData.append(
        'user',
        JSON.parse(localStorage.getItem('userObject')).id
      );
      this.uploadDocData.append('document', file, this.fileName);
      this.uploadDocData.append('language', this.selectedLang);
      // if (userId) {
      // formData.append("userId", userId.toString());
      // console.log("user id appended")
      // console.log(userId);
      // }
      this.uploadDocData.forEach((data) => {
        console.log(data);
      });
      this.isSubmitAvailable = true;
      console.log(this.uploadDocData);
    }
  }

  onFileSubmit() {
    const upload$ = this.httpClient.post<DocumentPostResponse>(
      'http://127.0.0.1:8000/preprocess',
      this.uploadDocData
    );
    this.addDocumentVisible = false;

    upload$.subscribe((response) => {
      console.log(response);
      this.text = response.text;
    });
  }

  onDeleteDocNav(): void {
    this.isDeleteDocument = true;
  }

  onCancelDeleteDocNav(): void {
    this.isDeleteDocument = false;
  }
}
