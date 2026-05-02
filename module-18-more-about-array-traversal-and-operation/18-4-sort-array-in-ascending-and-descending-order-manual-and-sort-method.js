let arr = [ 'dhaka' , 'khulna' , 'at' , 'bat' , 'cat' , 'mat' , 'rat' ];

console.log(arr.sort()); // Output: [ 'at', 'bat', 'cat', 'dhaka', 'khulna', 'mat', 'rat' ] (sorted in ascending order)

console.log(arr.sort().reverse()); // Output: [ 'rat', 'mat', 'khulna', 'dhaka', 'cat', 'bat', 'at' ] (sorted in descending order)

let arr2 = [ 5, 3, 8, 1, 4 ];

let b = arr2.sort(function(a,b){return a - b});
console.log(b); // Output: [1, 3, 4, 5, 8] (sorted in ascending order)

let c = arr2.sort(function(a,b){return b - a});
console.log(c); // Output: [8, 5, 4, 3, 1] (sorted in descending order)