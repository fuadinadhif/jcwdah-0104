/* ------------------------------- toString() ------------------------------- */
{
  const array = [1, 2, 3, 4, 5, undefined, null, "Asus"];
  console.log(array.toString());
}

/* --------------------------------- join() --------------------------------- */
{
  const array = ["Hello", "You", "All"];
  console.log(array.join(""));
  console.log(array.join(" "));
  console.log(array.join("-"));
  console.log(array.join("."));
  console.log(array.join("123"));
}

/* ---------------------------------- pop() --------------------------------- */
// Menghapus element di posisi paling akhir
{
  const array = [1, 2, 3, 4, 5];
  const popResult = array.pop();
  console.log(array);
  console.log(popResult);
}

/* --------------------------------- push() --------------------------------- */
// Menambahkan element di posisi paling akhir
{
  const array = [1, 2, 3];
  array.push(4);
  array.push(10);
  console.log(array);
}

/* --------------------------------- shift() -------------------------------- */
// Menghapus element di posisi paling awal
{
  const array = [1, 2, 3];
  array.shift();
  console.log(array);
}

/* -------------------------------- unshift() ------------------------------- */
// Menambahkan element di posisi paling awal
{
  const array = [1, 2, 3];
  array.unshift(0);
  console.log(array);
}

/* --------------------------------- length --------------------------------- */
{
  const arrayFirst = [1, 2, 3, 4, 5, 6, 10, 90, 100, 60];
  const arraySecond = ["A", [], {}, 1, 2, 3, 4, 5];
  console.log(arrayFirst.length);
  console.log(arraySecond.length);
}

/* -------------------------------- concat() -------------------------------- */
// Menggabungkan dua atau lebih array menjadi satu
{
  const arrayFirst = [1, 2, 3];
  const arraySecond = [4, 5, 6];
  const arrayThird = [7, 8, 9];
  console.log(arrayFirst.concat(arraySecond));
  console.log(arrayFirst.concat(arraySecond, arrayThird));
}

/* -------------------------------- splice() -------------------------------- */
// Memotong sebuah array (CUT - original array akan berubah)
// splice(start_index)
// splice(start_index, delete_count)
// splice(start_index, delete_count, item_1, item_2, ..., item_n)
{
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  console.log(days.splice(4));
  console.log(days);

  const array = ["A", "B", "C", "D", "E"];
  console.log(array.splice(1, 2));
  console.log(array);

  const months = ["Jan", "Feb", "March", "April"];
  console.log(months.splice(2, 1, "November", "December"));
  console.log(months);
}

/* --------------------------------- slice() -------------------------------- */
// Memotong sebuah array (COPY - original array tidak akan berubah)
// slice(start_index)
// slice(start_index, end_index)
{
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  console.log(days.slice(4, 7));
  console.log(days);
}

/* --------------------------------- sort() --------------------------------- */
// Sorting array
{
  const array = [10, 5, 9, 100, 95, 11];
  console.log(array.sort());
  // ASCENDING
  console.log(array.sort((a, b) => a - b));
  // DESCENDING
  console.log(array.sort((a, b) => b - a));
}

/* -------------------------------- reverse() ------------------------------- */
// Memutar balik sususan (reverse) element di dalam suatu array
{
  const array = [1, 2, 3, 4, 5, 6];
  console.log(array.reverse());
}

/* ---------------------------------- map() --------------------------------- */
// 1. Memanipulasi sebuah array berdasarkan fungsi yang kita beri
// 2. Panjang array hasil manipulasi akan SELALU sama panjangnya dengan array original
{
  const array = [6, 7, 8, 9];
  console.log(
    array.map(() => {
      return "Hi";
    })
  );
  console.log(
    array.map((element, index) => {
      if (element === 8) {
        return "***";
      }

      return element * 10;
    })
  );
}

/* -------------------------------- filter() -------------------------------- */
// Memfilter array berdasarkan kondisi yang kita buat
{
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log(
    array.filter((element, index) => {
      if (element >= 6) {
        return true;
      } else {
        return false;
      }
    })
  );
}
