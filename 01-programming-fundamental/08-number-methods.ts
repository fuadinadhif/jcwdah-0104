{
  /* ------------------------- NUMBER METHOD - TOFIXED ------------------------ */
  let volume = 15.16712;
  let weight = 70;

  console.log(volume.toFixed(2));
  console.log(weight.toFixed(2));

  /* ------------------------ GLOBAL FUNCTION - NUMBER ------------------------ */
  console.log("10");
  console.log(Number("10"));
  console.log(Number("10A"));

  /* -------------------------- GLOBAL VALUE - NUMBER ------------------------- */
  console.log(Number.MAX_VALUE);
  console.log(Number.MIN_VALUE);
  console.log(Number.POSITIVE_INFINITY);
  console.log(Number.NEGATIVE_INFINITY);

  console.log(
    -99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999 <
      -Infinity
  );
}
