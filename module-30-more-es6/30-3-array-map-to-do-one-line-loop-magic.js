let a = [1, 2, 3, 4, 5];

let b = a.map((num) => num * 2);

console.log(b); // Output: [2, 4, 6, 8, 10]

let c = ["apple", "banana", "cherry"];

let d = c.map((fruit, index) => `${index + 1}.   ${fruit.toUpperCase()}`);

console.log(d); // Output: ["1. APPLE", "2. BANANA", "3. CHERRY"]

console.log(...d); // Output: "1. APPLE" "2. BANANA" "3. CHERRY"


let x = ["dhaka", "chittagong", "khulna", "rajshahi"];

let y = x.map((city) => {
     city.charAt(0).toUpperCase() + city.slice(1);
});

console.log(y); // Output: [undefined, undefined, undefined, undefined] because the function does not return a value.


let xx = ["dhaka", "chittagong", "khulna", "rajshahi"];

let yy = xx.map((city) => {
    let p =  city.charAt(0).toUpperCase() + city.slice(1);
     return p;
});

console.log(yy); // Output: ["Dhaka", "Chittagong", "Khulna", "Rajshahi"] because the function now returns a value.

