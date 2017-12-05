import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { SmartCollection as Collection } from '../collection';

import { CollectionService } from '../collection.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  collections: Collection[];

  constructor(private collectionService: CollectionService) { }

  ngOnInit() {

    this.collectionService.getCollections()
      .subscribe(collections => this.collections = collections);
  }

}
