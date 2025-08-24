// lexical scope
const my_var = "valuue69";
function myapp() {
  function myFunc() {
    const my_var = "valuue19";
    console.log(my_var);
  }
  console.log(my_var);
  myFunc();
}
myapp();

//block scope vs function scope
function func() {
  if (1) {
    var simple = 22;
    console.log(simple);
  }
  console.log(simple); //we culd get an error here if the above declaration is other than var(let,const)as var is function scope we are error free
}
func();
