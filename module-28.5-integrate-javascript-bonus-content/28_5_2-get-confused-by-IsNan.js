const n = '1234';
// types are: string , number, boolean, object, undefined, null, symbol, bigint
if(typeof n === 'number') {
  console.log('n is a number');
}
else {
  console.log('n is not a number');
}

let numbers = [1, 2, 3, 4, 5];
console.log(typeof numbers); // object

const student = {
  name: 'John',
  age: 20,
  isEnrolled: true
};
console.log(typeof student); // object

if(Array.isArray(numbers)) {
  console.log('numbers is an array  ' , Array.isArray(numbers));
}

if(Array.isArray(student)) {
  console.log('student is an array  ' , Array.isArray(student));
}
else {
  console.log('student is not an array');
}

let n = '1234'; 
if(isNaN(n)) {
  console.log('n is not a number'); 
}
else {
  console.log('n is a number'); // n is a number but isNaN() returns false because n is a string that can be converted to a number
}

let b = {};

if(isNaN(b)) {
  console.log('b is not a number'); // b is not a number because an empty object cannot be converted to a number
}   
