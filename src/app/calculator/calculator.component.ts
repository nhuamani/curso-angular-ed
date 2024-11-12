import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss'
})
export class CalculatorComponent {

  number1: number= 0;
  number2: number= 0;
  result: number= 0;

  @Input()
  title: string = '';

  calculateSum() {
    this.result = this.number1 + this.number2;
  }

}
