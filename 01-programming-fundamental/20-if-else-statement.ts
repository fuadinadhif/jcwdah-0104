{
  /* ------------------------------ IF STATEMENT ------------------------------ */
  const age: number = 16;

  // 1. Kondisi menggunakan comparison - Dilihat hasil perbandingannya
  if (age >= 17) {
    console.log("Please enter");
  }

  // 2. Single value - Diubah nilai valuenya ke dalam boolean
  if ("a") {
    console.log("Show!");
  }
}

/* ----------------------------- ELSE STATEMENT ----------------------------- */
if (10 >= 5) {
  console.log("Hore");
} else {
  console.log("Aduh");
}

/* --------------------------------- ELSE IF -------------------------------- */
let president: string = "Prabowo";

if (president === "Prabowo") {
  console.log("Prabowo president Indonesia");
} else if (president === "Gus Dur") {
  console.log("Gus Dur president tahun lalu");
} else if (president === "Megawati") {
  console.log("Membara");
} else {
  console.log("Siapa president Indonesia?");
}

/* ----------------------------- NESTED IF ELSE ----------------------------- */
if (10 < 50) {
  if (20 < 10) {
    console.log("Here");
  }
}

/* -------------------------------------------------------------------------- */
/*                                    NOTES                                   */
/* -------------------------------------------------------------------------- */
console.log(Boolean("a"));
