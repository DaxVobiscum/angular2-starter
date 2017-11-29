import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { SmartCollection as Collection } from './collection';
import { Film } from './film';

import { MessageService } from './message.service';

@Injectable()
export class FilmService {

  private filmsUrl = 'ap/films'; // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  /** GET: returns a single Film */
  getFilm(id: number): Observable<Film> {

    const url = `${this.filmsUrl}/${id}`;

    return this.http.get<Film>(url)
      .pipe(
        tap(_ => this.log(`fetched film w/ id: ${id}`)),
        catchError(this.handleError<Film>(`getFilm id=${id}`))
      );
  }

  /** GET: returns an array of Film items */
  getFilms(): Observable<Film[]> {

    return this.http.get<Film[]>(this.filmsUrl)
      .pipe(
        tap(_ => this.log(`fetched films`)),
        catchError(this.handleError(`getFilms`, []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  private log(message: string) {

    this.messageService.add(message);
  }
}
