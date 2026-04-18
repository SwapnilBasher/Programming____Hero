let ara = [ 10, 20, 30, 40, 50 ] ;

console.log( "Original array:" , ara ) ; // printing the original array

let y = ara.push( "jodu" , "modu" , "kodu" ) ; // adding three elements at the end of the array
console.log( "New length:" , y ) ; // printing the new length of the array
console.log( "Array after adding elements:" , ara ) ; // printing the array after adding elements

let x = ara.pop() ; // removing the last element of the array
console.log( "Removed element:" , x ) ; // printing the removed element
console.log( "Array after removing element:" , ara ) ; // printing the array after removing the element


let z = ara.unshift( "godu" , "modu" , "jodu" ) ; // adding three elements at the beginning of the array
console.log( "New length:" , z ) ; // printing the new length of the array
console.log( "Array after adding elements at the beginning:" , ara ) ; // printing the array after adding elements at the beginning

let w = ara.shift() ; // removing the first element of the array
console.log( "Removed element:" , w ) ; // printing the removed element
console.log( "Array after removing element from the beginning:" , ara ) ; // printing the array after removing the element from the beginning

