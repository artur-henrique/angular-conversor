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
// Angular Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

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
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule
  ],
  providers: [TypeService, ConverterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
