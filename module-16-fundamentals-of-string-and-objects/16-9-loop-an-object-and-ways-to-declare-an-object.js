const biceps = {
    name: 'Biceps Brachii' ,
    origin: 'Scapula' , 
    insertion: 'Radius' ,
    function: 'Flexion of the elbow' ,
    exercises: ['Bicep curls' , 'Hammer curls' , 'Chin-ups'] ,
    variations: {
        longHead: {
            origin: 'Supraglenoid tubercle of the scapula' ,
            insertion: 'Radial tuberosity' ,
            function: 'Flexion and supination of the forearm'
        } ,
        shortHead: {
            origin: 'Coracoid process of the scapula' ,
            insertion: 'Radial tuberosity' ,
            function: 'Flexion of the forearm'
        }
    }
};

// for( let a in biceps ) {
//     console.log(a , "   is   " , biceps[a] );
//     // console.log(biceps[a]);
// }

// let b = Object.keys(biceps) ;
// let c = Object.values(biceps) ;

// console.log(b);
// console.log(c);

// biceps.variations.shortHead["origin"] = "Hati gaan gay, goru akase ure, kumir nacha-nachi kore";
// console.log(biceps.variations.shortHead.origin);

// biceps["ei holo notun ekta property"] = "This is a new property" ; // add a new property to the object
// // console.log(biceps);

// console.log( Object.keys(biceps) );

const cow = {};
console.log(cow); // {} - empty object
console.log(typeof cow); 