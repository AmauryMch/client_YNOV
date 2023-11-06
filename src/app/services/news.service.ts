import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { News } from '../models/News';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private baseUrl = 'https://newsapi.org/v2/';
  private apiKey = environment.newsApiKey;

  constructor(private httpClient: HttpClient) { }

  getNews(prompt: string, date?: Date): Promise<News> {
    return new Promise((resolve, reject) => {
      let params = '?q=' + prompt + (date ? '&from=' + date.toISOString().substring(0, 10) : '') + '&apiKey=' + this.apiKey;
      this.httpClient.get<News>(this.baseUrl + 'everything' + params).pipe(
        catchError((err) => {
          reject(err)
          throw err;
        })
      ).subscribe((response) => {
        console.log(response);
        resolve(response);
      })
    })
  }
}
