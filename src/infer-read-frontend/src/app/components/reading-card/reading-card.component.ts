import { Component, Input, ViewChild, ElementRef, OnInit} from '@angular/core';

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


  ngOnInit() {
  }

  editTitle() {
    this.editing = true;
  }

  saveChanges(event) {
    console.log(event.target.value);
    this.editing = false;
  }
}
