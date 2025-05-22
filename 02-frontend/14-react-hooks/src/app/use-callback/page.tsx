"use client";

import React, { useState, useCallback } from "react";

function Greeting(props: { sayHiFunc: () => void }) {
  console.log("Children rendered!");
  props.sayHiFunc();

  return <p>Hello, Everybody!</p>;
}

const GreetingMemo = React.memo(Greeting);

export default function UseCallback() {
  console.log("Parent rendered!");
  const [counter, setCounter] = useState(0);

  const sayHi = useCallback(() => {
    console.log("Haiiiiii");
  }, []);

  return (
    <main>
      <h1>Use Callback</h1>
      <GreetingMemo sayHiFunc={sayHi} />
      <p>{counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
    </main>
  );
}
