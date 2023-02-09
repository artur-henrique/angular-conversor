import { Component, OnInit } from '@angular/core';
import { TypeOfCalc } from '../interfaces/type';
import { TypeService } from '../services/type.service';

@Component({
  selector: 'app-choose-calculator',
  templateUrl: './choose-calculator.component.html',
  styleUrls: ['./choose-calculator.component.css']
})
export class ChooseCalculatorComponent implements OnInit {
  typeList: TypeOfCalc[];

  constructor(private typeService: TypeService) {
  }

  ngOnInit() {
    this.typeList = this.typeService.getTypeList();
  }

}
