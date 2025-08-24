console.log("function declaration");
function func1(num1, num2) {
  return num1 + num2;
}
console.log(func1(5, 7));

console.log("function expression");
const evenFunc = function (num1) {
  if (num1 % 2 == 0) {
    return true;
  }
};
console.log(evenFunc(18));

console.log("arrow function");
const odd = (num1) => {
  if (num1 % 2 != 0) {
    return true;
  }
};
console.log(odd(19));

const is_even = (n) => n % 2 === 0;
console.log(is_even(5));

console.log("hoisting");
hello();
function hello() {
  console.log("hello world");
}

console.log("functions inside functions");
function func1() {
  function func2(num1, num2) {
    return num1 + num2;
  }
  console.log(func2(5, 1));
}
func1();
