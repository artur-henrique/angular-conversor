import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { TypeOfCalc } from 'src/app/interfaces/type';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent {
  @Input() type: TypeOfCalc;
  @ViewChild('convertFrom') from;
  @ViewChild('convertTo') to;

  constructor(
    private router: Router,
  ) {}

  onChooseCalculator() {
    console.log("From: ", this.from._value);
    console.log("To: ", this.to._value);
    if(this.from._value === this.to._value) {
      alert("You can't choose equal values!");
      return
    }

    this.router.navigate(['converter'], { queryParams: {
      category: this.type.category,
      convertFrom: this.from._value,
      convertTo: this.to._value
    } });
  }
}
