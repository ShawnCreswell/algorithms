
for (var i = 1; i<101; i++){
    var num3 = i % 3 == 0;
    var num5 = i % 5 == 0;

    if (num3 && num5) {
        console.log('FizzBuzz')
    } 
    else if(num3){
        console.log('Fizz')
    } 
    else if(num5){
        console.log('Buzz');
    }
    else{
        console.log(i);
    }
}
