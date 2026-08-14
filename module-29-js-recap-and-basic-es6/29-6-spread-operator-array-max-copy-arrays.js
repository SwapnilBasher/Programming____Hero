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

