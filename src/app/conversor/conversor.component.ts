import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConverterService } from './converter.service';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent implements OnInit {
  category: string;
  from: string;
  to: string;
  convertedValueFieldFrom: number | string = '';
  convertedValueFieldTo: number | string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private converterService: ConverterService
    ) {}

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        this.category = this.removeAcentos(params['category'].toLowerCase());
        this.from = this.removeAcentos(params['convertFrom'].toLowerCase());
        this.to = this.removeAcentos(params['convertTo'].toLowerCase());
        })
  }

  navigateToHome() {
    this.router.navigate(['/']);
  }

  convertValue(obj) {
    if (!obj.value) {
      alert('Digite um valor.');
      return;
    };

    let valor;
    if (obj.src === 'from') {
      valor = this.converterService.converter(this.category, this.from, this.to, +obj.value);
      this.convertedValueFieldTo = valor;
    } else {
      valor = this.converterService.converter(this.category, this.to, this.from, +obj.value);
      this.convertedValueFieldFrom = valor;
    }
  }


  removeAcentos(str: string) {
    let comAcentos = "ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝŔÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿŕ";
    let semAcentos = "AAAAAAACEEEEIIIIDNOOOOOOUUUUYRsBaaaaaaaceeeeiiiionoooooouuuuybyr";
    let novaString = "";

    for (let i = 0; i < str.length; i++) {
      let char = str.charAt(i);
      let indexAcento = comAcentos.indexOf(char);
      if (indexAcento > -1) {
        novaString += semAcentos.charAt(indexAcento);
      } else {
        novaString += char;
      }
    }

    return novaString;
  }
}
