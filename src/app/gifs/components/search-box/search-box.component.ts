import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gifs-search-box',
  template: `
  <h5>Buscar:</h5>
  <input type="text" class="from-control" placeholder="Buscar Gif...">
  `
})

export class SearchBoxComponent{
  constructor() { }

}
