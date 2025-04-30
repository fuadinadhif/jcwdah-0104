const customer = {
  name: "Joana",
  age: 29,
  gender: "Female",
  point: 500,
};

/* --------------------------------- .keys() -------------------------------- */
const customerKeys = Object.keys(customer);
console.log(customerKeys);

/* -------------------------------- .values() ------------------------------- */
const customerValues = Object.values(customer);
console.log(customerValues);

/* ------------------------------- .entries() ------------------------------- */
const customerEntries = Object.entries(customer);
console.log(customerEntries);
