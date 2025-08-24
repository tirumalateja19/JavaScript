// function a() {
//   var d = 19;
//   b();

//   function b() {
//     console.log(d);
//     console.log(c);
//   }
// }
// var c = 10;
// a();

function a() {
  var d = 19;
  b();
  
  function b() {
    var f = 69;
    console.log(d);
    console.log(c);
    e();

    function e() {
      console.log(f);
      console.log(d);
      console.log(c);
    }
  }
  
}
var c = 10;
a();
