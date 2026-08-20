let human = {
    name: 'Alice',
    age: 30,
    occupation: 'Engineer',
    address: {
        city: 'San Francisco',
        zip: 94105
    }
} ;

for( let h in human){
    console.log(h); 
    console.log(human[h]);
}

