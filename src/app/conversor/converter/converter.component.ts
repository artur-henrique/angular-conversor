import { Component, Input, Output, OnInit, ElementRef, ViewChild, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {
  @Input() category: string;
  @Input() convertFrom: string;
  @Input() convertTo: string;
  @Output() onInputValue = new EventEmitter<number>();

  // @ViewChild('inputValue') inputValue: ElementRef;
  // @Input() inputRef: ElementRef;

  constructor() {}

  ngOnInit () {
  }

  sendValue(value) {
    this.onInputValue.emit(value);
    // console.dir(event);
  }

}
