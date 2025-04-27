/* ---------------------------------- BREAK --------------------------------- */
let sum = 0;

while (true) {
  if (sum === 5) {
    console.log(sum);
    break;
  }

  console.log(sum);

  sum++;
}

/* -------------------------------- CONTINUE -------------------------------- */
let counter = 0;

while (counter < 5) {
  counter++;

  if (counter === 2) {
    continue;
  }

  console.log(counter);
}
