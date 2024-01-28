import { Component, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DocumentPostResponse, UploadedDocument } from 'src/app/models/documents.model';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent {

  // Need to push the doc back up to the filtered docs on close of the modal
  @Output() newDocument: EventEmitter<UploadedDocument> = new EventEmitter<UploadedDocument>();
  title: string;

  uploadDocData = new FormData();
  text = '';
  fileName = '';
  selectedLanguage: string;

  constructor(private httpClient: HttpClient) {}


  onDropdownInit(language: string) {
    this.selectedLanguage = language;
    console.log(this.selectedLanguage);
  }

  onLanguageSelected(language: string) {
    this.selectedLanguage = language;
    console.log(this.selectedLanguage);
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
    }
  }

  onFileSubmit() {
    this.uploadDocData.append('title', this.title);
    this.uploadDocData.append('language', this.selectedLanguage);
    const upload$ = this.httpClient.post<DocumentPostResponse>(
      'http://127.0.0.1:8000/preprocess',
      this.uploadDocData
    );

    upload$.subscribe((response) => {
      if (response.successfulUpload) {
        this.newDocument.emit(response.successfulUpload);
      }
    });
  }
}
