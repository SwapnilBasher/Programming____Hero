let a = [ [] , [] , [] ]; // empty arrays in an array

let phone = [
    [ { name: "iPhone", price: 999 }, { name: "Samsung Galaxy", price: 899 } ],
    [ { name: "Google Pixel", price: 799 }, { name: 'infinix', price: 499 } ]
];  // 2D array of objects

phone[0][0].weight = "200g"; // adding a new property to the first object in the first array
console.log(phone);

for( let p of phone) {
    for (let item of p) {
        console.log(item.name);
        console.log(Object.keys(item));
    }
}

phone.push( [ { name: "OnePlus", price: 699 } ] ); // adding a new array of objects to the main array
console.log(phone);