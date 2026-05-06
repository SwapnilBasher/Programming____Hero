let today = new Date();
console.log(today); // current date and time

let p = new Date("2024-01-01");
console.log(p); // 2024-01-01T00:00:00.000Z

let q = new Date(2024, 0, 1); // month is 0-indexed
console.log(q); // 2024-01-01T00:00:00.000Z

let r = new Date(2024, 0, 1, 12, 30, 45); // year: 2024, month: January (0), day: 1, hour: 12, minute: 30, second: 45
console.log(r); // 2024-01-01T12:30:45.000Z

let d = new Date();

console.log(d.getFullYear());  // 2026
console.log(d.getMonth());     // 0-11
console.log(d.getDate());      // day of month
console.log(d.getDay());       // 0-6 (Sunday = 0)
console.log(d.getHours());     // 0-23
console.log(d.getMinutes());   // 0-59
console.log(d.getSeconds());   // 0-59

// let d = new Date();

d.setFullYear(2030);
d.setMonth(5);   // June
d.setDate(15);

console.log(d);

let time = Date.now();
console.log(time);

// let d = new Date();

console.log(d.toDateString());   // "Wed May 06 2026"
console.log(d.toTimeString());   // time only
console.log(d.toLocaleString()); // user-friendly

let now = new Date();

console.log("Year:", now.getFullYear());
console.log("Month:", now.getMonth() + 1);
console.log("Day:", now.getDate());