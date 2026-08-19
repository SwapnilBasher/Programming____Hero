let ara = [1, 2, 3, 4, 5];
let [first, second, ...rest] = ara; // Destructuring assignment - first and second are assigned the first two elements of the array, rest is assigned the remaining elements as an array

console.log(first); // Output: 1 - first element of the array
console.log(second); // Output: 2 - second element of the array
console.log(rest); // Output: [3, 4, 5] - rest of the elements in the array

console.log(typeof first); // Output: number - first is a number
console.log(typeof second); // Output: number - second is a number
console.log(typeof rest); // Output: object - rest is an array
console.log(typeof ara); // Output: object - ara is an array


// nested destructuring
let nestedArray = [1, 2, [3, 4], 5];
let [a, b, [c, d], e] = nestedArray; // Destructuring assignment with nested arrays
console.log(a); // Output: 1
console.log(b); // Output: 2
console.log(c); // Output: 3
console.log(d); // Output: 4
console.log(e); // Output: 5

let student = {
    name: 'John',
    age: 20,
    address: {
        city: 'New York',
        zip: 10001
    }
};

let { name, age, address: { city, zip } } = student; // Destructuring assignment with nested objects
console.log(name); // Output: John
console.log(age); // Output: 20
console.log(city); // Output: New York
console.log(zip); // Output: 10001  

console.log(student.address); // Output: { city: 'New York', zip: 10001 } - address is still accessible as an object