console.log(10 == '10'); // true because it performs type coercion and converts the string '10' to the number 10 before comparing
console.log(10 === '10'); // false because it checks for both value and type, and here the types are different (number vs string)
console.log(0 == false); // true because it performs type coercion and converts false to 0 before comparing
console.log(0 === false); // false because it checks for both value and type, and here the types are different (number vs boolean)
console.log(null == undefined); // true because it performs type coercion and considers null and undefined equal in non-strict comparison
console.log(null === undefined); // false because it checks for both value and type, and here the types are different (null vs undefined)

console.log("hat mat bat cat rat chat"); 

console.log( 9 != '9' ); // false because it performs type coercion and converts the string '9' to the number 9 before comparing
console.log( 9 !== '9' ); // true because it checks for both value and type, and here the types are different (number vs string)
