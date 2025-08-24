let is_var=45;
{
    // var is_var=90;
}
//When let is declared at the top level of a script, it belongs to the "script scope", which is part of the global execution context — but it behaves like a block-scoped variable, not like a global variable.

let x = 10;
var y = 20;

console.log(window.x); // ❌ undefined
console.log(window.y); // ✅ 20

//When let is declared at the top level of a script, it belongs to the "script scope", which is part of the global execution context — but it behaves like a block-scoped variable, not like a global variable.

var ms_var = 45;
{
  let ms_var = 90;
  //let is completely block scoped
}