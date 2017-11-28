export class IDGenerator {

  static create(initialId: number, maxId?: number): IterableIterator<number> {

    let idGen = function* () {

      let currentId = initialId;

      while (true && (!maxId || currentId < maxId)) {

        currentId++;

        yield currentId;
      }
    };

    return idGen();
  }
}
