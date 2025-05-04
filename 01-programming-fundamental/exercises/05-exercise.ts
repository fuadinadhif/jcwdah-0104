/* ------------------------------------ 1 ----------------------------------- */
interface GetArrayStatusResult {
  lowest: number;
  highest: number;
  average: number;
}

function getArrayStatus(arrayOfNum: number[]): GetArrayStatusResult {
  const sortedArray = arrayOfNum.sort((a, b) => a - b);
  let total = 0;

  // for (const el of sortedArray) {
  //   total = total + el;
  // }

  total = sortedArray.reduce((acc, curr) => acc + curr, 0);

  return {
    lowest: sortedArray[0],
    highest: sortedArray[sortedArray.length - 1],
    average: Math.round(total / sortedArray.length),
  };
}

console.log(getArrayStatus([12, 5, 23, 18, 4, 45, 32]));

/* ------------------------------------ 2 ----------------------------------- */
function arrayFruitsToString(fruits: string[]): string {
  fruits.splice(-1, 1, `and ${fruits[fruits.length - 1]}`);

  return fruits.join(", ");
}

console.log(
  arrayFruitsToString([
    "apple",
    "banana",
    "grape",
    "date",
    "watermelon",
    "strawberry",
    "manggo",
  ])
);

/* ------------------------------------ 3 ----------------------------------- */
function getSecondSmallest(arrayOfNum: number[]): number {
  return arrayOfNum.sort((a, b) => a - b)[1];
}

console.log(getSecondSmallest([3, 2, 4, 5, 6, 10, 1, -1]));

/* ------------------------------------ 4 ----------------------------------- */
function sumTwoArray(array1: number[], array2: number[]): number[] {
  let result: number[] = [];

  for (let i = 0; i < array1.length; i++) {
    result.push(array1[i] + array2[i]);
  }

  return result;
}

console.log(sumTwoArray([3, 2, 1], [1, 2, 3]));

/* ------------------------------------ 5 ----------------------------------- */
function addUniqueElement(arrayOfNum: number[], newElement: number): number[] {
  const ifNumExist = Boolean(arrayOfNum.find((num) => num === newElement));

  if (!ifNumExist) {
    arrayOfNum.push(newElement);
  }

  return arrayOfNum;
}

console.log(addUniqueElement([1, 2, 3, 4], 4)); // [1, 2, 3, 4]
console.log(addUniqueElement([1, 2, 3, 4], 7)); // [1, 2, 3, 4, 7]

/* ------------------------------------ 6 ----------------------------------- */
function sumOfAllNums(array: any[]): number {
  let result: number = 0;

  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "number") {
      result = result + array[i];
    }
  }

  return result;
}

console.log(sumOfAllNums([null, 10, undefined, {}, [], "Hello", 1]));

/* ------------------------------------ 7 ----------------------------------- */
// function arrayFromInts(3, 4, 5, 6, 7, 8, 9) {} -> [4, 5, 6]
// function arrayFromInts(5, 4, 5, 6, 7, 8, 9, 10, 11, 12) {} -> [4, 5, 6, 7, 8]

function arrayFromInts(maxSize: number, ...restParams: number[]): number[] {
  const result = restParams.slice(0, maxSize);
  return result;
}

console.log(arrayFromInts(3, 4, 5, 6, 7, 8, 9));
console.log(arrayFromInts(7, 4, 5, 6, 7, 8, 9, 10, 11));

/* -------------------------------------------------------------------------- */
/*                                    NOTES                                   */
/* -------------------------------------------------------------------------- */
const array = [10, 20, 30];
const total = array.reduce((accumulator, current) => {
  return current + accumulator;
}, 100);

/*
LOOP 1
current = 10
accumulator = 100
return = current + accumulator = 10 + 100 = 110

LOOP 2
current = 20
accumulator = 110
return = current + accumulator = 20 + 110 = 130

LOOP 3
current = 30
accumulator = 130
return = current + accumulator = 130 + 30 = 160
*/

// console.log(total);

const userData = [
  { name: "John", expense: 1000 },
  { name: "Jane", expense: 5000 },
  { name: "Angel", expense: 2000 },
];

// const totalExpense =
//   userData[0].expense + userData[1].expense + userData[2].expense;
const totalExpense = userData.reduce((acc, curr) => {
  return acc + curr.expense;
}, 0);

// console.log(totalExpense);

// const arrayOfNum = [1, 2, 3, 4, 5];
// arrayOfNum.splice(-2, 0, 1000);

// console.log(arrayOfNum);

const arrayOfNum = [1, 2, 3, 4, 5];
console.log(Boolean(arrayOfNum.find((num) => num === 6)));

console.log(typeof 1);
console.log(typeof {});
console.log(typeof "hello");
console.log(typeof null);

/* ----------------------------- SLICE VS SPLICE ---------------------------- */
const array1 = [10, 20, 30, 40, 50];
const sliceResult = array1.slice(0, 3);
console.log(array1);
console.log(sliceResult);

const array2 = [10, 20, 30, 40, 50];
const spliceResult = array2.splice(0, 3);
console.log(array2);
console.log(spliceResult);
