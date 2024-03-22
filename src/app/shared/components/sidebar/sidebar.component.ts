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
  get gifToHisotry() {
    return this.gifService.tagHistory;
  }
}
