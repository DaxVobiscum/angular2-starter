import { Film } from './film';

abstract class Collection {

  public id?: number;
  public name?: string;

  public films: any;
}

export class DumbCollection extends Collection {

  public films: any;

  constructor(public id?: number, public name?: string, films?: Map<number, Film>) {

    super();

    this.films = [ ];

    if (films) {

      films.forEach(film => this.films.push([ film.id, film ]));
    }
  }

  add(key: number, value: Film) {

    this.films.push([ key, value ]);
  }
}

export class SmartCollection extends Collection {

  public films: any;

  constructor(public id?: number, public name?: string, films?: Iterable<[number, Film]>) {

    super();

    this.films = new Map<number, Film>(films);
  }

  delete(key: number): boolean {

    return this.films.delete(key);
  }

  forEach(callback: Function, thisArg?: any): void {

    this.films.forEach(callback, thisArg);
  }

  get(key: number): Film {

    return this.films.get(key);
  }

  has(key: number): boolean {

    return this.films.has(key);
  }

  keys(): IterableIterator<number> {

    return this.films.keys();
  }

  set(key: number, value: Film): this {

    return this.films.set(key, value);
  }

  values(): IterableIterator<Film> {

    return this.films.values();
  }
}
