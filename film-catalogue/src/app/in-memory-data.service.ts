import { InMemoryDbService } from 'angular-in-memory-web-api';

import { DumbCollection as Collection } from './collection';
import { Film } from './film';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const films: Film[] = [
      { id: 11, title: "Gone With The Wind", year: 1939 },
      { id: 12, title: "Citizen Kane", year: 1941 },
      { id: 13, title: "Lawrence of Arabia", year: 1962 },
      { id: 14, title: "Ocean's Eleven", year: 1960 },
      { id: 15, title: "Uncle Buck", year: 1989 },
      { id: 16, title: "Candyman", year: 1992 },
      { id: 17, title: "A Streetcar Named Desire", year: 1951 },
      { id: 18, title: "Superman", year: 1978 },
      { id: 19, title: "Napoleon Dynamite", year: 2004 },
      { id: 20, title: "Barry Lyndon", year: 1975 }
    ];

    let collectionOne = new Collection(1, "Odd Films");

    collectionOne.add(1, films[1]);
    collectionOne.add(2, films[3]);
    collectionOne.add(3, films[5]);

    let collectionTwo = new Collection(2, "Even Films");

    collectionTwo.add(1, films[0]);
    collectionTwo.add(2, films[2]);
    collectionTwo.add(3, films[4]);
    collectionTwo.add(4, films[6]);

    const collections: Collection[] = [
      collectionOne,
      collectionTwo
    ];

    return {
      films,
      collections
    };
  }
}
