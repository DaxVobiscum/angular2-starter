import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Collection } from '../collection';

import { FilmService } from '../film.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  collections: Observable<Collection[]>;

  constructor(private filmService: FilmService) { }

  ngOnInit() {

    this.collections = this.filmService.getCollections();
      // .subscribe(collections => this.collections = collections);
  }

}
