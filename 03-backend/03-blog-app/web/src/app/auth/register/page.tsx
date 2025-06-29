"use client";

import React, { useState } from "react";
import { z, ZodError } from "zod";

const registerSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  email: z.string().email("Email must be a valid email address"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(12, "Password cannot be more than 12 characters")
    .regex(/[a-z]/, "Password must contains one lowercase characters")
    .regex(/[A-Z]/, "Password must contains one uppercase characters")
    .regex(/\d/, "Password must contains one number"),
});

export default function Register() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({ name: [], email: [], password: [] });

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    try {
      const validatedUserData = registerSchema.parse(userData);

      const response = await fetch("http://localhost:8000/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(validatedUserData),
      });

      if (response.ok) {
        alert("Register success");
      } else {
        const data = await response.json();
        alert(`Failed to register: ${data.message}`);
      }
    } catch (error) {
      if (error instanceof ZodError) {
        const newErrors = { name: [], email: [], password: [] };

        error.errors.map((item) => {
          newErrors[item.path].push(item.message);
        });

        setErrors(newErrors);
      }
    } finally {
      setUserData({ name: "", email: "", password: "" });
    }
  }

  function validateInput(field: keyof typeof userData) {
    try {
      registerSchema
        .pick({ [field]: true })
        .parse({ [field]: userData[field] });

      setErrors({ ...errors, [field]: [] });
    } catch (error) {
      if (error instanceof ZodError) {
        setErrors({
          ...errors,
          [field]: error.errors.map((item) => item.message),
        });
      }
    }
  }

  return (
    <main>
      <form onSubmit={handleSubmit}>
        {/* User name */}
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Input your name..."
            value={userData.name}
            onChange={(event) => {
              setUserData({ ...userData, name: event.target.value });
              validateInput("name");
            }}
            onBlur={() => validateInput("name")}
          />
          {errors.name.length !== 0
            ? errors.name.map((item, index) => (
                <p key={index} className="text-red-500">
                  {item}
                </p>
              ))
            : null}
        </div>

        {/* User email */}
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Input your email..."
            value={userData.email}
            onChange={(event) => {
              setUserData({ ...userData, email: event.target.value });
              validateInput("email");
            }}
            onBlur={() => validateInput("email")}
          />
          {errors.email.length !== 0
            ? errors.email.map((item, index) => (
                <p key={index} className="text-red-500">
                  {item}
                </p>
              ))
            : null}
        </div>

        {/* User password */}
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Input your password..."
            value={userData.password}
            onChange={(event) => {
              setUserData({ ...userData, password: event.target.value });
              validateInput("password");
            }}
            onBlur={() => validateInput("password")}
          />
          {errors.password.length !== 0
            ? errors.password.map((item, index) => (
                <p key={index} className="text-red-500">
                  {item}
                </p>
              ))
            : null}
        </div>

        <button>Register</button>
      </form>
    </main>
  );
}
