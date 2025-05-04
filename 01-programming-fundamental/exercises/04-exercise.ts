/* ------------------------------------ 1 ----------------------------------- */
function printTriangle(height: number): string {
  let result: string = "";
  let counter = 1;

  for (let i = 0; i < height; i++) {
    for (let j = 0; j <= i; j++) {
      if (counter < 10) {
        result = result + "0" + counter + " ";
      } else {
        result = result + counter + " ";
      }

      counter++;
    }

    result = result + "\n";
  }

  return result;
}

/*
01\n
02 03\n
04 05 06\n
07 08 09 10\n
*/
/*
LOOP I1
i = 0
result = ""

  LOOP J1
  i = 0
  j = 0
  counter = 1
  result = "" + 1 = "1"

---

LOOP I2
i = 1
result = "1"

  LOOP J1
  i = 1
  j = 0
  counter = 2
  result = "1" + 2 = "12"

  LOOP J2
  i = 1
  j = 1
  counter = 3
  result = "12" + 3 = "123"
*/

// console.log(printTriangle(10));

/* ------------------------------------ 2 ----------------------------------- */
function fizzBuzz(num: number): string {
  let result: (string | number)[] = [];

  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push("FizzBuzz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else {
      result.push(i);
    }
  }

  return result.join(",");
}

console.log(fizzBuzz(15));

/* ------------------------------------ 3 ----------------------------------- */
function calculateBMI(weight: number, height: number): string {
  const BMI = weight / (height / 100) ** 2;

  if (BMI < 18.5) {
    return "less weight";
  } else if (BMI >= 18.5 && BMI <= 24.9) {
    return "ideal";
  } else if (BMI >= 25.0 && BMI <= 29.9) {
    return "overweight";
  } else if (BMI >= 30.0 && BMI <= 39.9) {
    return "very overweight";
  } else {
    return "obesity";
  }
}

// console.log(calculateBMI(70, 174));

/* ------------------------------------ 4 ----------------------------------- */
function removeOddNumbers(arrayOfNum: number[]): number[] {
  const result = arrayOfNum.filter((num) => num % 2 === 0);
  return result;
}

console.log(
  removeOddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])
);

/* ------------------------------------ 5 ----------------------------------- */
// "Halo, apa kabar?" -> ["Halo,", "apa", "kabar?"]
function convertStringToArray(sentence: string): string[] {
  const result = sentence.split(" ");
  return result;
}

console.log(convertStringToArray("Halo, apa kabar?"));

/* -------------------------------------------------------------------------- */
/*                                    NOTES                                   */
/* -------------------------------------------------------------------------- */
// function sumTwo(num: number): number {
//   // console.log(num + 2);
//   return num + 2;
// }

// console.log(sumTwo(10));
