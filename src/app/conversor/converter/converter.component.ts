import {
  Component,
  Input,
  Output,
  OnInit,
  OnChanges,
  ElementRef,
  ViewChild,
  EventEmitter
} from '@angular/core';

interface Teste {
  src: string,
  initValue?: number,
  value: number
}

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit, OnChanges {
  @Input() src: string;
  @Input() category: string;
  @Input() convertFrom: string;
  @Input() convertTo: string;

  @Input() convertedData: Teste;
  convertedValue: number | string = '';

  // @Output() onInputValue = new EventEmitter<number>();
  @Output() onInputValue = new EventEmitter<Teste>();

  constructor() {}

  ngOnInit () {
    console.log('Filho: ');
    console.log(this.category);
    console.log(this.convertFrom);
    console.log(this.convertTo);
  }

  ngOnChanges() {
    try {
      if (!!this.convertedData) {
        if (!!this.convertedData && this.convertedData.src !== this.src) {
          this.convertedValue = +this.convertedData.value;
          console.log(this.convertedValue);
        } else {
          this.convertedValue = this.convertedData.initValue;
        }
      } else {
        return;
      }

    } catch (error) {
      console.log(error);
    }
  }

  sendValue(value) {
    // this.onInputValue.emit(value);
    this.onInputValue.emit({
      src: this.src,
      value: value
    });
    // console.dir(event);
  }

}
