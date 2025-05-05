/* -------------------------------------------------------------------------- */
/*                               Time Complexity                              */
/* -------------------------------------------------------------------------- */
/* --------------------------- 1. O(1) - Constant --------------------------- */
function getFirstIndex(array: any[]): any {
  return array[0]; // 1
}

// 1
// O(1) - Constant

console.log(getFirstIndex([1, 2, 3, 4, 5]));
console.log(getFirstIndex([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

/* --------------------------- 2. O(1) - Constant --------------------------- */
function checkLastIndexType(array: any[]): string {
  const lastIndexType = typeof array[array.length - 1]; // 1
  let result: string; // 1

  if (lastIndexType === "string") {
    // 1
    result = `The last index is STRING`; // 1
  } else if (lastIndexType === "number") {
    // 1
    result = `The last index is NUMBER`; // 1
  } else {
    // 1
    result = `The last index is anything but NUMBER and STRING`; // 1
  } // 1

  return result; // 1
}

// 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1
// O(1) - Constant

console.log(checkLastIndexType([1, 2, null, undefined, "hello"]));

/* ----------------------------------- 3. ----------------------------------- */
function findElement(target: any, array: any[]): string {
  let result: string = ""; // 1

  for (const el of array) {
    if (el === target) {
      result = "FOUND";
    } else {
      result = "NOT FOUND";
    }
  } // n

  return result; // 1
}

// 1 + n + 1
// n
// O(n) - Linear

console.log(findElement(10, [1, 2, 3, 4, 5, null, undefined, 10]));

/* ----------------------------------- 4. ----------------------------------- */
function findMax(arr: number[]) {
  let max = arr[0]; // 1

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  } // n

  return max; // 1
}

// 1 + n + 1
// O(n) - Linear

console.log(findMax([10, 5, 100, 90, 200]));

/* ------------------------------------ 5 ----------------------------------- */
function randomFunction(array) {
  let result: string = ""; // 1

  for (const el of array) {
    for (const el of array) {
      result = "finish";
    } // 1-2-3 | 1-2-3 | 1-2-3 = n
  } // 1-2-3 = n

  return result; // 1
}

// 1 + n * n + 1
// n * n
// n ^ 2
// O(n^2) - Quadratic

console.log(randomFunction([1, 2, 3]));

/* ------------------------------------ 6 ----------------------------------- */
function uselessFunction(array) {
  for (const el of array) {
    console.log("finish");
  } // n

  for (const el of array) {
    console.log("finish");
  } // n

  return "selesai"; // 1
}

// n + n + 1
// 2n + 1
// n
// O(n) - Linear

console.log(uselessFunction([1, 2, 3, 4]));

/* ------------------------------------ 7 ----------------------------------- */
function sortingArray(array) {
  return array.sort((a, b) => a - b);
}

console.log(sortingArray([3, 1, 2, 10, 100]));

/* -------------------------------------------------------------------------- */
/*                              Space Complexity                              */
/* -------------------------------------------------------------------------- */
/* ----------------------------------- 1. ----------------------------------- */
function returnFirstIndex(array) {
  const firstIndex = array[0]; // 1
  return firstIndex;
}

// O(1)

/* ----------------------------------- 2. ----------------------------------- */
function returnLastIndex(array) {
  const intro = "The last index is"; // 1
  const outro = "Function finished"; // 1
  const lastIndex = array[array.length - 1]; // 1
  return intro + " " + lastIndex + ". " + outro;
}

// 1 + 1 + 1
// O(1)

console.log(returnLastIndex([1, 2, 3, 4, 5]));

/* ------------------------------------ 3 ----------------------------------- */
function copyArray(array) {
  const newArray: number[] = []; // n

  for (let i = 0; i < array.length; i++) {
    newArray.push(array[i]);
  }

  const uselessVar = 10; // 1

  return newArray;
}

// n + 1
// O(n)

console.log(copyArray([1, 2, 3, 4, 5]));

/* ------------------------------------ 4 ----------------------------------- */
function createGrid(length: number) {
  const grid: number[][] = [];

  for (let i = 0; i < length; i++) {
    const row: number[] = [];

    for (let j = 0; j < length; j++) {
      row.push(0);
    }

    grid.push(row);
  }

  return grid;
}

console.log(createGrid(10));

/* -------------------------------------------------------------------------- */
/*                                BINARY SEARCH                               */
/* -------------------------------------------------------------------------- */
function binarySearch(array, target) {
  let lowestIdx = 0;
  let highestIdx = array.length - 1;

  while (lowestIdx <= highestIdx) {
    let middleIdx = Math.floor((lowestIdx + highestIdx) / 2);

    if (target === array[middleIdx]) {
      return middleIdx;
    } else if (target > array[middleIdx]) {
      lowestIdx = middleIdx + 1;
    } else {
      highestIdx = middleIdx - 1;
    }
  }

  return -1;
}

console.log(binarySearch([1, 10, 95, 100, 1000], 10));

/* -------------------------------------------------------------------------- */
/*                                    NOTES                                   */
/* -------------------------------------------------------------------------- */
const array = [1, 2, 3];
for (let i = 0; i < 10; i++) {}
for (let i = 0; i < array.length; i++) {}

// 1. Manual Swap
// const firstArray = [1, 2];
// const secondArray = [3, 4];
// const tempArray = [...firstArray];

// firstArray[0] = secondArray[0];
// firstArray[1] = secondArray[1];

// secondArray[0] = tempArray[0];
// secondArray[1] = tempArray[1];

// 2. Destructure Swap
let firstArray = [1, 2];
let secondArray = [3, 4];

[firstArray, secondArray] = [secondArray, firstArray];

console.log(firstArray);
console.log(secondArray);
