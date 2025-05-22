"use client";

import { useReducer } from "react";
import { counterReducer } from "@/reducers/counter-reducer";

export default function UseReducer() {
  const [counter, counterDispatch] = useReducer(counterReducer, 0);

  return (
    <main>
      <h1>Use Reducer</h1>
      <div>
        <p>{counter}</p>
        <button onClick={() => counterDispatch("ADD_1")}>Increment by 1</button>
        <button onClick={() => counterDispatch("ADD_10")}>
          Increment by 10
        </button>
        <button onClick={() => counterDispatch("ADD_100")}>
          Increment by 100
        </button>
        <button onClick={() => counterDispatch("RESET")}>Reset</button>
        <button onClick={() => counterDispatch("SUB_1")}>Decrement by 1</button>
        <button onClick={() => counterDispatch("SUB_10")}>
          Decrement by 10
        </button>
        <button onClick={() => counterDispatch("SUB_100")}>
          Decrement by 100
        </button>
      </div>
    </main>
  );
}

/* ---------------------------------- NOTES --------------------------------- */
// Merapikan useState yang sudah terlalu kompleks
// 1. button ditekan untuk menjalankan onClick
// 2. fungsi dispatch dijalankan
// 3. fungsi dispatch mengirim argumen + state saat ini ke fungsi reducer
// 4. fungsi reducer dijalankan
// 5. Hasil return fungsi reducer akan menjadi nilai baru variable state-nya
