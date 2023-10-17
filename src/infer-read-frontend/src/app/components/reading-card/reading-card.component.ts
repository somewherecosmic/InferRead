import { Component, Input, ViewChild, ElementRef, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthorizationService } from 'src/app/services/authorization-service/authorization.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-reading-card',
  templateUrl: './reading-card.component.html',
  styleUrls: ['./reading-card.component.scss']
})
export class ReadingCardComponent implements OnInit {
  @Input() id: any;
  @Input() title: string;
  @Input() language: string;
  @Input() length: number;

  editing = false;
  
  @ViewChild('titleInput') titleInput: ElementRef;

  constructor(private http: HttpClient, private auth: AuthorizationService) {
  }


  ngOnInit() {
  }

  editTitle() {
    this.editing = true;
  }

  onCancelChange() {
    this.editing = false;
  }

  // Sends req to API to save title changes
  onSaveTitleChange(event) {
    console.log(event.target.value);
    this.editing = false;
    this.http.patch(`${environment.authURL}documents/updateDocumentTitle/${this.auth.getUserId()}/${this.id}`, {
      "newTitle": event.target.value
    }).pipe(tap((res) => {
      console.log(res);
      }))
    .subscribe()

  }
}
