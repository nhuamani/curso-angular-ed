import { Component, EventEmitter, Input, Output } from '@angular/core';

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

  @Output()
  emmiter: EventEmitter<number> = new EventEmitter();

  calculateSum() {
    this.result = this.number1 + this.number2;
    this.emmiter.emit(this.result);
  }

}
