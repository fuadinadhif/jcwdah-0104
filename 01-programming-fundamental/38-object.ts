const carBrand: string = "BMW";
const carModel: string = "E36";
const carPrice: number = 50_000_000;

const car = {
  brand: "BMW",
  model: "E36",
  price: 50_000_000,
};

/* ------------------------------ Create Object ----------------------------- */
// 1.
let object1 = { id: 1, name: "Bambang" };
console.log(object1);

// 2.
let object2 = new Object({ id: 1, name: "Bambang" });
console.log(object2);

/* --------------------------- Object Types in TS --------------------------- */
// interface || type
interface MotorcyleType {
  brand: string;
  model: string;
  price: number;
  color: string;
}

const motorcyle: MotorcyleType = {
  brand: "Honda",
  model: "X-Max",
  price: 50_000_000,
  color: "black",
};

/* --------------------------------- Methods -------------------------------- */
// Object property yang valuenya berupa fungsi
const user = {
  name: "Jonathan",
  age: 500,
  greet: () => {
    return `My name is ${this.name} and my age is ${this.age}`;
  },
};

console.log(user.name);
console.log(user["age"]);
console.log(user.greet());

/* -------------------- Add, Update, and Delete Property -------------------- */
interface PersonType {
  name: string;
  age?: number;
  hobby?: string;
}

const person: PersonType = {
  name: "Frangky",
  age: 29,
};
console.log(person);

// Add
person.hobby = "Memancing";
console.log(person);

// Update
person.name = "Andrew";
console.log(person);

// Delete
delete person.age;
console.log(person);

/* ---------------------------- Optional Chaining --------------------------- */
let people = {};

console.log(people);
console.log(people.address);
console.log(people.address?.street);
console.log(people.address?.street?.houseNumber);
