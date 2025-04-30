/* ------------------- Pass By-Reference VS Pass By-Value ------------------- */
// 1. Pass By-Value
let score1 = 100;
let score2 = score1;
score1 = 50;

console.log(score1);
console.log(score2);

// 2. Pass By-Reference
let person1 = { name: "Andi", city: "Jakarta", age: 45 };
let person2 = person1;
person1.city = "Bandung";

console.log(person1.city);
console.log(person2.city);
