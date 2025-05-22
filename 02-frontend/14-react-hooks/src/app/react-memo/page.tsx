"use client";

import React, { useState } from "react";

function Greeting() {
  console.log("Children rendered!");
  return <p>Hello, Everybody!</p>;
}

const GreetingMemo = React.memo(Greeting);

export default function ReactMemo() {
  console.log("Parent rendered!");
  const [counter, setCounter] = useState(0);

  return (
    <main>
      <h1>React Memo</h1>
      <GreetingMemo />
      <p>{counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
    </main>
  );
}
