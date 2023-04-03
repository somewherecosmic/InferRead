import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../../services/authorization-service/authorization.service';
import { Subscription } from 'rxjs';
import { User } from '../../models/user.model';
import { HttpClient } from '@angular/common/http';
import config from 'devextreme/core/config';

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

interface OverviewResponse {
  id: string;
  documents: Document[];
}

interface Document {
  title: string;
  pages: [string];
  language: string;
}

interface fileResponse {
  text: string;
}

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements OnInit {
  // TODO implement the rest of the CRUD operations - Update and Delete, on the overview page
  // remove UPLOAD tab and have the user upload directly on the overview page?

  constructor(
    private authService: AuthorizationService,
    private httpClient: HttpClient
  ) {}

  private userSubscription!: Subscription;
  user!: User;
  private documentsSubscription!: Subscription;
  documents: Document[];
  popupVisible = false;

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
        },
        (err) => {
          console.log(err);
        }
      );
  }

  // deleteDocument(id: string) {
  //  this.httpClient.delete()
  // }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
    this.documentsSubscription.unsubscribe();
  }

  onAddDocument(): void {
    this.popupVisible = !this.popupVisible;
  }

  onFileSelected(event) {
    const file: File = event.target.files[0];

    if (file) {
      this.fileName = file.name;

      const formData = new FormData();
      const userId: string = this.authService.getUserId();

      formData.append(
        'user',
        JSON.parse(localStorage.getItem('userObject')).id
      );
      formData.append('document', file, this.fileName);
      // if (userId) {
      // formData.append("userId", userId.toString());
      // console.log("user id appended")
      // console.log(userId);
      // }
      formData.forEach((data) => {
        console.log(data);
      });

      const upload$ = this.httpClient.post<fileResponse>(
        'http://127.0.0.1:8000/preprocess',
        formData
      );

      upload$.subscribe((response) => {
        console.log(response);
        this.text = response.text;
      });
    }
  }

  onRowTest(): void {
    alert('boing');
  }
}
