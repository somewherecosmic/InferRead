import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { throws } from 'assert';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  @Input() values: string[] = []
  @Input() id: number;
  @Input() default: string;
  @Input() cache: boolean = false;
  selectedValue: string;
  showDropdown: boolean = false;

  @Output() selectedValueChange: EventEmitter<string> = new EventEmitter();
  @Output() onInit: EventEmitter<string> = new EventEmitter();

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }
  
  selectOption(option) {
    this.selectedValue = option;
    if (this.cache) {
      localStorage.setItem('selectedValue ' + this.id , option);
    }

    this.selectedValueChange.emit(option);
    this.showDropdown = false;
  }





  ngOnInit() {
    if (this.cache) { 
      localStorage.getItem('selectedValue ' + this.id) ? this.selectedValue = localStorage.getItem('selectedValue ' + this.id) : this.selectedValue = this.values[0];
    }
    else {
      this.selectedValue = this.default;
    }
    this.onInit.emit(this.selectedValue);
  }
  
}
