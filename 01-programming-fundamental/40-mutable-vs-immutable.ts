const saldo = 100_000_000_000;
const arrayOfAlphabets = ["a", "b", "c", "d", "e", "f"];

console.log(saldo);
console.log(arrayOfAlphabets);

// saldo -> tidak bisa diubah
// arrayOfAlphabets -> .splice()

arrayOfAlphabets.splice(3);

console.log(saldo); // 500000000
console.log(arrayOfAlphabets); // ["a", "b", "c"]
