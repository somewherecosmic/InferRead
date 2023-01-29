import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss']
})
export class RequestsComponent implements OnInit {

  @Input() name="placeholder";

  constructor() { }

  ngOnInit(): void {
  }

}
