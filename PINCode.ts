export class Kata {
  static validatePin(pin: string): boolean {
    if (
      (RegExp(/^[0-9]+$/).test(pin) && pin.length === 4) ||
      pin.length === 6
    ) {
      if (RegExp(/^[-+]?[1-9]\d*\.?[0]*$/).test(pin)) {
        return true;
      }
    }

    return false;
  }
}

console.log(Kata.validatePin("1234.5"));

// console.log(RegExp(/^[0-9]\d*(\.-\d+)?$/).test("-12345"))
