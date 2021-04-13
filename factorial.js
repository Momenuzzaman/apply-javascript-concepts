var factorial = 1;
for(var i = 1; i<=10; i++){
    factorial = factorial*i;
    console.log(i, factorial);
}

function factorialF(number){
    var factorial = 1;
    for(var i=1; i<=number; i++){
        factorial = factorial *i;
    }
    return factorial;
}

var result = factorialF(10);
console.log(result);