import Link from "next/link";

import Intro from "@/components/intro";

export default function Home() {
  return (
    <main>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/dashboard/settings">Settings</Link>
      <Intro
        titlePage="Home Page"
        contentPage="This is home page for my website"
      />
    </main>
  );
}

/* ---------------------------------- NOTES --------------------------------- */
// Component -> Function yang me-return sebuah HTML
// 1. Satu component hanya boleh me-return satu HTML tag saja
// 2. Component harus diexport menggunakan default export
// 3. Nama component harus menggunakan PascalCase
// 4. Tidak boleh menuliskan kode JS/TS di HTML. KECUALI menggunakan {}
