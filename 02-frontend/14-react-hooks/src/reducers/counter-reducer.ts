// export function counterReducer(state: number, action: string) {
//   if (action === "ADD_1") {
//     return state + 1;
//   } else if (action === "ADD_10") {
//     return state + 10;
//   } else if (action === "ADD_100") {
//     return state + 100;
//   } else if (action === "RESET") {
//     return 0;
//   } else if (action === "SUB_1") {
//     return state - 1;
//   } else if (action === "SUB_10") {
//     return state - 10;
//   } else if (action === "SUB_100") {
//     return state - 100;
//   }

//   return state;
// }

export function counterReducer(state: number, action: string) {
  switch (action) {
    case "ADD_1":
      return state + 1;
    case "ADD_10":
      return state + 10;
    case "ADD_100":
      return state + 100;
    case "RESET":
      return 0;
    case "SUB_1":
      return state - 1;
    case "SUB_10":
      return state - 10;
    case "SUB_100":
      return state - 100;
    default:
      return state;
  }
}
