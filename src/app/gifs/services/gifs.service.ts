import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

const GIPHY_APY_KEY = 'fsEp7fGHQheRhpXnvuQ5VL8uXLhqzhq1';

@Injectable({ providedIn: 'root' })
export class GifService {
  private _tagHistory: string[] = [];
  private serviceURL: string = 'https://api.giphy.com/v1/gifs';
  public gifList: Gif[] = [];
  constructor(private http: HttpClient) {
    this.loadLocalStorage();
    // this.searchTag(this._tagHistory[0]);
  }

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
    this.saveLocalStorage();
  }

  private saveLocalStorage(): void {
    localStorage.setItem('history', JSON.stringify(this._tagHistory));
  }

  private loadLocalStorage(): void {
    if(!localStorage.getItem("history")) return;

    this._tagHistory = JSON.parse(localStorage.getItem('history')!);
    if(this._tagHistory.length === 0) return
    this.searchTag(this._tagHistory[0]);
  }

  async searchTag(tag: string): Promise<void> {
    if (tag.length == 0) return;
    // this._tagHistory.unshift(tag);
    this.organizeHistory(tag);
    console.log(this._tagHistory);
    const params = new HttpParams()
      .set('api_key', GIPHY_APY_KEY)
      .set('limit', '10')
      .set('q', tag);
    this.http
      .get<SearchResponse>(`${this.serviceURL}/search`, { params })
      .subscribe((resp) => {
        this.gifList = resp.data;
        console.log('this.gifList: ', this.gifList);
      });
  }
}
