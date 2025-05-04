/* -------------------------------------------------------------------------- */
/*                               Promise Example                              */
/* -------------------------------------------------------------------------- */
// const myPromise = new Promise((resolve, reject) => {
// return resolve("Promise terpenuhi");
// return reject("Promise gagal");
// });

/* ------------------------ Access Promise - dot then ----------------------- */
// console.log(myPromise);
// myPromise
//   .then((data) => {
//     console.log(data);
//     console.log("Resolved hore!");
//   })
//   .catch((error) => {
//     console.log(error);
//     console.log("Huu rejected!");
//   })
//   .finally(() => {
//     console.log("Finished!");
//   });

/* ---------------------- Access Promise - async/await ---------------------- */
// async function handlePromise() {
//   try {
//     const data = await myPromise;
//     console.log(data);
//     console.log("Resolved hore!");
//   } catch (error) {
//     console.log(error);
//     console.log("Huu rejected!");
//   } finally {
//     console.log("Finished!");
//   }
// }

// handlePromise();

/* -------------------------- Promise in real world ------------------------- */
// const userData = fetch("https://randomuser.me/api/");
// console.log(userData);

// dot then
// fetch("https://randomuser.me/api")
//   .then((res) => {
//     console.log(res);
//     console.log("Resolved!");

//     return res.json();
//   })
//   .then((data) => {
//     console.log(data.results[0].name);
//   })
//   .catch((error) => {
//     console.log(error);
//     console.log("Rejected!");
//   })
//   .finally(() => {
//     console.log("Fetching data finished!");
//   });

// async/await
async function getRandomUser() {
  try {
    const res = await fetch("https://randomuser.me/api/");
    console.log(res);
    console.log("Resolved!");

    const data = await res.json();

    console.log(data.results[0].name);
  } catch (error) {
    console.log(error);
    console.log("Rejected!");
  } finally {
    console.log("Fetching data finished!");
  }
}

getRandomUser();
