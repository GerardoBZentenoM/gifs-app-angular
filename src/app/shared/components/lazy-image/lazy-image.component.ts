import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazy-image',
  templateUrl: './lazy-image.component.html',
  styleUrl: './lazy-image.component.css',
})
export class LazyImageComponent implements OnInit {
  ngOnInit(): void {
    if (!this.url) {
      throw new Error('Url is needed.');
    }
  }
  private hasLoaded: boolean = false;

  onLoad() {
    this.hasLoaded = true;
  }
  @Input()
  public url!: string;

  @Input()
  public alt!: string;
}
