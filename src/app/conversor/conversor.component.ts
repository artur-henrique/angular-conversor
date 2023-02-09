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

  // fromField: number;
  // toField: number;
  // @ViewChild('fromField') fromField: ElementRef;
  // @ViewChild('toField') toField: ElementRef;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private converterService: ConverterService
    ) {}

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        this.category = params['category'].toLowerCase();
        this.from = params['convertFrom'].toLowerCase();
        this.to = params['convertTo'].toLowerCase();
        console.log(this.category);
        console.log(this.from);
        console.log(this.to);
        }
      )
  }

  navigateToHome() {
    this.router.navigate(['/']);
  }

  convertValue(value) {
    if (!value) {
      alert('Digite um valor.');
      return;
    };
    const valor = this.converterService.converter(this.category, this.from, this.to, value);

    console.log("Ref: ", value);
    console.log("Res: ", valor);
  }
}
