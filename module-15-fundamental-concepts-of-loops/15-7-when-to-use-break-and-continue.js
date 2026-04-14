// let i = 9;

// for( let j = 1 ; j <= 10 ; j++){
//     if(j === 6){
//         break;
//     }
//     console.log(i, "*"  , j , "=", i*j);
// }


let p = 1 ; 

while(p<20){
    if( p % 2 === 1){
        p++;
        continue;
    }
    console.log(p);
    p++;
}

