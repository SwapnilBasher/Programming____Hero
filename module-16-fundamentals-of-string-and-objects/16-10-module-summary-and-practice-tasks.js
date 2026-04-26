// // https://github.com/ProgrammingHero1/js-object-tasks

// const colors = {
//     red: "#ff0000",
//     green: "#00ff00",
//     blue: "#0000ff",
//     "golden rod": '#daa520'
// };

// console.log(colors["golden rod"]); // #daa520

// const car = {
//     make: "Toyota",
//     model: "Corolla",
//     year: 2020
// };

// car["passenger capacity"] = 5;
// console.log(car);

// const student = {
//     name: "Hamim Sakep",
//     id: 5421,
//     physics: {
//         subject: "HSC Physics",
//         author: "Shahjahan Tapan",
//         marks: 30
//     }
// };

// console.log(student.physics.marks); // 30

// let student22 = {
//     name: 'Ariana Grande',
//     age: 21,
//     city: 'Gaibandha',
//     isStudent: true
// };

// console.log(Object.keys(student22).length); // 4

// let myObject = {
//     name: 'John Doe',
//     age: 25,
//     city: 'Example City',
//     isStudent: true
// };

// for( let a in myObject ) {
//     console.log( "key: " , a , " | type: " , typeof myObject[a] );
// }

// js-string-tasks
// Task-1

const sentence = "I am aaa student AAA A A of Programming Hero";
let count = 0;

for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === 'a') {
        count++;
    }
}

console.log("Number of 'a' in the sentence: " + count);

// Task-2
let b = 0;

for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === 'a' || sentence[i] === 'A') {
        b++;
    }
}

console.log("Number of 'a' or 'A' in the sentence: " + b);

// Task-3

let str = 'aeioooiiu';

if (str.indexOf('a') !== -1 && str.indexOf('e') !== -1 && str.indexOf('i') !== -1 && str.indexOf('o') !== -1 && str.indexOf('u') !== -1) {
    console.log("The string contains all vowels.");
} else {
    console.log("The string does not contain all vowels.");
}

// Task-4

let bakko = 'xxXXxXXxX';
console.log(bakko.replaceAll('x', 'y').replaceAll('X', 'Y')); // yyYYyYYyY

// task-5

let d = 'a song of ice and fire';

let container = d.split(' '); // 

for( let i = 0 ; i < container.length ; i++ ) {
    container[i] = container[i][0].toUpperCase() + container[i].slice(1);
}
console.log(container.join(' ')); // A Song Of Ice And Fire
