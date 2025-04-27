/* ------------------------------ FOR LET LOOP ------------------------------ */
/*
for ([kondisi yang menentukan sampai kapan loop berjalan]) {
  [algoritma yang akan dijalankan selama loop masih aktif]
}
*/
for (let i = 0; i < 3; i++) {
  console.log("Hello");
}

/* ------------------------------- WHILE LOOP ------------------------------- */
// while (true) {
//   console.log("Hi");
// }

let i = 0;
while (i < 3) {
  console.log("Hi");
  i++;
}

while (false) {
  console.log("Salam");
}

/* ------------------------------ DO WHILE LOOP ----------------------------- */
let x = 0;
do {
  console.log("Salam");
  x++;
} while (x < 3);

do {
  console.log("Salam");
} while (false);
