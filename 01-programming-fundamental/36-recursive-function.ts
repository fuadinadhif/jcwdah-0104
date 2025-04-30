// Recursive -> Suatu hal/fungsi yang memanggil dirinya sendiri

function countDown(timer) {
  if (timer <= 0) {
    return;
  }

  console.log(timer);
  countDown(timer - 1);
}

countDown(10);
