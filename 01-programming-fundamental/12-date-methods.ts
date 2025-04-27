const birthday = new Date("1997-03-18");

console.log(birthday);

/* ----------------------------------- GET ---------------------------------- */
const year = birthday.getFullYear();
const month = birthday.getMonth();
const date = birthday.getDate();
const day = birthday.getDay();

console.log(year);
console.log(month);
console.log(date);
console.log(day);

/* ----------------------------------- SET ---------------------------------- */
birthday.setFullYear(2000);
birthday.setMonth(11);
console.log(birthday);
