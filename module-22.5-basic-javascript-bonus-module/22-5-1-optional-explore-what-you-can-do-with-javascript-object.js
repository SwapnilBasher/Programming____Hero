function f(x,y)
{
    console.log(arguments);
    console.log('length is' , arguments.length);
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
    console.log(arguments[3]);
    console.log(arguments[4]); // undefined

}

f(5, 1, 10, 9);  