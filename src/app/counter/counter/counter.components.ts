import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h1>{{ title }}</h1>
    <h2>{{ appTitle }}</h2>

    <button (click)="handlerCounter(base)">[ + {{ base }} ]</button>

    <span> {{ counter }} </span>

    <button (click)="handlerCounter(-base)">[ - {{ base }} ]</button>
  `,
})
export class CounterComponent {
  title: string = 'Intro Angular';
  appTitle: string = 'Counter APP 🧮';
  counter: number = 0;
  base: number = 10;

  handlerCounter(value: number) {
    this.counter = this.counter + value;
  }
}
