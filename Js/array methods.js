// for each
// const numbers = [1, 3, 5, 7, 9];
// function myFunc(number, index) {
//   console.log(`index is ${index} num is ${number}`);
// }
// numbers.forEach(myFunc);
// using forloop
// const numbers = [1, 3, 5, 7, 9];
// function myFunc(number, index) {
//   console.log(`index is ${index} num is ${number}`);
// }
// for (let i = 0; i < numbers.length; i++) {
//   myFunc(numbers[i], i);
// }

// const numbers1 = [1, 3, 5, 7, 9];
// numbers1.forEach(function (number, index) {
//   console.log(number * 3, index);
// });

// map
// const Nums = [2, 4, 6, 8];
// const square = (num) => num * num;
// console.log(Nums.map(square));

// filter
// const Nums = [2, 4, 6, 3, 7, 8];
// const even = (num) => num % 2 === 0;
// console.log(Nums.filter(even));

// reduce
// const numericals = [1, 6, 3, 2, 4, 5];
// const sum = numericals.reduce((a, b) => {
//   return a + b;
// });
// console.log(sum);
// or
// const numericals = [1, 6, 3, 2, 4, 15];
// const sum = (a, b) => {
//   return a + b;
// };
// console.log(numericals.reduce(sum));

// sort
// const numbers = [5, 9, 1200, 400, 3000];
// numbers.sort();
// console.log(numbers); //output is diff ,not sorted because js considers it as string & ASCII values are seen acc then sorted
// for correct ascending order a-b
// const nums1 = [5, 9, 1200, 400, 3000];
// nums1.sort((a, b) => a - b);
// console.log(nums1);
// descending order b-a
// const nums2 = [5, 9, 1200, 400, 3000];
// nums2.sort((a, b) => b - a);
// console.log(nums2);
// find
// const myarray = ["teja", "lohit", "mani", "deepak"];
// const sol = myarray.find((string) => string.length === 4);
// console.log(sol);
//gives only one output the first satisfing condition

// find
// const users = [
//   { userid: 1, username: "TEJA" },
//   { userid: 2, username: "SAMMY" },
//   { userid: 3, username: "DANNY" },
//   { userid: 4, username: "SAHAYAM" },
// ];
// const ans = users.find((user) => user.userid === 5);
// console.log(ans);
// every
// const numbers = [2, 3, 4, 5, 6, 7, 8];
// const ans2 = numbers.every((number) => number % 2 === 0);
// console.log(ans2);

// some
// const numbers = [3, 5, 7, 9, 7];
// const ans2 = numbers.some((number) => number % 2 === 0);
// console.log(ans2);

//fill
// const myArr = new Array(5).fill(19);
// console.log(myArr);

// const myArr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// myArr2.fill(0, 2, 5);
// console.log(myArr2);

//splice
const is_Array = ["i1", "i2", "i3"];
is_Array.splice(1, 0, 7);
console.log(is_Array);
