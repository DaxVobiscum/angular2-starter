import { Component, OnInit, Input } from '@angular/core';

import { SmartCollection as Collection } from '../collection';
import { Film } from '../film';

@Component({
  selector: 'app-collection-detail',
  templateUrl: './collection-detail.component.html',
  styleUrls: ['./collection-detail.component.scss']
})
export class CollectionDetailComponent implements OnInit {

  @Input() collection: Collection;

  films: IterableIterator<Film>;

  constructor() { }

  ngOnInit() { }

  ngDoCheck() {

    this.films = this.collection.values();
  }

}
