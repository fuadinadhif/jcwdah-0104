const array = [10, 20, 30, 40, 50];

for (let i = 0; i < array.length; i++) {
  console.log(i);
  console.log(array[i]);
}

/* --------------------------------- FOR OF --------------------------------- */
for (const el of array) {
  console.log(el);
}

/* --------------------------------- FOR IN --------------------------------- */
for (const el in array) {
  console.log(el);
  console.log(array[el]);
}
