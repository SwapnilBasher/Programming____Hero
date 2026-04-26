let headphone = {
    company: 'boat' ,
    model: 'boat rockers 255' ,
    price: 1500 ,
    color: 'black' ,
    wireless: true ,
    battery: '20 hours' ,
    noiseCancellation: true
};

console.log(headphone);

// get object properties
console.log(headphone.company);
console.log(headphone['model']);

// set object properties
headphone.price = 1200 ;
console.log(headphone.price);   

headphone['color'] = 'red' ;
console.log(headphone.color);