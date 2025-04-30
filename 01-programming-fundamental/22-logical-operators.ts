/* ----------------------------------- AND ---------------------------------- */
// Perbandingan di kedua sisi harus sama-sama TRUE agar final result menjadi TRUE
// Cukup satu nilai FALSE untuk menjadi FALSE
// true && true -> true
// true && false -> false
// false && false -> false
console.log(10 > 5 && 5 < 1);
console.log(10 > 5 && 5 > 1);
console.log(10 > 5 && 5 > 1 && 1 < 1);

/* ----------------------------------- OR ----------------------------------- */
// Cukup satu nilai TRUE untuk menjadi TRUE
// true || true -> true
// true || false -> true
// false || false -> false
console.log(false || true);
console.log(10 < 1 || 10 > 2);

console.log((10 > 5 && 5 > 1 && 1 < 1) || 10 > 5);

/* -------------------------------- ! NEGASI -------------------------------- */
console.log(!false);
console.log(!true);
console.log(!10 > 5);
console.log(!"");

console.log(!1);
console.log(false > 5);
console.log(!1 > 5);
