console.log("Premitive Example");
let num1 = 4;
let num2 = num1;
console.log(num1);
console.log(num2);
num1 = 5;
console.log(num1);
console.log(num2);
console.log(num1 === num2);

console.log("Reference Example");
let array1 = [1, 2];
let array2 = array1;
console.log(array1);
console.log(array2);
array1.push(3);
console.log(array1);
console.log(array2);
console.log(array1 === array2);

console.log("cloning");
let arr1 = [9, 6];
let arr2 = arr1.slice(0);
// let arr2 = [].concat(arr1); //can use concat as well
console.log(arr1);
console.log(arr2);
arr1.push(3);
console.log(arr1);
console.log(arr2);
console.log(arr1 === arr2);

console.log("spread operator");
let my_arr1 = ["hi", "hello"];
let my_arr2 = [...my_arr1, "world", 143];
console.log(my_arr1);
console.log(my_arr2);
console.log(my_arr1 === my_arr2);
