import { Component, OnInit } from '@angular/core';
import { NgSwitch } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { map } from 'rxjs/operators';

import { FilmService } from '../film.service';
import { CollectionService } from '../collection.service';

import { SmartCollection as Collection } from '../collection';
import { Film } from '../film';

@Component({
  selector: 'app-new-collection',
  templateUrl: './new-collection.component.html',
  styleUrls: ['./new-collection.component.scss']
})
export class NewCollectionComponent implements OnInit {

  films: Film[];
  newCollection: Collection;

  collectionName: string = '';

  constructor(
    private filmService: FilmService,
    private collectionService: CollectionService
  ) { }

  ngOnInit() {

    this.filmService.getFilms().subscribe(films => this.films = films);

    this.newCollection = new Collection();
  }

  addFilm(filmId: number): void {

    let selectedFilm = this.films.find(film => film.id === filmId);

    this.newCollection.set(filmId, selectedFilm);
  }

  getFilms(): Film[] {

    let selectedFilms = [];

    this.newCollection.forEach(film => selectedFilms.push(film));

    return selectedFilms;
  }

  removeFilm(filmId: number): void {

    this.newCollection.delete(filmId);
  }

  filmSelected(filmId: number): boolean {

    return this.newCollection.has(filmId);
  }

  enableSave(): boolean {

    return (
      0 < this.collectionName.length &&
      0 < this.getFilms().length
    );
  }

  saveCollection(): void {

    this.newCollection.name = this.collectionName;

    this.collectionService.newCollection(this.newCollection)
      .subscribe(collection => this.newCollection = collection);
  }

}
