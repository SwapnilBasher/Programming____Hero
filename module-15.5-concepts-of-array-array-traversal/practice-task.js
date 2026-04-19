// https://github.com/ProgrammingHero1/js-array-tasks  

// task-1

// let fruits = [ "apple" , "banana" , "cherry" , "date" , "elderberry" ] ;

// console.log(fruits[3]); // date
// fruits[2] = "jambura"; // changing cherry to jambura
// console.log(fruits); // [ 'apple', 'banana', 'jambura', 'date', 'elderberry' ]

// task-2

// let touristSpots = [ "Cox's Bazar" , "Sajek" , "Sreemongol"  ] ;

// touristSpots.push('las vegas'); // adding las vegas to the end of the array
// touristSpots.splice(3, 0 , 'cali' , 'paris' ); // adding cali and paris at index 3
// console.log(touristSpots);
// let city = touristSpots.pop();

// console.log(city);
// console.log(touristSpots); // [ 'Cox's Bazar', 'Sajek', 'Sreemongol', 'cali', 'paris' ]

// task-3

// let books = [ "The Great Gatsby" , "To Kill a Mockingbird" , "1984" , "Pride and Prejudice" , "The Catcher in the Rye" , "javascript book" ] ;

// if(  books.includes('javascript book') ) {
//     console.log("The book is available in the library.");
// }
// else {
//     console.log("The book is NOT available in the library.");
// }

// task-4

// let nums = [];

// console.log(Array.isArray(nums)); // true

// let p = 1;

// console.log(Array.isArray(p)); // false because p is a number, not an array

// let isEven = true;
// console.log(Array.isArray(isEven)); // false because isEven is a boolean, not an array 

// task-5

let pornActresses = [ "Sunny Leone" , "Mia Khalifa" , "Lisa Ann" , "Jenna Jameson" , "Tera Patrick" ] ;

let japanesePornActresses = [ "Yui Hatano" , "Akiho Yoshizawa" , "Sora Aoi" , "Yuma Asami" , "Maria Ozawa" ] ;

let javCodes = [ "IPX-123" , "SSNI-456" , "MIDE-789" , "ABP-321" , "SSIS-654" ] ;

let combined = pornActresses.concat(japanesePornActresses, javCodes) ; // combining three arrays
console.log( combined ) ; // [ 'Sunny Leone', 'Mia Khalifa', 'Lisa Ann', 'Jenna Jameson', 'Tera Patrick', 'Yui Hatano', 'Akiho Yoshizawa', 'Sora Aoi', 'Yuma Asami', 'Maria Ozawa', 'IPX-123', 'SSNI-456', 'MIDE-789', 'ABP-321', 'SSIS-654' ]
