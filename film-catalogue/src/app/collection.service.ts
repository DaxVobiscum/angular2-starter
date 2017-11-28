import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { map } from 'rxjs/operators';

import { Collection } from './collection';

import { IDGenerator } from './mixins';

import { COLLECTIONS } from './mock-collections';

@Injectable()
export class CollectionService {

  private idGen: IterableIterator<number>;
  private collections: Observable<Collection[]>;

  /** GET: returns a single Collection */
  getCollection(id: number): Observable<Collection> {

    let collection = COLLECTIONS.find(collection => collection.id === id);

    return of(collection);
  }

  /** GET: returns all collections */
  getCollections(): Observable<Collection[]> {

    if (!this.collections) {

      this.collections = of(COLLECTIONS);
    }

    return this.collections;
  }

  /** POST: creates a new collection */
  addCollection(newCollection: Collection): Observable<Collection> {

    if (!!newCollection.name && 0 < newCollection.name.length) {

      return this.getCollections()
        .pipe(
          map(collections => {

            let lastId = collections
              .map(collection => collection.id)
              .sort((a, b) => (a < b) ? 1 : (a > b) ? -1 : 0)[0];

            if (!this.idGen) {

              this.idGen = IDGenerator.create(lastId);
            }

            let collectionId = this.idGen.next().value;

            newCollection.id = collectionId;

            // POST to server

            return newCollection;
          }, this)
        );
    }
    else {

      // notify name incomplete
      throw Error('Collection name is required.');
    }
  }

}
