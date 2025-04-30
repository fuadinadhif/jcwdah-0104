/* -------------------------------------------------------------------------- */
/*                            PRIMITIVE DATA TYPES                            */
/* -------------------------------------------------------------------------- */
/* --------------------------------- STRING --------------------------------- */
let message = "!@#$%^&*()";
let anotherMessage = "!@#$%^&*()";
let messageAgain = `!@#$%^&*()`;
let phoneNumber = "+628989097010";

/* --------------------------------- NUMBER --------------------------------- */
let age = 70;
let score = 100;
let points = 50;

/* --------------------------------- BOOLEAN -------------------------------- */
let isLoading = true;
let isLogin = false;

/* ---------------------------------- NULL ---------------------------------- */
let address = null;
let gender = null;

/* -------------------------------- UNDEFINED ------------------------------- */
let fullName;
fullName = undefined;

/* -------------------------------------------------------------------------- */
/*                                NON PRIMITIVE                               */
/* -------------------------------------------------------------------------- */
/* --------------------------------- OBJECT --------------------------------- */
// 1. Menyimpan banyak data yang saling berkaitan
// 2. Harus dibungkus dengan {}
// 3. Setiap property-nya harus terdiri dari key: value pair
// 4. Untuk memisahkan property di dalam suatu object, gunakan "," bukan ";"

let name = "John";
console.log(name);
let street = "Jl. Setiabudi";
console.log(street);
let city = "Jakarta Selatan";
console.log(city);
let email = "john@mail.com";
console.log(email);

let userProfile = {
  name: "John", // property 1 -> key: value
  street: "Jl. Setiabudi", // property 2
  city: "Jakarta Selatan", // property 3
  email: "john@mail.com", // property 4
};
console.log(userProfile);
console.log(userProfile.street);

/* ---------------------------------- ARRAY --------------------------------- */
// 1. Menyimpan banyak data yang berurutan
// 2. Harus dibungkus dengan []

let playlist = ["Stelan Cuek", "Nenekku Pahlawanku", "Indonesia Raya"];
console.log(playlist);
console.log(playlist[2]);
console.log(playlist[3]);

let scores = [10, 20, 50, 100, 30];
console.log(scores[2]);

let randomArray = ["Nadhif", 50, null, undefined, {}, [1, 2, 3]];
console.log(randomArray[5]);
console.log(randomArray[5][2]);

let userList = [{ name: "John" }, { name: "Jane" }, { name: "Sutomo" }];
console.log(userList.length);
