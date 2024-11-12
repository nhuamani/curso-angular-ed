import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.scss'
})
export class DatabindingComponent {

  // Interpolación
  course: string = 'Curso';

  // Property Binding

  cardData = {
    imageUrl: 'https://placehold.co/400',
    title: 'Angular',
    description: 'Curso desde cero'
  }

  // Event Binding

  onChangeTitle(event: any): void {
    this.cardData.title = event.target.value;
  }

  changeTitle(): void {
    this.cardData.title = "Python";
  }

  initialCount = 11;

  message = "Calculadora";

  sumNumberResult: number = 0;

  getSumNumberResult(e:number) {
    this.sumNumberResult = e;
  }

}
