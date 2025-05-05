// Named export
export const address = "Jl Setiabudi, DKI";

// Default export
const balance = 5000000000000;
export default balance;

export function sumTwo(num: number): number {
  return num + 2;
}
export function sumThree(num: number): number {
  return num + 3;
}

/* -------------------------------------------------------------------------- */
/*                                    NOTES                                   */
/* -------------------------------------------------------------------------- */
// 1. Named Export - export [module_name]
// - Jumlahnya boleh lebih dari satu di dalam satu file yang sama

// 2. Default Export - export default [module_name]
// - Jumlahnya hanya boleh ada satu di dalam satu file yang sama
