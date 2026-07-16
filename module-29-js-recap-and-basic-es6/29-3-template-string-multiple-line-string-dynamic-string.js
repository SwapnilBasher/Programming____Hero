const s = `a
b
c
d
e`

console.log(s); // multi-line string

let a = 3;
let b = 2;

console.log(`The sum of ${a} and ${b} is ${a + b}`); // dynamic string

// template string can be used to create HTML template
// such as 

let name = 'swapnil';
let description = 'I am a web developer';

const html = `
    <div>
        <h1>${name}</h1>
        <p>${description}</p>
    </div>
`;

console.log(html); // dynamic string with HTML template