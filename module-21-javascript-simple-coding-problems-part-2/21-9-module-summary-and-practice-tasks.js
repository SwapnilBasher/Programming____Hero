// task 1

const heights2 = [167, 190, 120, 165, 137];

console.log(Math.min(...heights2)); // Output: 120 ... is the spread operator which allows us to pass the elements of the array as individual arguments to the Math.min function

// task 2

const heights3 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
let t = heights3[0];
for (let i = 1; i < heights3.length; i++) {
    if (heights3[i].length < t.length) {
        t = heights3[i];
    }
}
console.log(t); // Output: ron

// task 3

let laptop = 35000;
let tablet = 15000;
let mobile = 20000;

function calculateElectronicsBudget(laptopNo, tabletNo, mobileNo) {
    return laptop * laptopNo + tablet * tabletNo + mobile * mobileNo;
}

console.log(calculateElectronicsBudget(2, 3, 1)); // Output: 135000

// task 4

const phones = [
    { model: "PhoneA", brand: "Iphone", price: 95000 },
    { model: "PhoneB", brand: "Samsung", price: 40000 },
    { model: "PhoneC", brand: "Oppo", price: 26000 },
    { model: "PhoneD", brand: "Nokia", price: 35000 },
    { model: "PhoneE", brand: "Iphone", price: 105000 },
    { model: "PhoneF", brand: "HTC", price: 48000 },
];

function findAveragePhonePrice(p) {
    let totalPrice = 0;
    for (let i = 0; i < p.length; i++) {
        totalPrice += p[i].price;
    }
    return totalPrice / p.length;
}

console.log(findAveragePhonePrice(phones));

// task 5

const employees = [
    { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
    { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
    { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
    { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];

let totalSalaryCompany = 0 ;

for ( let e of employees )
{
    let salary = e.starting + (e.experience * e.increment) ;
    totalSalaryCompany += salary ;
}
console.log(totalSalaryCompany);