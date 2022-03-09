export function solution(str: string, ending: string): boolean {

  let list = str.slice(-ending.length);
  if (list === ending || ending === '') {
      return true
  }
  return false;
}

console.log(solution("juandedios", "dios"));
