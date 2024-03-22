import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'gifs-search-box',
  template: `
  <h5>Buscar:</h5>
  <input type="text" class="from-control" placeholder="Buscar Gif..." (keyup.enter)="searchTag()"
  #txtTagInput>
  `
})

export class SearchBoxComponent{

  @ViewChild("txtTagInput")
  public tagInput!: ElementRef<HTMLInputElement>

  constructor() { }
 searchTag(){
  let newTag =this.tagInput.nativeElement.value




  console.log("el tag buscado es: ",newTag);

 }
}
