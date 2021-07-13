import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { ListHeroComponent } from './list-hero/list-hero.component';

@NgModule({
  declarations: [HeroComponent, ListHeroComponent],
  imports: [CommonModule],
  exports: [ListHeroComponent],
  providers: [],
})
export class HeroesModule {}
