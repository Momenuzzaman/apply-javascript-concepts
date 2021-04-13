var number = 11;
for(var i = 2; i < number; i++){
//    console.log(i, number%i);
    if(number%i == 0){
        console.log("Not a prime number");
        break;
    }
}


function primeNumber(number){
    for(var i = 2; i < number; i++){
        if(number%i == 0){
            return " Not a Prime Number";
        }
    }
    return "Prime Number";
}
var result = primeNumber(79);
console.log(result);