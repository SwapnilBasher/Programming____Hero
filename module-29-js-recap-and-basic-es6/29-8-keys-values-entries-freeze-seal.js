let student = {
    name: 'John',
    age: 20,
    address: {
        city: 'New York',
        zip: 10001
    }
}

// console.log(Object.keys(student)); // Output: ['name', 'age', 'address'] - returns an array of the object's own enumerable property names
// console.log(Object.values(student)); // Output: ['John', 20, { city: 'New York', zip: 10001 }] - returns an array of the object's own enumerable property values
// console.log(Object.entries(student)); // Output: [['name', 'John'], ['age', 20], ['address', { city: 'New York', zip: 10001 }]] - returns an array of the object's own enumerable property [key, value] pairs

// console.log(Object.keys(student.address)); // Output: ['city', 'zip'] - returns an array of the object's own enumerable property names for the nested address object

// delete student.address;

// console.log(student); // Output: { name: 'John', age: 20 } - address property has been deleted from the student object

Object.freeze(student); // Freezes the student object, preventing any modifications to its properties. Readonly properties cannot be changed, added, or deleted.
student.name = 'swapnil';
console.log(student); // Output: { name: 'John', age: 20, address: { city: 'New York', zip: 10001 } } - the student object is frozen and its properties cannot be modified.

let swapnil = {
    name: 'swapnil',
    age: 99999999
}

Object.seal(swapnil); // Seals the swapnil object, preventing new properties from being added and marking all existing properties as non-configurable. However, the values of existing properties can still be changed.
swapnil.name = 'swapnil basher';
console.log(swapnil); // Output: { name: 'swapnil basher', age: 99999999 } - the name property has been modified, but no new properties can be added to the swapnil object.