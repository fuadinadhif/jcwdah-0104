{
  // 1. Find the area of a rectangle
  // Formula: rectangle area = length * width
  const length: number = 5;
  const width: number = 3;
  const result: number = length * width;
  console.log(result);
}

{
  // 2. Find the perimeter of a rectangle
  // Formula: rectangle perimeter = 2 * (length + width)
  const length: number = 5;
  const width: number = 3;
  const result: number = 2 * (width + length);
  console.log(result);
}

{
  // 3. Find diameter, area, and circumference of a circle
  // Formula:
  // - Diameter = 2 * radius
  // - Circumference = 2 * PI * radius
  // - Area = PI * (radius ** 2)
  const radius: number = 5;
  const diameter: number = 2 * radius;
  const circumference: number = 2 * Math.PI * radius;
  const area: number = Math.PI * radius ** 2;
  console.log(diameter);
  console.log(+circumference.toFixed(2));
  console.log(Number(area.toFixed(2)));
  console.log(parseInt(area.toFixed(2)));
}

{
  // 4. Find the third angle of a triangles
  // Formula: 3rd angle = 180 - (1st angle + 2nd angle)
  const firstAngle: number = 80;
  const secondAngle: number = 65;
  const thirdAngle: number = 180 - (firstAngle + secondAngle);
  console.log(thirdAngle);
}

{
  // 5. Mengubah kumpulan hari menjadi tahu, bulan, dan hari
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
}

{
  // 6 Menghitung selisih dua tanggal
  const date1 = new Date("2022-01-20");
  const date2 = new Date("2022-02-01");

  // 6.1 Hanya berlaku untuk bulan yang sama
  console.log(date1.getDate());
  console.log(date2.getDate());
  const result2 = Math.abs(date1.getDate() - date2.getDate());
  console.log(result2);

  // 6.2 Final solution
  const diffInMiliseconds = date1.getTime() - date2.getTime();
  const diffInSeconds = diffInMiliseconds / 1000;
  const diffInMinutes = diffInSeconds / 60;
  const diffInHours = diffInMinutes / 60;
  // const diffInDays = diffInHours / 24;
  const diffInDays = diffInMiliseconds / (1000 * 60 * 60 * 24);

  console.log(Math.abs(diffInDays));
}

/* -------------------------------------------------------------------------- */
/*                                    NOTES                                   */
/* -------------------------------------------------------------------------- */
console.log(Math.PI);
