import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  @ViewChild("modal") modal: ElementRef;

  show() {
    this.modal.nativeElement.showModal();
  }
}
