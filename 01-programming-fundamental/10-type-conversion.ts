/* ---------------------------- STRING CONVERSION --------------------------- */
// Mengubah suatu tipe data ke dalam bentuk string
console.log(String(0));
console.log(String(99));
console.log(String(null));
console.log(String([1, 2, 3]));
console.log(String({ name: "Nadhif" }));

/* ---------------------------- NUMBER CONVERSION --------------------------- */
// Mengubah suatu tipe data ke dalam bentuk number
console.log(Number("1000"));
console.log(Number("1000ABC"));
console.log(Number(""));

console.log(parseInt("1000"));
console.log(parseInt("1000ABC0099"));
console.log(parseInt(""));

console.log(+"1000");
console.log(+"1000ABC");
console.log(+"");

/* --------------------------- BOOLEAN CONVERSION --------------------------- */
// Mengubah suatu tipe data ke dalam bentuk boolean
console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(2));
console.log(Boolean(-2));

console.log(Boolean(""));
console.log(Boolean("A"));
console.log(Boolean("AB"));
console.log(Boolean("ABC"));

console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean({}));
console.log(Boolean({ name: "Nadhif" }));
console.log(Boolean([]));
console.log(Boolean([1, 2, 3]));

/* ------------------------- Truthy vs Falsy Values ------------------------- */
// Falsy
console.log(Boolean(false));
console.log(Boolean(0));
console.log(Boolean(-0));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));

// Truthy - All other available data
