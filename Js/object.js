// let key = "gmail";
// const person = {
//   name: "teja",
//   age: 19,
//   "my hobbies": ["watch movies", "songs", "sports"],
// };
// person[key] = "tirumalateja04@gmail.com";
// console.log(person.name);
// console.log(person["age"]);
// console.log(person["my hobbies"]);
// person.gender = "male";
// console.log(person);

// iterate object

const person2 = {
  name: "harley queen",
  hobbies: "kicking asses",
};
for (let keys in person2) {
  console.log(keys, " : ", person2[keys]);
}
// for (let keys of Object.keys(person2)) {
//   console.log(person2[keys]);
// }

// spread operator
// const arr1 = [1, 2, 3];
// const arr2 = [9, 8, 7];
// const new_array = [...arr1, ...arr2, 6, 5, 4];
// const new_array2 = [..."tirumalateja"];
// console.log(new_array);
// console.log(new_array2);

// spread in object
const obj1 = {
  name1: "harry",
  name2: "thor",
};
const obj2 = {
  name3: "stark",
  name4: "snape",
};
const new_obj = { ...obj1, ...obj2, age: 19 };
console.log(new_obj);
const new_obj2 = { ..."tirumalateja" };
console.log(new_obj2);
