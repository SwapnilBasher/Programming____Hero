var pencilCnt = 5;
console.log(typeof pencilCnt);

pencilCnt = '66';
console.log(typeof pencilCnt);

var cars = "12399ta-gari-ache";
console.log(parseInt(cars));

let lengthOfRoad = "123.45kilometer";
console.log(parseFloat(lengthOfRoad));
console.log(parseFloat(lengthOfRoad).toFixed(10)); // it returns a string
console.log(parseFloat( parseFloat(lengthOfRoad).toFixed(10) ) );