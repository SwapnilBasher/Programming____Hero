var age;
console.log(age); // undefined

age = 25;
console.log(age); // 25

age = "age is a number";
console.log(age); // "age is a number"

const nakime = "John";
console.log(nakime); // "John"

nakime = "Doe"; // This will throw an error because 'nakime' is a constant and cannot be reassigned.

console.log(nakime); // This line will not be executed due to the error above.