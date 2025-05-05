const studentProfile = [
  {
    name: "David",
    age: 17,
  },
];

console.log(studentProfile);

/* --------------------------- JavaScript to JSON --------------------------- */
const studentProfileJSON = JSON.stringify(studentProfile);
console.log(studentProfileJSON);

/* --------------------------- JSON to JavaScript --------------------------- */
const studentProfileJS = JSON.parse(studentProfileJSON);
console.log(studentProfileJS);
