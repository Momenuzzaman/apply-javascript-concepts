function factorial(number){
    if(number == 0){
        return 1;
    }
    else{
        return number * factorial(number-1);
    }
}
var result = factorial(10);
console.log(result);



var factorial = 1;
for(i = 10; i>=1; i--){
    factorial = factorial*i;
    console.log(i,factorial);
}




var i = 5;
var factorial = 1;
while(i>=1){
    factorial =  factorial*i;
    console.log(i, factorial);
    i--;
}