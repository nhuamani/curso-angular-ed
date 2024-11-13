import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DatabindingComponent } from './databinding.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CounterComponent } from './counter/counter.component';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [
    DatabindingComponent,
    CounterComponent,
    CalculatorComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
  ]
})
export class DatabindingModule { }
