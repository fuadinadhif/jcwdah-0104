/* ------------------------------- Declaration ------------------------------ */
function sumTwo(num: number): number {
  return num + 2;
}

console.log(sumTwo(10));

/* ------------------------------- Expression ------------------------------- */
const sumThree = function (num: number): number {
  return num + 3;
};

console.log(sumThree(10));

/* ------------------ Hoisting (Declaration VS Expression) ------------------ */
// Declaration ✅
console.log(sumFour(10));

function sumFour(num: number): number {
  return num + 4;
}

// Expression ❌
console.log(sumFive(6));

const sumFive = function (num: number): number {
  return num + 5;
};
