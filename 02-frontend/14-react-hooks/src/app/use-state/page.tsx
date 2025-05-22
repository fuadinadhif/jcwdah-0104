"use client";

import { useState } from "react";

export default function UseState() {
  let counterOne = 0;
  // let counterTwo = 0;
  const [counterTwo, setCounterTwo] = useState(0);

  return (
    <main>
      <h1>Use State Page</h1>
      <p>One: {counterOne}</p>
      <p>Two: {counterTwo}</p>
      <button
        className="border p-2 cursor-pointer"
        onClick={() => {
          counterOne++;
          console.log(counterOne);
        }}
      >
        Increment Counter One
      </button>
      <button
        className="border p-2 cursor-pointer"
        onClick={() => {
          setCounterTwo(counterTwo + 1);
          console.log(counterTwo);
        }}
      >
        Increment Counter Two
      </button>
    </main>
  );
}

/* ---------------------------------- NOTES --------------------------------- */
// useState Hooks -> Hooks yang digunakan untuk membuat state
// state -> Variable spesial yang akan merender ulang komponen dengan nilai state terbarunya setiap kali valuenya berubah
// const [state_name, state_change_function] = useState(default_value)

// DESTRUCTURE
// const arrayNum = [10, 20, 30];
// const ten = arrayNum[0];
// const twenty = arrayNum[1];
// const thirty = arrayNum[2];
// const [ten, twenty, thirty] = arrayNum;
