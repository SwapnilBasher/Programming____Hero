// let var const

let x = 5;

// default parameters
function greet(name = 'Guest') {
    let age = [25];
    console.log(`Hello, ${name}! You are ${age[0]} years old.`);
}

greet(); // Output: Hello, Guest! You are 25 years old.
greet('Alice'); // Output: Hello, Alice! You are 25 years old.

// arrow functions
const add = (a, b) => a + b;
console.log(add(2, 3)); // Output: 5

let  twentyTimes = (num) => num * 20;
console.log(twentyTimes(5)); // Output: 100

let friends = ['Alice', 'Bob', 'Charlie'];
let newFriend = [...friends, 'DAVID']; // Using spread operator to add a new friend

console.log(newFriend); // Output: ['Alice', 'Bob', 'Charlie', 'DAVID']

// destructuring
const person = {
    name: 'John',
    age: 30,
    city: 'New York'
};

const { name: personName, age, city , price = 999.999 } = person;
console.log(personName); // Output: John
console.log(age);   // Output: 30
console.log(city);  // Output: New York 
console.log(price); // Output: 999.999 (default value since price is not in person object)


let ara = ['apple', 'banana', 'cherry'];
let [firstFruit, secondFruit, thirdFruit] = ara;

console.log(secondFruit); // Output: banana 