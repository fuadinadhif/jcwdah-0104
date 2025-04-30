/* ---------------------------- Create new array ---------------------------- */
// 1. []
const arrayFirst = [];

// 2. new Array()
const arraySecond = new Array();

/* ---------------------- Array can contains everything --------------------- */
const arrayThird = [1, "A", null, undefined];
const arrayFourth = [1, 2, 3, [4, 5, 6, [7, 8, 9, [{ name: "Ferdinand" }]]]];
console.log(arrayFourth[1]);
console.log(arrayFourth[3]);
console.log(arrayFourth[3][3]);
console.log(arrayFourth[3][3][3]);
console.log(arrayFourth[3][3][3][0]);
console.log(arrayFourth[3][3][3][0].name);

/* -------------------------------------------------------------------------- */
/*                                    NOTES                                   */
/* -------------------------------------------------------------------------- */
const arrayRandom = ["!@#"];
