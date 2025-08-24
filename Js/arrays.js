const my_str1 = [5, 6, 4, 3, 8];
console.log(my_str1);

my_str1.unshift(1);
console.log(my_str1);

for (let i = 0; i < 4; i++) {
  my_str1.pop();
  console.log(my_str1);
}

console.log(typeof my_str1);

console.log(Array.isArray(my_str1)); //array check

my_str1[0] = 19;
console.log(my_str1);

my_str1.shift();
console.log(my_str1);

console.log("loop in array");
const array1 = [1, 2, 3, 4, 5, 6, 7];
console.log(array1);
const array2 = [];
for (let i = 0; i < array1.length; i++) {
  array2.push(array1[i]);
  console.log(array2);
}

console.log("for of loop");

const nums1 = [1, 2, 3, 4, 5, 6, 7];
console.log(array1);

for (let x of nums1) {
  //for of gives elements
  console.log(x);
}

console.log("for in loop");
console.log(array1);
for (let x in nums1) {
  //for of gives indexes
  console.log(x);
}

console.log("Array destructuring");
const ok_array = ["t1", "t2", "t3"];
let [myvar1, myvar2, myvar3] = ok_array;
console.log(myvar1);
console.log(myvar2);
console.log(myvar3);
