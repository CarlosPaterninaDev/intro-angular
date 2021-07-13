import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-hero',
  templateUrl: './list-hero.component.html',
})
export class ListHeroComponent {
  heroes: string[] = ['Spiderman', 'Batman', 'Flash', 'Superman'];
  erasedHero: string = '';

  removeHero() {
    this.erasedHero = this.heroes.shift() || '';
  }
}
