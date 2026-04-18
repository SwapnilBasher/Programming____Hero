// let ara = [10, 20, 30, 40, 50, "salam", 1, 'c', true, false, 'salam', '50 taka'];

// console.log(ara.includes(99));
// console.log(ara.includes('salam'));

// console.log(ara.indexOf('salam'));
// console.log(ara.lastIndexOf('salam'));

// console.log(Array.isArray(ara));
// console.log(Array.isArray("salam"));

// // case sensitive search Taka and taka are different
// if (ara.includes('50 Taka')) {
//     console.log("50 Taka is present in the array");
// }
// else {
//     console.log("50 Taka is NOT present in the array");
// }

// let a = [ 'a' , 'b' , 'c' , 'd' , 'e' ] ;
// console.log(a.indexOf('z')) ; // -1

// const fruits = [ "apple" , "banana" , "cherry" , "date" , "elderberry" ] ;

// let num = [];

// const AGE = 11;

// console.log(Array.isArray(fruits)); // true
// console.log(Array.isArray(num)); // true
// console.log(Array.isArray(AGE)); // false
// console.log(Array.isArray([1, 2, 3])); // true

// console.log(Array.isArray(new Array(10))); // true
// console.log(new Array(10)); // [ <10 empty items> ] 

// let arr = new Array(10);
// console.log(arr); 
// console.log(arr.length); // 10
// console.log(arr[0]); // undefined
// console.log(arr[9]); // undefined
// console.log(arr[10]); // undefined

// console.log(Array.isArray({})); // false because {} is an object, not an array
// console.log(Array.isArray(function() {})); // false because function() {} is a function, not an array
// console.log(Array.isArray("Hello")); // false because "Hello" is a string, not an array
// console.log(Array.isArray(null)); // false because null is null, not an array
// console.log(Array.isArray(undefined)); // false because undefined is undefined, not an array 

// 1) join
// 2) concat 
// 3) slice 
// 4) splice

// let colors = [ "red" , "green" , "blue" , "yellow" , "orange" ] ;

// console.log( colors.join() ) ; // red,green,blue,yellow,orange
// console.log( colors.join( " - " ) ) ; // red - green - blue - yellow - orange
// console.log( colors.join( " " ) ) ; // red green blue yellow orange

// let names = [ "Alice" , "Bob" , "Charlie" , "David" , "Eve" ] ;
// let age = [ 25 , 30 , 35 , 40 , 45 ] ;

// let combined = names.concat(age) ; // combining two arrays
// console.log( combined ) ; // [ 'Alice', 'Bob', 'Charlie', 'David', 'Eve', 25, 30, 35, 40, 45 ]

// let cities = [ "Dhaka" , "Chittagong" , "Khulna" , "Rajshahi" , "Sylhet" ] ;
// // index:        0           1            2          3           4
// // negative:    -5          -4           -3         -2          -1

// console.log( cities.slice( 1 , 4 ) ) ; // [ 'Chittagong', 'Khulna', 'Rajshahi' ]
// console.log( cities.slice( 2 ) ) ; // [ 'Khulna', 'Rajshahi', 'Sylhet' ]
// console.log( cities.slice( -3 ) ) ; // [ 'Khulna', 'Rajshahi', 'Sylhet' ]
// console.log( cities.slice( 0 , -2 ) ) ; // [ 'Dhaka', 'Chittagong', 'Khulna' ]


let flowers = [ "rose" , "lily" , "tulip" , "daisy" , "sunflower" ] ;
console.log( flowers.splice( 2 , 2 ) ) ; // [ 'tulip', 'daisy' ]
console.log( flowers ) ; // [ 'rose', 'lily', 'sunflower' ] 