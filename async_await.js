// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise Resolved Value!!");
//   }, 5000);
// });

// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise Resolved Value!!");
//   }, 10000);
// });

// async function handlePromise() {
//   console.log("Hello World!!");

//   const val1 = await p2; // waits for 5 sec
//   console.log("Namaste JavaScript");
//   console.log(val1); // logs resolved value of p1

//   const val2 = await p1; // waits for 10 sec
//   console.log("Namaste JavaScript 2");
//   console.log(val2); // logs resolved value of p2
// }

// handlePromise();

const p1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("🔥 Promise p1 Resolved!");
  }, 5000);
});

const p2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("⚡ Promise p2 Resolved!");
  }, 10000);
});

function logWithTime(message) {
  const now = new Date();
  const time = now.toLocaleTimeString();
  console.log(`[${time}] ${message}`);
}

async function handlePromise() {
  logWithTime("🟢 handlePromise started");

  const val1 = await p1;
  logWithTime("✅ p1 Resolved");
  logWithTime(val1);

  const val2 = await p2;
  logWithTime("✅ p2 Resolved");
  logWithTime(val2);
}

handlePromise();
