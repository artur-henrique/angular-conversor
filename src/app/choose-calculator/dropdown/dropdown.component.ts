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
  @ViewChild('convertFrom') from: ElementRef;
  @ViewChild('convertTo') to: ElementRef;

  constructor(
    private router: Router,
  ) {}

  onChooseCalculator() {
    if(this.from.nativeElement.value === this.to.nativeElement.value) {
      alert("You can't choose equal values!");
      return
    }

    this.router.navigate(['converter'], { queryParams: {
      category: this.type.category,
      convertFrom: this.from.nativeElement.value,
      convertTo: this.to.nativeElement.value
    } });
  }
}
