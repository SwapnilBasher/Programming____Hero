// task 1

function gun(a, b, c, d) {
    return a * b * c * d;
}

console.log(gun(1, 2, 3, 4)); 

// task 2

function task2(a){
    if(a % 2 === 1){
        return a*2 ;
    }
    else{
        return a/2 ;
    }
}

console.log(task2(5));
console.log(task2(6));

// task 3

function make_avg(ara,sz){
    let s = 0 ;
    for( let a of ara){
        s = s+a;
    }
    return s/sz ;
}

const arr = [1, 2, 3, 4, 5];
const size = arr.length;
console.log(make_avg(arr, size));

// task 4

function count_zero(str){
    let count = 0 ;
    for(let c of str){
        if(c === '0'){
            count++;
        }
    }
    return count ;
}

console.log(count_zero("1001001"));

// task 5

function odd_even(num){
    if(num % 2 === 0){
        return "Even";
    }
    else{
        return "Odd";
    }
}

console.log(odd_even(5));
console.log(odd_even(6));