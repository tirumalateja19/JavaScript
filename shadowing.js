var my_var1 = 100;
const my_var2 = 200;
let my_var3 = 300;
{
  var my_var1 = 10;
  const my_var2 = 20;
  let my_var3 = 30;
  console.log(my_var1);
  console.log(my_var2);
  console.log(my_var3);
}
console.log(my_var1);
console.log(my_var2);
console.log(my_var3);
