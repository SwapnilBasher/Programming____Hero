let human = {
    "ob vash": "greed",
    name: "John",
    age: 30,
    race: "Caucasian",
    address: {
        street: "123 Main St",
        city: "New York",
        state: "NY"
    },
    parents: {
        father: {
            name: "Michael",
            age: 60
        },
        // mother: {
        //     name: "Sarah",
        //     age: 58
        // }
    }
}

console.log(human.parents.father.age); // Output: 60

console.log(human.parents?.mother?.age); // Output: undefined

console.log(human["ob vash"]); // Output: greed