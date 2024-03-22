import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class GifService {
  private _tagHistory: string[] = [];

  constructor() {}

  get tagHistory() {
    return [...this._tagHistory];
  }

  private organizeHistory(tag: string) {
    tag = tag.toLowerCase();
    if (this._tagHistory.includes(tag)) {
      this._tagHistory = this._tagHistory.filter((oldTag) => oldTag !== tag);
    }

    this._tagHistory.unshift(tag);
    this._tagHistory = this._tagHistory.splice(0, 10);
  }

  searchTag(tag: string): void {
    if (tag.length == 0) return;
    // this._tagHistory.unshift(tag);
    this.organizeHistory(tag);
    console.log(this._tagHistory);
  }
}
