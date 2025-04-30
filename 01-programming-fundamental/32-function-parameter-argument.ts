/* ---------------------------- Default parameter --------------------------- */
function rectangleArea(width: number = 2, length: number = 5): number {
  const result = width * length;
  return result;
}

console.log(rectangleArea(10, 50));
console.log(rectangleArea(10));
console.log(rectangleArea());

/* ----------------------------- Rest Parameter ----------------------------- */
function sumAllParameters(
  param1: number,
  param2: number,
  param3: number
): number {
  const result = param1 + param2 + param3;
  return result;
}

console.log(sumAllParameters(1, 2, 3));
console.log(sumAllParameters(10, 20, 30));

function sumAllParametersFixed(
  param1: number,
  param2: number,
  ...restParam: number[]
) {
  let result = param1 + param2;

  if (restParam.length > 0) {
    for (const el of restParam) {
      result = result + el;
    }
  }

  return result;
}

console.log(sumAllParametersFixed(1, 2));
console.log(sumAllParametersFixed(1, 2, 3));
console.log(sumAllParametersFixed(1, 2, 3, 4, 5, 6, 7, 8));

/* -------------------------------------------------------------------------- */
/*                                    NOTES                                   */
/* -------------------------------------------------------------------------- */
let result = 3;
result = result + 3; // 3 + 3 = 6
result = result + 4; // 6 + 4 = 10
result = result + 5; // 10 + 5 = 15
console.log(result);
