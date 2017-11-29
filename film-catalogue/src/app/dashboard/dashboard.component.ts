import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { SmartCollection as Collection } from '../collection';

import { CollectionService } from '../collection.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  collections: Observable<Collection[]>;

  constructor(private collectionService: CollectionService) { }

  ngOnInit() {

    this.collections = this.collectionService.getCollections();
      // .subscribe(collections => this.collections = collections);
  }

}
