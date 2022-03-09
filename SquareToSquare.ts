export default function isSquare(n: number): boolean {

  return Number.isInteger(Math.sqrt(n))
}

console.log(isSquare(25));
