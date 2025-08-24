console.log("Object destructuring");
const ok_obj = {
  name: "John",
  age: 30,
  height: 6,
};
ok_obj.gender = "male";
let { name, age: id, ...rest } = ok_obj;
console.log(name);
console.log(id);
console.log(rest);

console.log("nested destructuring");
const users = [
  { userid: 1, firstname: "John", lastname: "Doe" },
  { userid: 2, firstname: "Sunny", lastname: "Smith" },
];
const [{ firstname: user1firstname, userid }, { lastname }] = users;
console.log(user1firstname);
console.log(userid);
console.log(lastname);
