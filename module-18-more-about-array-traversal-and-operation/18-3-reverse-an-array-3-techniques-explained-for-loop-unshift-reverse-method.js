// let arr = [1, 2, 3, 4, 5];

// let reversedArr = [];
// for (let i = arr.length - 1; i >= 0; i--) {
//   reversedArr.push(arr[i]);
// }
// console.log(reversedArr); // Output: [5, 4, 3, 2, 1]

// let arr2 = ["alu", "potol", "lau", "tomato", "onion"];

// let reversedArr2 = [];
// for (let i = 0; i < arr2.length; i++) {
//   reversedArr2.unshift(arr2[i]);
// }
// console.log(reversedArr2); // Output: ["onion", "tomato", "lau", "potol", "alu"]

// let arr3 = [10, 20, 30, 40, 50];

// let reversedArr3 = arr3.reverse();
// console.log(reversedArr3); // Output: [50, 40, 30, 20, 10] 

// without modifying the original array
let arr3 = [10, 20, 30, 40, 50];
let reversedArr3 = [...arr3].reverse();
console.log(reversedArr3); // Output: [50, 40, 30, 20, 10]
console.log(arr3); // Output: [10, 20, 30, 40, 50] (original array is unchanged)

let a = [ 'dhaka', 'chittagong', 'khulna', 'rajshahi', 'sylhet' ];
let b = a;
a.reverse();
console.log(b); // Output: [ 'sylhet', 'rajshahi', 'khulna', 'chittagong', 'dhaka' ] (b is also reversed because it references the same array)

let taka = 90;
let dollar = taka;
taka = 100;
console.log(dollar); // Output: 90 (dollar is unchanged because it holds a copy of the value, not a reference)