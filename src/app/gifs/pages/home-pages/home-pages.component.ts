import { Gif } from '../../interfaces/gifs.interfaces';
import { GifService } from './../../services/gifs.service';
import { Component } from '@angular/core';

@Component({
  selector: 'gifs-home-pages',
  templateUrl: './home-pages.component.html',
})
export class HomePagesComponent {
  constructor(private gifService: GifService){};

  get gifs(): Gif[]{
    return this.gifService.gifList
  }
}
