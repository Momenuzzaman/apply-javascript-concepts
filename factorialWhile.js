var i = 1;
factorial =1;
while(i<=10){
    factorial = factorial*i;
    // console.log(i, factorial);
    i++
}
console.log(i,factorial);

function factorialF(number){
    var i =1;
   var factorial = 1;
    while(i<=number){
       factorial = factorial*i;
       i++;
    }
    return factorial;
} 
var result = factorialF(15);
console.log(result);

