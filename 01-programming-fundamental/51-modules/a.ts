// import { address } from "./b.ts";
// import { sumTwo } from "./b.ts";
// import { sumThree } from "./b.ts";
import { address, sumTwo, sumThree } from "./b.ts";
import saldo from "./b.ts";

console.log(address);
console.log(saldo);

console.log(sumTwo(2));
console.log(sumThree(3));

/* -------------------------------------------------------------------------- */
/*                                    NOTES                                   */
/* -------------------------------------------------------------------------- */
// 1. Named Import - import {[module_name]} from "[module_path]"
// - Harus pakai kurung kurawal
// - Namanya tidak boleh diganti

// 2. Default Import - import [module_name] from "[module_path]"
// - Tidak boleh pakai kurung kurawal
// - Nama boleh diganti
