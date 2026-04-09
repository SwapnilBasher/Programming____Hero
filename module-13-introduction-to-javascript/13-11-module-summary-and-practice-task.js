
console.log(Number("123")); // 123
console.log(Number("12.5")); // 12.5
console.log(Number(true));      // 1
console.log(Number(false));     // 0
console.log(Number(null));      // 0
console.log(Number(""));        // 0
console.log(Number("hello"));   // NaN
console.log(Number(undefined)); // NaN



console.log(parseFloat("9123.45Rastay onek sobdo garir horn popo..")) ;
console.log(Number("9123.45Rastay onek sobdo garir horn popo..")) ; // NaN

console.log(parseInt("9123.45Rastay onek sobdo garir horn popo..")) ;
console.log(Number("9123.45Rastay onek sobdo garir horn popo..")) ; // NaN

console.log( isNaN(4 - 'hello')); // true
console.log(Number.isNaN(4 - 'hello')); // true

// Step-by-step:
// 'hello' cannot be converted to a number → becomes NaN
// 4 - NaN → NaN
// Number.isNaN(NaN) → true
