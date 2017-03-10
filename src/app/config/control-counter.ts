
export class ControlCounter {

  static counter: number = 0;

  public static setCounter(counter) {
    this.counter = counter;
  }

  public static getCounter(): number {
    return ++this.counter;
  }

}