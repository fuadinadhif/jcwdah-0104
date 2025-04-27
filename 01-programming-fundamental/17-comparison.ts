/* ---------------------------------- EQUAL --------------------------------- */
// 1. Loose equal ==
console.log(1 == 1);
console.log("1" == "1");
console.log("1" == 1);
console.log(null == undefined);

// 2. Strict equal ===
console.log(1 === 1);
console.log("1" === "1");
console.log("1" === 1);
console.log(null === undefined);

/* -------------------------------- NOT EQUAL ------------------------------- */
// 1. Loose not equal !=
console.log(1 != 1);
console.log(1 != "1");

// 2. Strict not equal !==
console.log(1 !== 1);
console.log(1 !== "1");

/* --------------------------- Greater & Less Than -------------------------- */
console.log(0 > 5);
console.log(0 < 5);
console.log(0 < 0);

/* --------------------- Greater & Less Than or Equal To -------------------- */
console.log(0 <= 0);
console.log(0 >= 0);

let health = 0;

if (health > 0) {
  console.log("Alive");
} else {
  console.log("Dead");
}

/* -------------------------------------------------------------------------- */
/*                                    NOTES                                   */
/* -------------------------------------------------------------------------- */
// 1. Hasil dari comparison selalu berupa Boolean
// 2. Perbedaan utama antara loose dan strict comparison ada di type conversion
