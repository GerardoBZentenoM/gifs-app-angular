import { Gif } from './../../interfaces/gifs.interfaces';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gifs-card',
  templateUrl: './gifs-card.component.html',
  styleUrl: './gifs-card.component.css',
})
export class GifsCardComponent implements OnInit {
  ngOnInit(): void {
    if (!this.gif) {
      throw new Error('Gif is required.');
    }
  }
  @Input()
  public gif!: Gif;
}
