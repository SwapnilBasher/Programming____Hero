let a = [{}, {}, {}]; // empty objects in an array

let phone = [
    { name: "iPhone", price: 999 },
    { name: "Samsung Galaxy", price: 899 },
    { name: "Google Pixel", price: 799 },
    { name: 'infinix', price: 499 }
];

phone[0].weight = "200g"; // adding a new property to the first object in the array

console.log(phone);

for( let p of phone) {
    console.log(p.name);
    console.log(Object.keys(p));
}