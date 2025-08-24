// const x = "Hello World";
// console.log(x.indexOf("Hello"));

// let x = "teja";
// let z = Number(x);
// console.log(z);

// let x = Date.parse("March 30, 2011");
// console.log(x);

// const d = new Date();
// x = d.getFullYear();
// console.log(x);
// y = d.getMonth();
// console.log(y);

// let x = 5 == 5;
// console.log(x);

// const fruits = ["Apple", "Banana", "Cherry"];
// let x = "";
// myfavorite: {
//   x = fruits[0];
//   break myfavorite;
//   x = fruits[1];
//   x = fruits[2];
// }
// console.log(x);

// let firstname = "Teja",
//   i = 0;
// for (const x of firstname) {
//   i++;
// }
// console.log(i);

// const fruits = ["Apple", "Banana", "Cherry"];
// let txt = "";
// for (const x of fruits) {
//   txt += x;
// }
// console.log(txt);

const fruits = ["Apple", "Banana", "Cherry"];
let txt = "";
for (const x in fruits) {
  txt += x;
}
console.log(txt);
