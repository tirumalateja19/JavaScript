"use strict"

const condition = false;
if (condition) {
  let d = 200;
  console.log(d);
} else {
  var d = 300; //globally stored
  //when used use strict shows error
  console.log(d);
}
//d = 9; //this is stored globally
// let d;

function fun(){
  let my_var1 = 10;
  const my_var2 = 20;
  var my_var3 = 30;
  console.log(my_var1);
  console.log(my_var2);
}
fun();
// console.log(my_var3);
// even though my_var3 is var, as it is in a function it has local scope.so cannot access outside,function distroies soon after execution

{
    var my_var1 = 90;
    const my_var2 = 80;
    let my_var3 = 70;
    console.log(my_var1);
    console.log(my_var2);
    console.log(my_var3);
}
console.log(my_var1);
//var is stored globlly
// console.log(my_var2);
// console.log(my_var3);
// my_var2,my_var3 are let and const, as they are in block it has block scope.so cannot access outside,function distroies soon after execution