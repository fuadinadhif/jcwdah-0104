"use client";

import { useMemo, useState } from "react";

export default function UseMemo() {
  const [counter, setCounter] = useState(0);

  const total = useMemo(() => {
    console.log("Function running!");
    let result = 0;
    for (let i = 0; i < 1000; i++) {
      result++;
    }
    return result;
  }, []);

  return (
    <main>
      <h1>Use Memo</h1>
      <p>Total: {total}</p>
      <p>Counter: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
    </main>
  );
}

/* ---------------------------------- NOTES --------------------------------- */
// Mengingat hasil eksekusi sebuah fungsi
