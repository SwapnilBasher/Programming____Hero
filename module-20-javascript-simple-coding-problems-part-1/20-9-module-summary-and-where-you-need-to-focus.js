// task 1

// c/5 = (f-32)/9
// => f = (c * 9/5) + 32

function celsiusToFahrenheit(c) {
    return (c * 9 / 5) + 32;
}

console.log(celsiusToFahrenheit(0));   // 32
console.log(celsiusToFahrenheit(100)); // 212

// task 2

let numbers = [5, 6, 11, 12, 98, 5];

let find = 5, count = 0;

for (let n of numbers) {
    if (n === find) {
        count++;
    }
}

console.log(count); // 2

// task 3

function countVowels(str) {
    let c = 0;
    for (let ch of str.toLowerCase()) {
        if ('a' === ch || 'e' === ch || 'i' === ch || 'o' === ch || 'u' === ch) {
            c++;
        }
    }
    return c;
}

console.log(countVowels("Hello, World!")); // 3

// task 4

function f(str) {
    let ara = str.split(' ');
    let temp = ara[0];

    for (let a of ara) {
        if (a.length > temp.length) {
            temp = a;
        }
    }
    return temp;
}

console.log(f(" I am learning Programming to become a programmer")); // Programming

// task 5

for (; ;) {
    let x = Math.random() * 100;
    //  console.log(x);
    if (x > 10 && x < 20) {
        console.log(x);
        break;
    }
}