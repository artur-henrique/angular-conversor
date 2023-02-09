import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChooseCalculatorComponent } from './choose-calculator/choose-calculator.component';
import { ConversorComponent } from './conversor/conversor.component';

const routes: Routes = [
  { path: '', component: ChooseCalculatorComponent },
  { path: 'converter', component: ConversorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
