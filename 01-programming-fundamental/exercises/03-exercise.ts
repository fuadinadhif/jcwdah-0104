{
  // 1. Print multiplication table of a given integer
  /*
  1 * 5 = 5
  2 * 5 = 10
  3 * 5 = 15
  ...
  9 * 5 = 45
  */
  const num: number = 9;
  for (let i = 1; i <= 9; i++) {
    console.log(`${num} * ${i} = ${num * i}`);
  }
}

{
  // 2. Check palindrome
  const text: string = "MaDam";
  let reversedText: string = "";

  for (let i = 0; i < text.length; i++) {
    reversedText = text[i] + reversedText;
    console.log(reversedText);
  }

  if (text.toLowerCase() === reversedText.toLowerCase()) {
    console.log(`${text} is palindrome!`);
  } else {
    console.log(`${text} is NOT palindrome!`);
  }
}

{
  // 3. Convert centimeter to kilometer
  const num: number = 100;
  const kilometer = num / 10000;
  const result = `${kilometer} km`;
  console.log(result);

  const formatter = new Intl.NumberFormat("id-ID", {
    style: "unit",
    unit: "kilometer",
  });
  console.log(formatter.format(kilometer));
}

{
  // 4. Format number as a currency (IDR)
  const amount: number = 100;
  const formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const result = formatter.format(amount);
  console.log(result);
}

{
  // 5. Remove first occurence of a given string in another string. "Hello world", "ell" -> "Ho world"
  const text: string = "Hello world";
  const result = text.replace("ell", "");
  console.log(result);
}

{
  // 6. Write a code to capitalize the first letter of each word. "hello my name is jonathan" -> "Hello My Name Is Jonathan"
  const sentence: string = "hello my name is jonathan";
  let result: string = "";

  for (let i = 0; i < sentence.length; i++) {
    let currentChar = sentence[i];
    let prevChar = sentence[i - 1];

    if (i === 0) {
      result = result + currentChar.toUpperCase();
    } else if (prevChar === " ") {
      result = result + currentChar.toUpperCase();
    } else {
      result = result + currentChar;
    }
  }

  console.log(result);
}

{
  // 7. Swap case. "tHE quICk bRowN" -> "The QUicK BrOWn"
  const sentence: string = "tHE quICk bRowN";
  let result: string = "";

  for (let i = 0; i < sentence.length; i++) {
    let currentChar = sentence[i];
    console.log(currentChar);

    if (currentChar === currentChar.toLowerCase()) {
      result = result + currentChar.toUpperCase();
    } else {
      result = result + currentChar.toLowerCase();
    }
  }

  console.log(result);
}

{
  // 8. Find the largest of two given integers
  const num1: number = 42;
  const num2: number = 270;

  if (num1 > num2) {
    console.log(`${num1} is greater than ${num2}`);
  } else {
    console.log(`${num2} is greater than ${num1}`);
  }
}

{
  // 9. Sort three numbers
}

{
  // 10. Print 1 if string, print 2 if number, and print 3 if other data types
  // const inputData: string | number | boolean | object | null | undefined | unknown = {};
  const inputData: any = {};

  if (typeof inputData === "string") {
    console.log(1);
  } else if (typeof inputData === "number") {
    console.log(2);
  } else {
    console.log(3);
  }
}

{
  // 11. Change every letter "a" to "*" in a sentence
  const sentence: string = "An apple a day keeps the doctor away";
  let result: string = "";

  for (let i = 0; i < sentence.length; i++) {
    const currentChar: string = sentence[i];

    if (currentChar === "A" || currentChar === "a") {
      result = result + "*";
    } else {
      result = result + currentChar;
    }
  }

  console.log(result);
}

/* -------------------------------------------------------------------------- */
/*                                    NOTES                                   */
/* -------------------------------------------------------------------------- */
// Logical AND &&
console.log(10 === 10 && "A" === "A");

// Short Circuit AND &&
// console.log("ABC" && 123);

// number: annotasi TS
const age: number = 70;

// Number: Fungsi yang akan merubah tipe data lain ke tipe data number
console.log("2005");
console.log(Number("2005"));

// if (currentChar === currentChar.toLowerCase()) {
//   result = result + currentChar.toUpperCase();
// } else {
//   result = result + currentChar.toLowerCase();
// }
const currentChar = "T";
console.log(currentChar === currentChar.toLowerCase());

// typeof -> keyword JS untuk memeriksa tipe data sebuah variable / data
console.log(typeof 1);
console.log(typeof "1");
console.log(typeof undefined);
console.log(typeof false);
console.log(typeof {});
console.log(typeof []);
console.log(typeof null);
