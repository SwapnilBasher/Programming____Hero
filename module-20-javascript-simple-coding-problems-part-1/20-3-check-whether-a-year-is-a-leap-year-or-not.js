function isLeapYear(y){
    if (y % 4 === 0 && y % 100 !== 0 || y % 400 === 0) {
        return true;
    }   
    return false;
}

console.log(isLeapYear(2020)); // true
console.log(isLeapYear(2021)); // false
console.log(isLeapYear(1900)); // false
console.log(isLeapYear(2000)); // true