// let Math = {
//     min: function min(a,b){
//         console.log('discipline');
//         return 9;
//     }
// }

// console.log(Math.min); // [Function: min]
// Math.min(1,2); // discipline
// console.log(Math.min(5,9)); 

let smol = Math.min(10,333,-1, 0.1);
console.log(smol); // -1

console.log(Math.max(10,333,-1, 0.1)); // 333

console.log(Math.abs(-5)); // 5

console.log(Math.round(3.14)); // 3
console.log(Math.round(3.5)); // 4
console.log(Math.ceil(3.14)); // 4
console.log(Math.ceil(3.5)); // 4

console.log(Math.floor(3.14)); // 3
console.log(Math.floor(3.5)); // 3

console.log(Math.random()); // 0.123456789 (example output, will be different each time)
console.log(Math.random() * 10); // 0.123456789 * 10 = 1.23456789 (example output, will be different each time)
console.log(Math.floor(Math.random() * 10)); // 1 (example output, will be different each time)

console.log(Math.PI); // 3.141592653589793

