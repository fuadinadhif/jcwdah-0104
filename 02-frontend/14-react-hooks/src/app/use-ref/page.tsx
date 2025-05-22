"use client";

import { useRef } from "react";

export default function UseRef() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  // const inputRef = document.querySelector("input");

  return (
    <main className="grid min-h-screen place-items-center">
      <h1>Use Ref</h1>
      <form>
        <input
          type="text"
          placeholder="Type on me!"
          className="border"
          ref={inputRef}
        />
      </form>
      <button onClick={() => inputRef?.current?.focus()}>Activate Input</button>
    </main>
  );
}
