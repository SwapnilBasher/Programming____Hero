// let book = {
//     title: 'The Alchemist' ,
//     writer: {
//         name: 'Paulo Coelho' ,
//         nationality: 'Brazilian' ,
//         education: {
//             degree: 'Bachelor of Arts' ,
//             field: 'Law' ,
//             university: 'University of Rio de Janeiro'
//         }
//     },
//     price: 200 ,
//     genre: 'Fiction' ,
//     publicationYear: 1988 ,
//     publisher: {    
//         name: 'HarperCollins' ,
//         location: 'New York' 
//     }
// }

// console.log(book);

// // get object keys
// console.log(Object.keys(book));

// // get object values
// console.log(Object.values(book));

// delete book.writer ;
// console.log(book);

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

console.log( ("name" in biceps) ); // true

console.log( ("shortHead" in biceps) ); // false

console.log( ("shortHead" in biceps.variations) ); // true

