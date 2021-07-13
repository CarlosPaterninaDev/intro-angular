import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
})
export class HeroComponent {
  name: string = 'Ironman';
  year: number = 12;

  constructor() {}

  get capitalizarName(): string {
    return this.name.toUpperCase();
  }

  getName(): string {
    return `${this.name}! year ${this.year} `;
  }

  changeName(): void {
    this.name = 'Spiderman';
  }

  changeYear(): void {
    this.year = 10;
  }
}
