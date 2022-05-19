import { Injectable } from '@angular/core';
import { CardInfo } from './cardInfo';
import { Observable, of } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { getFilteredArticles } from './getFilteredArticles';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  private articleUrl = 'https://api.spaceflightnewsapi.net/v3/articles';

  private articleData: Observable<CardInfo[]>;

  getCardInfo(): Observable<CardInfo[]> {

    return this.articleData;
  }

  getFilteredCardInfo(keywords: string): Observable<CardInfo[]> {
    return this.articleData.pipe(
      map(articles => getFilteredArticles(articles, keywords))
    );
  }

  

  constructor(private http: HttpClient) {
    this.articleData = this.http.get<CardInfo[]>(this.articleUrl).pipe(shareReplay())
  }
}
