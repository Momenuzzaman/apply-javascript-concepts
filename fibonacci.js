
// fibo[10] = fibo[10-1] + fibo[10-2];
// fibo[9] = fibo[9-1] + fibo[9-2];
// fibo[n] = fibo[n-1] + fibo[n-2];
// fibo[i] = fibo[i-1] + fibo[i-2];



var fibo = [0,1];
for(var i = 2; i<=10; i++){
    fibo[i] = fibo[i-1] + fibo[i-2];
    console.log(fibo[i], fibo[i-1], fibo[i-2]);
}

function fibonacci(n){
    var fibo = [0,1];
    for(var i=2; i<=n; i++){
        fibo[i] = fibo[i-1] + fibo[i-2];
    }
    return fibo;
}
var result = fibonacci(10);
console.log(result);

var fibonacci = [0,1];
var i = 2;
while(i<=20)
{
    fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
    console.log(fibonacci);
    i++;
}
