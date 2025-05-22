"use client";

import { useEffect, useState } from "react";

export default function UseEffect() {
  const [userData, setUserData] = useState<{
    results: { name: { first: string } }[];
  } | null>(null);
  const [refreshUser, setRefreshUser] = useState(0);

  // useEffect(() => {}, [])
  useEffect(() => {
    async function getRandomUser() {
      try {
        const res = await fetch("https://randomuser.me/api/");
        const data = await res.json();
        setUserData(data);
      } catch (error) {
        console.error(error);
      }
    }

    getRandomUser();
  }, [refreshUser]);

  console.log(userData);

  return (
    <main>
      <h1>Use Effect</h1>
      <p>{userData?.results[0].name.first}</p>
      <button
        className="border p-2 cursor-pointer"
        onClick={() => setRefreshUser(refreshUser + 1)}
      >
        Refresh User
      </button>
    </main>
  );
}

/* ---------------------------------- NOTES --------------------------------- */
// Specific version
// useEffect -> Hooks yang akan menghandle side effect
// side effect -> Sesuatu yang terjadi di luar fungsi utama kita

// Simple version
// useEffect -> Hooks untuk sinkronisasi data react dengan data eksternal

// 1. useEffect hanya akan dijalankan setelah komponen selesai dirender
// 2. useEffect bisa dijalankan lebih dari satu kali dengan mengatur array dependency-nya
