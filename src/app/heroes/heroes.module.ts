import { NgModule } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { ListHeroesComponent } from './list/list.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [HeroComponent, ListHeroesComponent],
  imports: [CommonModule],
  exports: [HeroComponent, ListHeroesComponent],
  providers: [],
  bootstrap: [],
})
export class HeroesModule {}
