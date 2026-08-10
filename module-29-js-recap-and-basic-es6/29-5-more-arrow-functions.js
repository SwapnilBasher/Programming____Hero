const test = () => {
    console.log(arguments);
};

test(10, 20, 30); // ReferenceError: arguments is not defined 

const test2 = (...args) => {
    console.log(args);
};

test2(10, 20, 30); // [10, 20, 30]

const test3 = (a, b, ...args) => {
    console.log(a, b);
    console.log(args);
}   

test3(10, 20, 30, 40, 50); // 10 20 [30, 40, 50]

let p = (a, b) => a + b;

console.log(p(10, 20)); // 30

let x = (x) => x * x;

console.log(x(5)); // 25