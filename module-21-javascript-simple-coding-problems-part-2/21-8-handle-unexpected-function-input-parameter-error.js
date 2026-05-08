// function f(a)
// {
//     if(Array.isArray(a))
//     {
//         // Handle array input
//         console.log("Input is an array:", a);
//     }
//     else
//     {
//         // Handle non-array input
//         console.log("Input is not an array");
//         console.log( typeof a ) ;
//     }
// }

// f( { name: "swapnil" , age: 26 } ) ;

let car = {
    name: 'maruti suzuki',
    model: 'swift',
    year: 2020
}

let a = [1, 2, 3, 4, 5];

function ph(a)
{
    if( (typeof a) === 'object' && !Array.isArray(a) )
    {
        return 'lau';
    }
}

console.log( typeof car ) ;
console.log( typeof a ) ; // Output: object because arrays are a type of object in JavaScript
console.log( typeof ph ) ; // Output: function because ph is a function in JavaScript

console.log( ph(car) ) ; // Output: 'lau' because car is an object and not an array
console.log( ph(a) ) ; // Output: undefined because a is an array and does not satisfy the condition in the function ph