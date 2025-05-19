/* ------------------------ Cara membuat object di JS ----------------------- */
// 1. {}
const a = {};
const b = {};

console.log(a);
console.log(b);

// 2. new Object
const c = new Object();
const d = new Object();

console.log(c);
console.log(d);

/* -------------------------------- Property -------------------------------- */
// Property -> Value di dalam object
// Format property -> [property_key] : [property_value]

// 1. {}
const e = { name: "John Doe", age: 70 };
console.log(e);

// 2.1 new Object
const f = new Object();
console.log(f);

f.name = "John Doe";
f.age = 70;

console.log(f);

// 2.2 new Class
class Profile {
  // class properties
  name;
  age;

  // untuk mengisi class properties
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const g = new Profile("John", 70);
console.log(g);

g.name = "John";
g.age = 70;

console.log(g);

/* ----------------------------- Jenis Property ----------------------------- */
// 1. Reguler property -> null | undefined | number | string | ... | !func()
// 1.1 {}
const h = { score: 100, name: "John Doe" };

// 1.2 new Class
class Student {
  score;
  name;

  constructor(score, name) {
    this.score = score;
    this.name = name;
  }
}
const i = new Student(100, "John Doe");

// 2. Method -> func()
// 2.1 {}
const j = {
  score: 100,
  scoreTimesTen() {
    return this.score * 10;
  },
};

// 2.2 new Class
class Siswa {
  score;

  constructor(score) {
    this.score = score;
  }

  scoreTimesTen() {
    return this.score * 10;
  }
}
const k = new Siswa(100);

/* ------------------------- Access object property ------------------------- */
const l = {
  name: "John Doe",
  greeting() {
    return `Hello, ${this.name}!`;
  },
};

class People {
  #name;

  constructor(name) {
    this.#name = name;
  }

  greeting() {
    return `Hello, ${this.#name}!`;
  }
}
const m = new People("John Doe");

console.log(l);
console.log(l.name);
console.log(m);
console.log(m.name);

// 1. dot (.)
console.log(l.name);
console.log(l.greeting());

// 2. square bracket []
console.log(m["name"]);
console.log(m.greeting());

const employee = { name: "Jane", salary: "5000", nationality: "USA" };
let targetData = "name";
console.log(employee[targetData]);
targetData = "salary";
console.log(employee[targetData]);
/* -------------------------------------------------------------------------- */
/*                                    NOTES                                   */
/* -------------------------------------------------------------------------- */
// 1. () -> bracket | reguler bracket | just bracket
// 2. {} -> curly bracket
// 3. [] -> square bracket
// 4. <> -> angle bracket
