import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {

  @Input() count: number = 0;
  @Output() countChange = new EventEmitter<number>();

  updateCount(amount: number): void {
    this.count += amount;
    this.countChange.emit(this.count);
  }

}
