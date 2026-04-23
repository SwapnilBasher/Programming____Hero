const a = "I fly in the sky.";

// slice(start, end)
console.log(a.slice(2, 5)); // fly
console.log(a.slice(2)); // fly in the sky.
console.log(a.slice(-4)); // ky.

let b = "Hello I am Nadia Komanichi.";
console.log(b.split()); // [ 'Hello', 'I', 'am', 'Nadia', 'Komanichi.' ]
console.log(b.split('')); // [ 'H', 'e', 'l', 'l', 'o', ' ', 'I', ' ', 'a', 'm', ' ', 'N', 'a', 'd', 'i', 'a', ' ', 'K', 'o', 'm', 'a', 'n', 'i', 'c', 'h', 'i', '.' ]
console.log(b.split('a'));

let c = b.split('');
console.log(c.join('*'));

console.log(b.concat("  ").concat(a)); // Hello I am Nadia Komanichi.I fly in the sky.

console.log(b.includes('Nadia')); // true
console.log(b.includes('Nadia Komanichi')); // true
console.log(b.includes('anichi.')); 

console.log(b.split(' ') );