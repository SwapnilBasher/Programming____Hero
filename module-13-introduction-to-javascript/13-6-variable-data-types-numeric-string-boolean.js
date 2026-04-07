// boolean

var hasCycle = false;
console.log(hasCycle); // false


// string
{
    var district = "dhaka";
    let city = "chittagong";
    const country = "bangladesh";
}
console.log(district); // This will work because 'district' is declared with 'var' and is function-scoped, so it is accessible outside the block.
/*
console.log(city); // This will throw an error because 'city' is block-scoped and cannot be accessed outside the block.
console.log(country); // This will throw an error because 'country' is block-scoped and cannot be accessed outside the block.
*/

var taka = 1400;

// typeof
console.log(typeof hasCycle); // "boolean"
console.log(typeof district); // "string"
console.log(typeof taka); // "number"

