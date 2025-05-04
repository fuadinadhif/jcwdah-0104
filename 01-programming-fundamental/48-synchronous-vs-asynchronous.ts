/* --------------------------- Synchronous Example -------------------------- */
// console.log(1);
// console.log(2);

// for (let i = 0; i < 9000000000; i++) {}

// console.log(3);
// console.log(4);
// console.log(5);

/* -------------------------- Asynchronous Example -------------------------- */
console.log(1);

setTimeout(() => {
  console.log(2);
}, 1000);

setTimeout(() => {
  console.log(3);
}, 500);

console.log(4);

for (let i = 0; i < 9000000000; i++) {}
