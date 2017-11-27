import { Collection } from './collection';

import { FILMS } from './mock-films';

var collectionOne = new Collection(1, "Odd Films");

collectionOne.set(1, FILMS[1]);
collectionOne.set(2, FILMS[3]);
collectionOne.set(3, FILMS[5]);

var collectionTwo = new Collection(2, "Even Films");

collectionTwo.set(1, FILMS[0]);
collectionTwo.set(2, FILMS[2]);
collectionTwo.set(3, FILMS[4]);
collectionTwo.set(4, FILMS[6]);

export const COLLECTIONS: Collection[] = [
  collectionOne,
  collectionTwo
];
