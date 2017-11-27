import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Film } from './film';

import { FILMS } from './mock-films';

@Injectable()
export class FilmService {

  /** GET: returns a single Film */
  getFilm(id: number): Observable<Film> {

    let film = FILMS.find(film => film.id === id);

    return of(film);
  }

  /** GET: returns an array of Film items */
  getFilms(): Observable<Film[]> {

    return of(FILMS);
  }
}
