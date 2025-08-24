// boolean
let n1 = "10";
let n2 = 10;
console.log(n1 === n2);
console.log(n1 == n2);

// ternary operator
let age = 19;
let drinks = age > 18 ? "well enough" : "not enough";
console.log(drinks);

//truthy and falsy
if ((foggy = "")) {
  console.log("false");
}
if ((foggy = 1)) {
  console.log("true");
}

// switch
let day = 2;
switch (day) {
  case 1:
    console.log("monday");
    break;
  case 0:
    console.log("sunday");
    break;
  case 2:
    console.log("tuesday");
    break;
  default:
    console.log("invalid");
}
