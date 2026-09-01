let fruits = ["apple", "banana", "cherry", "date", "elderberry"];

fruits.forEach((fruit, index) => {
    console.log(`${index + 1}. ${fruit.toUpperCase()}`);
});

fruits.filter((fruit) => fruit.length > 5).forEach((fruit) => {
    console.log(fruit);
});

// fruits.find((fruit) => fruit.startsWith("c")).forEach((fruit) => {
//     console.log(`answer is: ${fruit}`);
// });

// find() একটি single element return করে, array নয়, তাই তার ওপর .forEach() ব্যবহার করা যায় না।

console.log(`answer is: ${fruits.find((fruit) => fruit.startsWith("c"))}`);

