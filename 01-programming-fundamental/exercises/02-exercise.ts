{
  // 1. Check odd and even number
  // Formula: Apakah bilangan itu habis dibagi dua ? true : false
  let num: number = -1;
  const isEven: boolean = num % 2 === 0;

  if (num !== undefined) {
    if (isEven === true) {
      console.log(`${num} is even`);
    } else {
      console.log(`${num} is odd`);
    }
  } else {
    console.log("Please input a number");
  }
}

{
  // 2. Check prime number
  const num: number = 2500;
  let isPrime: boolean = true;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
    console.log(i);
  }

  if (num <= 1) {
    isPrime = false;
  }

  if (isPrime === true) {
    console.log(`${num} is prime!`);
  } else {
    console.log(`${num} is not prime!`);
  }
}

{
  // 3. Find the sum of the number, 1 to N
  const num: number = 5;
  let result: number = 0;

  for (let i = 0; i <= num; i++) {
    result = result + i;
  }

  console.log(result);

  /* LOOP
  Loop 1:
  i = 0
  result = 0
  nextResult = 0 + 0 = 0

  Loop 2:
  i = 1
  result = 0
  nextResult = 0 + 1 = 1

  Lopp 3:
  i = 2
  result = 1
  nextResult = 1 + 2 = 3

  Loop 4:
  i = 3
  result = 3
  nextResult = 3 + 3 = 6

  Loop 5:
  i = 4
  result = 6
  nextResult = 6 + 4 = 10

  Loop 6:
  i = 5
  result = 10
  nextResult = 10 + 5 = 15
  */
}

{
  // 4. Find the factorial of number
  // Formula: 5! = 1 * 2 * 3 * 4 * 5
  const num: number = 5;
  let result: number = 1;

  for (let i = 1; i <= num; i++) {
    result = result * i;
  }

  console.log(result);
}

{
  // 5. Fibonacci
  const row: number = 16;
  let a: number = 0;
  let b: number = 1;
  let c: number | null = null;

  for (let i = 2; i <= row; i++) {
    c = a + b;
    a = b;
    b = c;
  }

  console.log(c);
}

/* -------------------------------------------------------------------------- */
/*                                    NOTES                                   */
/* -------------------------------------------------------------------------- */
console.log(5 % 2 === 0);
// console.log(undefined % 2 === 0);

// console.log(null % 0 === 0);
