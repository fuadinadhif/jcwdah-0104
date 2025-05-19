/* ------------------------------------ 1 ----------------------------------- */
// console.log(a);
console.log(b);
{
  const a = 10;
  var b = 30;
  {
    console.log(a);
    console.log(b);
  }
}
// console.log(a);
console.log(b);

/* ------------------------------------ 2 ----------------------------------- */
const array = ["aku", "kamu", "dia"];

for (const items of array) {
  console.log(items);
}

for (const items in array) {
  console.log(items);
}

const person = { name: "John", age: 70 };

// for (const item of person) {
//   console.log(item);
// }

for (const item in person) {
  console.log(item);
}

/* ------------------------------------ 3 ----------------------------------- */
// 1. With Class
class EmployeeClass {
  name;
  salary;

  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }
}
const vinson = new EmployeeClass("Vinson", 16000000);
console.log(vinson);

// 2. Factory Function
function EmployeeFunction(name, salary) {
  return { name: name, salary: salary };
}
const zuhri = EmployeeFunction("Zuhri", 10000000);
console.log(zuhri);

/* ------------------------------ 6. instanceof ----------------------------- */
const jonoStatus = { hp: 100, attack: 50 };
console.log(jonoStatus);

class PlayerStatus {
  hp;
  attack;

  constructor(hp, attack) {
    this.hp = hp;
    this.attack = attack;
  }
}
const budiStatus = new PlayerStatus(50, 100);
console.log(budiStatus);

console.log(jonoStatus instanceof PlayerStatus);
console.log(budiStatus instanceof PlayerStatus);

const today = new Date();
console.log(today instanceof Date);

/* ------------------------------------ 8 ----------------------------------- */
const counter = 0;

// while (true) {
// console.log(counter);
// counter++;
// }

/* ------------------------------------ 9 ----------------------------------- */
if (10 > 5) {
  console.log("Hi");
} else {
  console.log("Bye");
}

10 > 5 ? console.log("Hi") : console.log("Bye");

if (2 > 3) {
} else if (6 > 7) {
} else {
}

if (2 > 3) {
  if (6 > 7) {
  }
}

/* ------------------------------ slice / find ------------------------------ */
const names = ["budi", "andi", "tono", "asep"];

// return true -> simpan elemen yang sedang diloop
// return false -> buang elemen yang sedang diloop
// const filterResult = names.filter((item) => {
//   return item !== "budi";
// });
const filterResult = names.filter((item) => item !== "budi");

// return true -> simpan elemen dan hentikan loop
// return false -> skip elemen dan lanjutkan loop
const findResult = names.find((item) => {
  return item !== "budi";
});

// return true -> simpan true dan lanjutkan loop
// return false -> simpan false dan lanjutkan loop
// return undefined -> simpan undefined dan lanjutkan loop
// return [another_value] -> simpan [another_value] dan lanjutkan loop
const mapResult1 = names.map((item) => {
  return item !== "budi";
});
const mapResult2 = names.map((item, index) => {
  return `Mr. ${item} ${index}`;
});

console.log(filterResult);
console.log(findResult);
console.log(mapResult1);
console.log(mapResult2);

const print10 = () => 10;
const print20 = () => {
  20;
};
const print30 = () => {
  return 30;
};

console.log(print10());
console.log(print20());
console.log(print30());
