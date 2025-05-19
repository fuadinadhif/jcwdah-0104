function countDown(start: number): number {
  if (start < 0) {
    return 10;
  }

  console.log(start);

  countDown(start - 1);
}

console.log(countDown(3));
