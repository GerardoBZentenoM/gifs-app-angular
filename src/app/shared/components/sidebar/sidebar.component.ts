import { Component } from '@angular/core';
import { GifService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  listOfGifs:string []= []
  constructor(public gifService: GifService) {}
  addGifToHisotry() {
    this.listOfGifs = this.gifService.tagHistory;
    console.log('this.listOfGifs', this.listOfGifs);
  }
}
