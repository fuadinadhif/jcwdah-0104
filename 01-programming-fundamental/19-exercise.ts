// 1. Mengubah kumpulan hari menjadi tahu, bulan, dan hari
const totalDays = 400;
const years = Math.floor(totalDays / 365);
const remainingDays = totalDays % 365;
const months = Math.floor(remainingDays / 30);
const days = remainingDays % 30;

console.log(years);
console.log(remainingDays);
console.log(months);
console.log(days);

const result1 = `${years} years, ${months} months, ${days} days`;
console.log(result1);

// 2. Menghitung selisih dua tanggal
const date1 = new Date("2022-01-20");
const date2 = new Date("2022-02-01");

// 2.1 Hanya berlaku untuk bulan yang sama
console.log(date1.getDate());
console.log(date2.getDate());
const result2 = Math.abs(date1.getDate() - date2.getDate());
console.log(result2);

// 2.2 Final solution
const diffInMiliseconds = date1.getTime() - date2.getTime();
const diffInSeconds = diffInMiliseconds / 1000;
const diffInMinutes = diffInSeconds / 60;
const diffInHours = diffInMinutes / 60;
// const diffInDays = diffInHours / 24;
const diffInDays = diffInMiliseconds / (1000 * 60 * 60 * 24);

console.log(Math.abs(diffInDays));
