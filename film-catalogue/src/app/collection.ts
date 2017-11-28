import { Film } from './film';

export class Collection {

  private idGen: any;

  private collection: any;

  constructor(public id?: number, public name?: string) {

    this.idGen = function* () {

      var currentId = 0;

      while (true) {

        currentId++;

        yield currentId;
      }
    };

    this.collection = new Map<number, Film>();
  }

  delete(key: number): boolean {

    return this.collection.delete(key);
  }

  forEach(callback: Function, thisArg?: any): void {

    this.collection.forEach(callback, thisArg);
  }

  get(key: number): Film {

    return this.collection.get(key);
  }

  has(key: number): boolean {

    return this.collection.has(key);
  }

  keys(): IterableIterator<number> {

    return this.collection.keys();
  }

  set(key: number, value: Film): this {

    return this.collection.set(key, value);
  }

  values(): IterableIterator<Film> {

    return this.collection.values();
  }
}
