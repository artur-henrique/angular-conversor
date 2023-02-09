import {
  Component,
  Input,
  Output,
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
export class ConverterComponent {
  @Input() src: string;
  @Input() category: string;
  @Input() convertFrom: string;
  @Input() convertTo: string;

  @Input() convertedNumber: number | string;
  @Output() onInputValue = new EventEmitter<Teste>();

  constructor() {}

  sendValue(value) {
    this.onInputValue.emit({
      src: this.src,
      value: value
    });
  }
}
