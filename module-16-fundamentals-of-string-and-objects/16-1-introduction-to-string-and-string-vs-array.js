let a = "Hello, World!" ; // string literal

let b = 'JavaScript is fun!' ; // string literal

let c = `Template literals are great!` ; // string literal using backticks

let city = `Dhaka` ; // string literal with backticks, can include newlines

console.log( `I live in ${city}` ) ;

let d = new String("This is a string object") ; // string object created using the String constructor

console.log( d ) ; // [String: 'This is a string object']

console.log( typeof d ) ; // object

let num = 12345 ;

console.log( String(num) ) ; // "12345" - converting number to string using String function

console.log( num.toString() ) ; // "12345" - converting number to string using toString method

let paragraph = `this is cat
                           that is pen
this is sleepy
    push        push `; // string with multiple lines using backticks

console.log( paragraph ) ; // this is cat
                           // that is pen
// this is sleepy
//     push        push