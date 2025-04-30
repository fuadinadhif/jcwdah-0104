/*
FUNCTION STRUCTURE
function [function_name] ([parameter?]: [ts_types]): [ts_types] {
  [function_logic]
  return [return_value?]
}

FUNCTION EXECUTION
[function_name](argument?)
*/

/* ------------------------------- Function 1 ------------------------------- */
function squareArea(side: number): number {
  const result = side * side;
  return result;
}

console.log(squareArea(5));
console.log(squareArea(50));
console.log(squareArea(4));

/* ------------------------------- Function 2 ------------------------------- */
function greetings(name: string): void {
  console.log(`Hi, ${name}!`);
  console.log("Apa kabar?");
  console.log("Kamu sehat?");
}

console.log(greetings("Zaky"));

/* ------------------------------- Function 3 ------------------------------- */
function checkPalindrome(text: string): boolean {
  let reversedText: string = "";

  for (let i = 0; i < text.length; i++) {
    reversedText = text[i] + reversedText;
  }

  if (text.toLowerCase() === reversedText.toLowerCase()) {
    return true;
  } else {
    return false;
  }
}

console.log(checkPalindrome("MaDAm"));
console.log(checkPalindrome("kAsuR"));
console.log(checkPalindrome("raCEcAR"));
