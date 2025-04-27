let message; // Bikin variable kosong
console.log(message); // Undefined
message = "I am hungry";
console.log(message); // I am hungry

/* ------------------------------ LET VS CONST ------------------------------ */
let fullName;
fullName = "Ahmad Dhani";
fullName = "Mulan Jameela";
console.log(fullName);

const address = "Sudirman, Jakarta Selatan";
address = "Palmerah, Jakarta Barat";
console.log(address);

/*
1. const tidak boleh dikosongi ketika pertama kali dibuat. let boleh
2. const tidak boleh diganti isinya. let boleh
*/

/* ----------------------------- VARIABLE NAMING ---------------------------- */
// let n4me$_* = "Faiz"; // Error tidak boleh menggunakan symbol selain $ dan _
// let 4address = "Jakarta Timur" // Error tidak boleh diawali angka

// Case sensitive
let student = "Rafif";
let Student = "Zaky";

// let typeof = "My Type"; // Error tidak boleh pakai reserved keywords

/* ---------------------------------- CASES --------------------------------- */
// camelCase
let studentProfile;

// PascalCase
let StudentProfile;

// snake_case
let student_profile;
