import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { throws } from 'assert';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  @Input() values: string[] = []
  selectedValue: string;
  showDropdown: boolean = false;

  @Output() selectedValueChange: EventEmitter<string> = new EventEmitter();

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }
  
  selectOption(option) {
    this.selectedValue = option;
    localStorage.setItem('selectedValue', option);

    this.selectedValueChange.emit(option);
    this.showDropdown = false;
  }



  ngOnInit() {
    localStorage.getItem('selectedValue') ? this.selectedValue = localStorage.getItem('selectedValue') : this.selectedValue = this.values[0];
  }
  
}
