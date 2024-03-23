import { GifService } from './../../services/gifs.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'gifs-search-box',
  template: `
    <h5>Buscar:</h5>
    <input
      type="text"
      class="form-control"
      placeholder="Buscar Gif..."
      (keyup.enter)="searchTag()"
      #txtTagInput
    />
  `,
})
export class SearchBoxComponent {
  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  constructor(private gifService:GifService) {}
  searchTag() {
    let newTag = this.tagInput.nativeElement.value;
    this.gifService.searchTag(newTag)
    console.log('el tag buscado es: ', newTag);
    this.tagInput.nativeElement.value = ""
  }
}
