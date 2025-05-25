"use client";

import { v7 as uuid } from "uuid";
import React, { useEffect, useState } from "react";
import Button from "@/components/button";

export default function Home() {
  const [result, setResult] = useState(0);
  const [inputs, setInputs] = useState<number[]>([]);
  const [operators, setOperators] = useState<string[]>([]);

  useEffect(() => {
    window.addEventListener("keydown", (e) => console.log(e.key));
  });

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    const button = e.target as HTMLButtonElement;
    const value = button.textContent;

    if (!value) {
      return;
    }

    if (
      value === "c" ||
      value === "=" ||
      value === "." ||
      value === "x" ||
      value === "+" ||
      value === "-" ||
      value === "/"
    ) {
      setOperators([...operators, value]);
    } else {
      setInputs([...inputs, parseFloat(value)]);
    }
  }

  function handleCalculate() {} // to be continue

  return (
    <main className="min-h-screen grid place-items-center">
      {/* calculator wrapper */}
      <div className="border-[8px] border-broken-white w-fit p-[24px] rounded-[42px]">
        {/* result */}
        <div className="h-[166px]">
          <p>0</p>
        </div>

        {/* buttons */}
        <div className="grid grid-cols-5 w-fit gap-1">
          <Button
            buttonClass="bg-broken-white"
            divClass="bg-broken-white white-neumorphism"
            content="c"
          />
          <Button
            buttonClass="bg-deep-gray"
            divClass="bg-deep-gray gray-neumorphism"
            content="x"
          />
          <Button
            buttonClass="bg-deep-gray"
            divClass="bg-deep-gray gray-neumorphism"
            content="-"
          />
          <Button
            buttonClass="bg-deep-gray"
            divClass="bg-deep-gray gray-neumorphism"
            content="+"
          />
          <Button
            buttonClass="bg-deep-gray"
            divClass="bg-deep-gray gray-neumorphism"
            content="/"
          />
          <Button
            buttonClass="bg-broken-white"
            divClass="bg-broken-white white-neumorphism"
            content="1"
          />
          <Button
            buttonClass="bg-broken-white"
            divClass="bg-broken-white white-neumorphism"
            content="2"
          />
          <Button
            buttonClass="bg-broken-white"
            divClass="bg-broken-white white-neumorphism"
            content="3"
          />
          <Button
            buttonClass="bg-broken-white"
            divClass="bg-broken-white white-neumorphism"
            content="4"
          />
          <Button
            buttonClass="bg-broken-white"
            divClass="bg-broken-white white-neumorphism"
            content="5"
          />
          <Button
            buttonClass="bg-broken-white"
            divClass="bg-broken-white white-neumorphism"
            content="6"
          />
          <Button
            buttonClass="bg-broken-white"
            divClass="bg-broken-white white-neumorphism"
            content="7"
          />
          <Button
            buttonClass="bg-broken-white"
            divClass="bg-broken-white white-neumorphism"
            content="8"
          />
          <Button
            buttonClass="bg-broken-white"
            divClass="bg-broken-white white-neumorphism"
            content="9"
          />
          <Button
            buttonClass="bg-broken-white"
            divClass="bg-broken-white white-neumorphism"
            content="0"
          />
        </div>
      </div>
    </main>
  );
}
