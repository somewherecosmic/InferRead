import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../../services/authorization-service/authorization.service';
import { Subscription } from 'rxjs';
import { User } from '../../models/user.model';
import { HttpClient } from '@angular/common/http';
import { Router , ActivatedRoute } from '@angular/router';
import config from 'devextreme/core/config';
import { log } from 'console';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

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

interface OverviewResponse {
  id: string;
  documents: Document[];
}

interface fileResponse {
  text: string;
}
interface deletionResponse {
  acknowledged: boolean;
}

interface Document {
  _id: string;
  title: string;
  pages: [string];
  language: string;
}

// TODO: Add onClick() to document title
// clicking title calls a function which fetches the first page of the book
// or the page the user was previously on (cache this or store in user or read object?)

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
    private httpClient: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  private userSubscription!: Subscription;
  user!: User;
  private documentsSubscription!: Subscription;
  documents: Document[];
  addDocumentVisible = false;
  isDeleteDocument = false;
  uploadDocData = new FormData();
  isSubmitAvailable = false;
  selectedLang = 'French';

  //BMcQ Comment: copying code from file-upload which will be moved here
  text = '';
  fileName = '';

  // Fetch the user docs array and display them on the template

  ngOnInit(): void {
    this.userSubscription = this.authService.user.subscribe(
      (user) => {
        this.user = user;
      },
      (err) => {
        console.log(err);
      }
    );
    this.getDocuments();
  }

  getDocuments() {
    // id as a request parameter
    this.documentsSubscription = this.httpClient
      .get<OverviewResponse>(
        'http://localhost:3000/documents/getDocuments/' + this.user.id
      )
      .subscribe(
        (res) => {
          this.documents = res.documents;
          console.log(this.documents);
        },
        (err) => {
          console.log(err);
        }
      );
  }

  // get ID of document, send to url for deletion
  deleteDocument(docId: string) {
    this.httpClient
      .delete<deletionResponse>(
        'http://localhost:3000/documents/deleteDocument/' +
          this.user.id +
          '/' +
          docId
      )
      .subscribe(
        (res) => {
          console.log(res);
          this.getDocuments();
          console.log(this.documents);
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
    const upload$ = this.httpClient.post<fileResponse>(
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

  readDocument(docId: string) {
    // pass ID to READ tab via query params and route.navigate()
    this.router.navigate(["./read"], {queryParams: {docId: docId}})
  }
}