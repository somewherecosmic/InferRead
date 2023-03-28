import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon'
import { AuthorizationService } from 'src/app/services/authorization-service/authorization.service';



interface fileResponse {
  text: string
}

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent {

  text = "";

  constructor(private http: HttpClient, private authService : AuthorizationService) {}

  // file: File;

  // setFile(event) {
  //   const target = event.target;
  //   const file = target.files;
  //   this.file = file[0];
  //   //this.file = file;
  //   console.log(this.file);
  // }

  // uploadFile() {
    
  //   // This is a FileList object, Each index has a tuple with File and length
  //   let formData = new FormData();

  //   formData.append('document', this.file);
  //   // console.log("Inside func = " + formData)
  //   console.log(formData);
  //   this.http.post('http://127.0.0.1:8000/preprocess', formData, { headers: {
  //     "Content-Type": "multipart/form-data"
  //   }}).subscribe((response) => {
  //     console.log("Document upload complete");
  //     console.log(response);
  //   },
  //   (error) => {
  //     console.log(error);
  //   });
  // }

  fileName = "";


  onFileSelected(event) {

      const file:File = event.target.files[0];

      if (file) {

          this.fileName = file.name;

          const formData = new FormData();
          const userId: string = this.authService.getUserId();

          formData.append("user", JSON.parse(localStorage.getItem("userObject")).id);
          formData.append("document", file, this.fileName);
          // if (userId) {
          // formData.append("userId", userId.toString());
          // console.log("user id appended") 
          // console.log(userId);
          // }
          formData.forEach((data) => {
            console.log(data);
          })
          
          const upload$ = this.http.post<fileResponse>("http://127.0.0.1:8000/preprocess", formData );

          upload$.subscribe(response => {
            console.log(response);
            this.text = response.text
          });

        
      }
}
}
