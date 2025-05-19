/* -------------------------------------------------------------------------- */
/*                                    STACK                                   */
/* -------------------------------------------------------------------------- */
class Stack {
  #maxSize: number;
  #container: any[] = [];

  constructor(maxSize: number) {
    this.#maxSize = maxSize;
  }

  pushData(newData: any) {
    if (this.#container.length >= this.#maxSize) {
      return "Stack overflow!";
    }

    this.#container.push(newData);
  }

  popData() {
    if (this.#container.length <= 0) {
      return "Stack underflow";
    }

    this.#container.pop();
  }

  getMaxSize() {
    return this.#maxSize;
  }

  getStack() {
    return this.#container;
  }
}

const browserStack = new Stack(10);
const playlistStack = new Stack(3);

console.log(browserStack.getMaxSize());
console.log(playlistStack.getMaxSize());

console.log(browserStack.getStack());
console.log(playlistStack.getStack());

browserStack.pushData("http://google.com");
browserStack.pushData("http://twitter.com");
browserStack.pushData("http://meta.com");

console.log(browserStack.getStack());
console.log(playlistStack.getStack());

browserStack.popData();
browserStack.popData();

console.log(browserStack.getStack());

console.log(playlistStack.pushData("Dia dia dia"));
console.log(playlistStack.pushData("Somewhere we know"));
console.log(playlistStack.pushData("Indonesia raya"));
console.log(playlistStack.pushData("Garuda pancasila"));

console.log(playlistStack.getStack());

console.log(playlistStack.getStack());
console.log(playlistStack.popData());
console.log(playlistStack.getStack());
console.log(playlistStack.popData());
console.log(playlistStack.getStack());
console.log(playlistStack.popData());

console.log(playlistStack.getStack());

console.log(playlistStack.popData());

console.log(playlistStack.getMaxSize());

/* -------------------------------------------------------------------------- */
/*                                     MAP                                    */
/* -------------------------------------------------------------------------- */
const fruits: string[] = [
  "apple",
  "banana",
  "banana",
  "grape",
  "watermelon",
  "apple",
];
const setFruits = new Set(fruits);
console.log(setFruits);

console.log(setFruits.size);

setFruits.add("papaya");
console.log(setFruits);

console.log(setFruits.size);
console.log(setFruits.has("apple"));

setFruits.clear();

console.log(setFruits.has("apple"));

console.log(setFruits.size);

const numbers = [10, 1, 1, 1, 2, 2, 4, 3, 2, 3, 5, 6, 7, 10, 10, 5, 5];
const setNumbers = new Set(numbers);
console.log(setNumbers);

const uniqueNumbers = Array.from(setNumbers);
console.log(uniqueNumbers);

/* -------------------------------------------------------------------------- */
/*                                     MAP                                    */
/* -------------------------------------------------------------------------- */
const myMap = new Map();
myMap.set("name", "Alice");
myMap.set(10, "Number");
myMap.set({}, "Object");
console.log(myMap);

const myObj = {};
myObj.name = "Alice";
myObj[10] = "Number";
myObj[{}] = "Object";
console.log(myObj);
/* -------------------------------------------------------------------------- */
/*                                    NOTES                                   */
/* -------------------------------------------------------------------------- */
function sumTwo(num) {
  console.log(num + 2);
}

function sumThree(num) {
  return num + 3;
}

console.log(sumTwo(10));
console.log(sumThree(10));

{
  const profile1 = { name: "John" };
  const profile2 = { name: "Jane" };
  const profile3 = { name: "Josh" };

  console.log(profile1);
  console.log(profile2);
  console.log(profile3);
}
{
  class Profile {
    name: string;

    constructor(name: string) {
      this.name = name;
    }
  }

  const profile1 = new Profile("John");
  const profile2 = new Profile("Jane");
  const profile3 = new Profile("Josh");

  console.log(profile1);
  console.log(profile2);
  console.log(profile3);
}

// [1, 2, 3].map()
