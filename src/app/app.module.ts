import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DropdownComponent } from './choose-calculator/dropdown/dropdown.component';
import { ConverterComponent } from './conversor/converter/converter.component';
import { ChooseCalculatorComponent } from './choose-calculator/choose-calculator.component';
import { ConversorComponent } from './conversor/conversor.component';
import { TypeService } from './services/type.service';
import { ConverterService } from './conversor/converter.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DropdownComponent,
    ConverterComponent,
    ChooseCalculatorComponent,
    ConversorComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [TypeService, ConverterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
