/* ---------------------------- SHORT CIRCUIT AND --------------------------- */
// false1 && false2 -> false1
// false1 && true1 -> false1
// true1 && false1 -> false1
// true1 && true2 -> true2
console.log(0 && "");
console.log(0 && 1);
console.log(1 && 0);
console.log("satu" && 1);

/* ---------------------------- SHORT CIRCUIT OR ---------------------------- */
console.log(0 || "");
console.log(0 || 1);
console.log(1 || 0);
console.log("satu" || 1);

/* -------------------------------------------------------------------------- */
/*                                    NOTES                                   */
/* -------------------------------------------------------------------------- */
// {
//   isUserLogin && <SignInButton />;
// }
