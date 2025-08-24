// function x() {
//   var b = 7;
//   function y() {
//     var a = 54;
//     console.log(a);
//     console.log(b);
//   }
//   y();
// }
// x();

// function z() {
//   var k = 90;
//   function x() {
//     var a = 7;
//     function y() {
//       console.log(a);
//       console.log(k);
//     }
//     y();
//   }
//   x();
// }
// z();

function z() {
  var my_var = 8;
  function y() {
    console.log(my_var);
  }
  return y;
}
var x = z();
console.log(x);
x();
