import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { FilmService } from '../film.service';

import { Film } from '../film';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.scss']
})
export class FilmDetailComponent implements OnInit {

  film: Film;

  constructor(
    private route: ActivatedRoute,
    private filmService: FilmService,
    private location: Location
  ) { }

  ngOnInit() {

    const filmId = +this.route.snapshot.paramMap.get('id');

    this.filmService.getFilm(filmId)
      .subscribe(film => this.film = film);
  }

}
