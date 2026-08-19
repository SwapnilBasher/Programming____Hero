let a = [1, 2, 3];
let b = a;

b.pop(); // Removes the last element from array b
console.log(a); // Output: [1, 2] - a is also affected because b is a reference to a

let c = [...a]; // Creates a shallow copy of array a
c.pop();
console.log(a); // Output: [1, 2] - a is unaffected
console.log(c); // Output: [1] - c is affected

// rest parameter

function max(...numbers) {
    return Math.max(...numbers);
}

console.log(max(1, 2, 3, 4, 5)); // Output: 5 - The max function takes any number of arguments and returns the maximum value

let human = {
    height: "5ft 8inches",
    age: 30,
    city: 'New York'
};

let student = {
    name: 'John',
    age: 20,
    grade: 'A'
};

let person = { ...human, ...student }; // Merges the properties of human and student into a new object person
console.log(person); 
// Output: { height: '5ft 8inches', age: 20, city: 'New York', name: 'John', grade: 'A' }
// Note that the age property from student overwrites the age property from human