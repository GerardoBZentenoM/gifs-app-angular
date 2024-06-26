import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePagesComponent } from './pages/home-pages/home-pages.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { GifsCardComponent } from './components/gifs-card/gifs-card.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [HomePagesComponent, SearchBoxComponent, CardListComponent, GifsCardComponent],
  imports: [CommonModule, SharedModule],
  exports: [HomePagesComponent],
})
export class GifsModule {}
