import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, tap, throwError, map } from 'rxjs';
import { environment } from './../../../../environment/environment';
import { INewsItem } from './../interfaces/news-item.interface';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  constructor(private http: HttpClient) {}

  getNews(): Observable<INewsItem[]> {
    const language = localStorage.getItem('language') || 'en';

    const newsUrl = `${environment.baseUrl}everything?q=keyword&language=${language}&apiKey=${environment.apiKey}`;

    return this.http.get<{ articles: INewsItem[] }>(newsUrl).pipe(
      map((response) => response.articles),
      tap((data) => console.log(data)),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse): Observable<never> {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An Error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(() => errorMessage);
  }
}
