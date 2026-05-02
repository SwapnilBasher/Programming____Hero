// task 1

let colors = ['red', 'blue', 'green', 'yellow', 'orange'];

for( let i = 0; i < colors.length/2; i++) {
    let temp = colors[i];
    colors[i] = colors[colors.length - 1 - i];
    colors[colors.length - 1 - i] = temp;
}
console.log(colors); // Output: ['orange', 'yellow', 'green', 'blue', 'red']

// task 2

const numbers = [12, 98, 5, 41, 23, 78, 46];
let even = [];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        even.push(numbers[i]);
    }
}
console.log(even); // Output: [12, 98, 78, 46]

// task 3

var numberss = ['Tom', 'Tim', 'Tin', 'Tik'];

let s = '';

for (let n of numberss) {
    s = s + n;
}

console.log(s); // Output: 'TomTimTinTik'

// task 4

const statement = 'I am a hard working person';

console.log(statement.split(' ').reverse().join(' ')) ;  // Output: 'person working hard a am I'

// task 5   

let input = [1,2,3];

let cpy = structuredClone(input);

cpy[0] = 99;
console.log(input); // Output: [1, 2, 3]
console.log(cpy); // Output: [99, 2, 3]

// task 6

let students = [
  { name: "John", marks: 85 },
  { name: "Alice", marks: 90 }
];

for (let s of students) {
    console.log(s.name , 'scored' , s.marks);
}

// task 7

let ara = [
  [1, 2],
  [3, 4],
  [5, 6]
];

ara[1][0] = 99;

console.log(ara); 