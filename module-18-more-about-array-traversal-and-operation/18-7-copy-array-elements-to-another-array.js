let a = [1, 2, 3]; // an array of numbers

let b = a; // b is now a reference to the same array as a
b.push(4); // adding a new element to the array through b

console.log('a : ', a); // a is also affected because a and b reference the same array
console.log('b : ', b); // b shows the updated array

// To create a new array that is a copy of the original array, we can use the spread operator, slice method, or Array.from method.

let c = [...a]; // c is a new array that is a copy of a using the spread operator
c.push(5); // adding a new element to the array through c
console.log('a : ', a); // a is not affected because c is a new array
console.log('c : ', c); // c shows the updated array with the new element

let d = a.slice(); // d is a new array that is a copy of a using the slice method
d.push(6); // adding a new element to the array through d
console.log('a : ', a); // a is not affected because d is a new array
console.log('d : ', d); // d shows the updated array with the new element

let e = Array.from(a); // e is a new array that is a copy of a using the Array.from method
e.push(7); // adding a new element to the array through e
console.log('a : ', a); // a is not affected because e is a new array
console.log('e : ', e); // e shows the updated array with the new element

let f = JSON.parse(JSON.stringify(a)); // f is a new array that is a deep copy of a using JSON methods
f.push(8); // adding a new element to the array through f
console.log('a : ', a); // a is not affected because f is a new array
console.log('f : ', f); // f shows the updated array with the new element

let g = [].concat(a); // g is a new array that is a copy of a using the concat method
g.push(9); // adding a new element to the array through g
console.log('a : ', a); // a is not affected because g is a new array
console.log('g : ', g); // g shows the updated array with the new element

let h = structuredClone(a); // h is a new array that is a deep copy of a using the structuredClone method
h.push(10); // adding a new element to the array through h
console.log('a : ', a); // a is not affected because h is a new array
console.log('h : ', h); // h shows the updated array with the new element