// Arrow function hanya bisa dibuat di function EXPRESSION saja
// 1. Bentuk original
const multiplyTwo = function (num: number): number {
  return num * 2;
};
console.log(multiplyTwo(2));

// 2. Menghapus keyword "function" dan diganti dengan symbol arrow "=>"
const multiplyThree = (num: number): number => {
  return num * 3;
};
console.log(multiplyThree(2));

// 3. Invisible return. Hanya bisa dilakukan ketika fungsinya hanya memiliki 1 baris saja
const multiplyFour = (num: number): number => num * 4;
console.log(multiplyFour(2));

/* --------------------------------- TRIVIA --------------------------------- */
const multiplyFive = (num: number): number => {
  return num * 5;
};

console.log(multiplyFive(10));
