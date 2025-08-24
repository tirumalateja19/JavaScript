// default parameters
// function add(a, b = 1) {
//   return a + b;
// }
// console.log(add(2));

// rest parameters
// function Add_All(...nums) {
//   let total = 0;
//   for (let ele of nums) {
//     total = total + ele;
//   }
//   console.log(total);
// }
// console.log(Add_All(7, 3, 2, 1, 2));

// parameters destructuring
// const person = {
//   name: "Teja",
//   age: 19,
//   gender: "male",
// };
// function details(obj) {
//   console.log(obj.name);
//   console.log(obj.age);
//   console.log(obj.gender);
// }
// details(person);

// const person2 = {
//   name: "Abhilash",
//   age: 21,
//   gender: "male",
// };
// function details({ name, age, gender }) {
//   console.log(name);
//   console.log(age);
//   console.log(gender);
// }
// details(person2);

// callback function
// myFunc2();
// function myFunc2() {
//   function myFunc3() {
//     console.log("good afternoon");
//   }
//   return myFunc3();
// }

// function Func1() {
//   console.log("Inside Func1");
// }
// function Func2() {
//   console.log("just a function");
// }
// function Func3(callback) {
//   callback();
// }
// Func3(Func1);
// Func3(Func2);
