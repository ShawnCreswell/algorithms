// 1.Print Odds 1-20
console.log('Odd numbers 1 - 20');

function oddNumbers(){
    for(var i = 0; i < 20; i++){
        if(i % 2 == 1)
        console.log(i);
    }
}

oddNumbers()

// 2.Decreasing Multiples of 3
console.log('Decreasing Multipes of 3');

for (var i = 100; i>0; i--){
    var num3 = i % 3 == 0;
    if(num3 == true){
        console.log(i);
    }
}

// 3.Print the Sequence
console.log('Print sequence 4, 2.5, 1, -0.5, -2, -3.5');

for (var i = 4 ; i > -4; i = i - 1.5){
    console.log(i);
}

// 4.Sigma
console.log('Sigma');

var sum =  0
for(var i = 0; i < 101; i++){
    sum = sum + i
}
console.log(sum);

// 5.Factorial
console.log('Factorial');

var multip = 1;
for(var i = 1; i < 13; i++){
    multip = multip * i
}

console.log(multip)