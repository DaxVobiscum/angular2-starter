export class IDGenerator {

  static create(initialId?: number, maxId?: number): IterableIterator<number> {

    let idGen = function* () {

      let currentId = initialId || 0;

      while (!maxId || currentId < maxId) {

        currentId++;

        yield currentId;
      }
    };

    return idGen();
  }
}
