function createCounter() {
  let count: number = 0; // Tidak akan mudah terotak-atik

  return function () {
    let score: number = 100;

    count = count + 1;
    score = score + 1;

    return [count, score];
  };
}

const counter = createCounter();
console.log(counter);

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
