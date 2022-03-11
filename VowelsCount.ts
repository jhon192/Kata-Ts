export class Kata {
  static getCount(str: string): number {
    let m = str.match(/[aeiou]/gi);

    return m === null ? 0 : m.length;
  }
}

console.log(Kata.getCount("broa"));
