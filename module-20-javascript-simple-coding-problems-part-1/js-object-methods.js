const person = {
    firstName: "John",
    lastName: "Doe",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    },
    id: 5566,
    getId: function () {
        return this.id;
    },
    city: "New York"
}



let number = person.getId();
console.log(number); // 5566

console.log(person.fullName()); // John Doe

let x = person.fullName();
console.log(x); // John Doe
console.log(person.fullName); // [Function: fullName]


// Adding a Method to an Object
// You can add a method to an object by assigning a function to a property of the object. For example:

person.name = function () {
    return (this.firstName + " " + this.lastName).toUpperCase();
};

// In the example above, person.name is a property with a function assigned to it. When we call person.name(), it executes the function and returns the full name of the person. The this keyword inside the function refers to the person object, allowing us to access its properties (firstName and lastName) to construct the full name.

console.log('this is', person.name()); // JOHN DOE

// looping through object properties
for (let key in person) {
    console.log(key + ": " + person[key]); // person.key does not work because key is a variable, not a literal property name. It literally looks for a property named "key" on the person object, which does not exist. By using person[key], we are accessing the property of the person object whose name is stored in the variable key.
}

for (let key in person) {
    if (typeof person[key] !== "function") { // we check if the property is not a function before logging it. This way, we only log the properties that are not functions, which are typically the data properties of the object.
        console.log(key + ": " + person[key]);
    }
}

console.log(JSON.stringify(person)); // {"firstName":"John","lastName":"Doe","id":5566,"city":"New York"} // function properties are omitted by JSON.stringify