export function validBraces(braces: string): boolean {
  let stck: string[] = [];

  for (let i = 0; i < braces.length; i++) {
    let char = stck[stck.length - 1];

    if (braces[i] == "(" || braces[i] == "[" || braces[i] == "{") {
      stck.push(braces[i]);
    } else if (
      (char == "(" && braces[i] == ")") ||
      (char == "{" && braces[i] == "}") ||
      (char == "[" && braces[i] == "]")
    ) {
      stck.pop();
    } else return false;
  }

  return stck.length ? false : true;
}
