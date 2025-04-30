// Scope -> jangkauan
// {} -> Block. Dia akan membuat scope / jangkauan / level yang berbeda
// Rules: Kita hanya bisa membaca sebuah value yang ada di level yang SETARA, atau level di ATAS kita

// Lv. 1
{
  // Lv. 2
  const a = 10;
  {
    // Lv. 3
    {
      // Lv. 4
      console.log(a);
    }
  }
}

console.log(a);

/* ------------------------- When we create a scope? ------------------------ */
function funcName() {
  const name = "";
}
console.log(name);

if (true) {
  const age = 70;
}
console.log(age);

for (let i = 0; i < 5; i++) {
  const score = 100;
}
console.log(score);
