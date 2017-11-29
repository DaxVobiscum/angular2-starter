import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap, flatMap } from 'rxjs/operators';

import { DumbCollection, SmartCollection } from './collection';
import { Film } from './film';

import { IDGenerator } from './mixins';

import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class CollectionService {

  private idGen: IterableIterator<number>;

  private collectionsUrl = '/api/collections';

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  /** GET: returns a single Collection */
  getCollection(id: number): Observable<SmartCollection> {

    const url = `${this.collectionsUrl}/${id}`;

    return this.http.get<DumbCollection>(url)
      .pipe(
        map(dumbCollection => this.convertDumbToSmart(dumbCollection)),
        tap(_ => this.log(`fetched collection w/ id=${id}`)),
        catchError(this.handleError<SmartCollection>(`getCollection id=${id}`))
      );
  }

  /** GET: returns all collections */
  getCollections(): Observable<SmartCollection[]> {

    return this.http.get<DumbCollection[]>(this.collectionsUrl)
      .pipe(
        map(dumbCollections =>
          dumbCollections.map(
            dumbCollection => this.convertDumbToSmart(dumbCollection)
          )
        ),
        tap(_ => this.log('fetched collections')),
        catchError(this.handleError(`getCollections`, []))
      );
  }

  /** POST: creates a new collection */
  newCollection(newCollection: SmartCollection): Observable<SmartCollection> {

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

            return newCollection;
          }, this),
          flatMap(newCollection => {

            // POST to server
            return this.http.post(this.collectionsUrl, this.convertSmartToDumb(newCollection), httpOptions)
              .pipe(
                map((collection: DumbCollection) => this.convertDumbToSmart(collection)),
                tap((collection: SmartCollection) => this.log(`added collection w/ id=${collection.id}`)),
                catchError(this.handleError<SmartCollection>(`newCollection`))
              );
          })
        );
    }
    else {

      // notify name incomplete
      throw Error('Collection name is required.');
    }
  }

  private convertDumbToSmart(dumbCollection: DumbCollection): SmartCollection {

    let films: Iterable<[number, Film]> = dumbCollection.films;

    return new SmartCollection(
      dumbCollection.id,
      dumbCollection.name,
      films
    );
  }

  private convertSmartToDumb(smartCollection: SmartCollection): DumbCollection {

    let films: Map<number, Film> = smartCollection.films;

    return new DumbCollection(
      smartCollection.id,
      smartCollection.name,
      films
    );
  };

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    }
  }

  private log(message: string) {

    this.messageService.add(message);
  }

}
