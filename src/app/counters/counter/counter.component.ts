import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  standalone: false,
})
export class CounterComponent {
  public counter: number = 0;

  increaseBy(value: number): void {
    this.counter += value;
  }
}
