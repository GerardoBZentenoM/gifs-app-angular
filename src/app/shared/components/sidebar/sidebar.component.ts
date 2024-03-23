import { SearchBoxComponent } from './../../../gifs/components/search-box/search-box.component';
import { Component } from '@angular/core';
import { GifService } from '../../../gifs/services/gifs.service';
import { GifsModule } from '../../../gifs/gifs.module';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  listOfGifs: string[] = [];
  constructor(public gifService: GifService, public gifModule: GifsModule) {}
  get gifToHisotry() {
    return this.gifService.tagHistory;
  }
  updateGifs(tag: string) {
    this.gifService.searchTag(tag);
  }
}
