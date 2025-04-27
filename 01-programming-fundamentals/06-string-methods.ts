{
  /* ---------------------------------- SLICE --------------------------------- */
  let message: string = "21 April is Kartini Day";
  let sliceResultOne: string = message.slice(12);
  let sliceResultTwo: string = message.slice(12, 19);

  console.log(sliceResultOne);
  console.log(sliceResultTwo);

  let score: number = 1000;
  // let sliceResultThree = score.slice();

  /* -------------------------- REPLACE & REPLACE ALL ------------------------- */
  let chat = "Hai, ini nomor teleponku +6208989097050";
  let replacePhonenumber1 = chat.replace("+6208989097010", "***");
  let replacePhonenumber2 = chat.replace(/\+62\d{9,11}/, "***");

  console.log(replacePhonenumber1);
  console.log(replacePhonenumber2);

  /* ------------------------ TOUPPERCASE & TOLOWERCASE ----------------------- */
  let fullName = "Jonathan Cristhie";
  let fullNameUpper = fullName.toUpperCase();
  let fullNameLower = fullName.toLowerCase();

  console.log(fullNameUpper);
  console.log(fullNameLower);
  console.log("hANdoKO".toLowerCase());
  console.log("hANdoKO".toUpperCase());

  /* --------------------------------- CONCAT --------------------------------- */
  let greetings = "Hi";
  let firstName = "Sharon";
  let middleName = "January";
  let lastName = "Middleton";

  console.log(
    greetings.concat(", ", firstName, " ", middleName, " ", lastName)
  );

  /* ---------------------------------- TRIM ---------------------------------- */
  let phoneNumber = "   +62 08989097010    ";
  console.log(phoneNumber);
  console.log(phoneNumber.trim());
}

/* -------------------------------------------------------------------------- */
/*                                    NOTES                                   */
/* -------------------------------------------------------------------------- */
/* --------------------------------- METHOD --------------------------------- */
// Fungsi / fitur spesial yang ada di tiap tipe data
