
// Functions - what are they evem?
//functions are simply a series of steps tha accpmplish a task.

// Function Declaration

// function greet() {
// console.log('Hello, buddy!');
// }

// //Function Invocation
// greet();

// Parameters
function greetWithName(timeOfDay, nameInput){
    console.log(`'Good ' ${timeOfDay}  ', ' + ${nameInput} +'!'`);
    console.log(`Good, ${timeOfDay}, ${nameInput}!`);
}

greetWithName('morning', 'Shawn');


function add(num1, num2){
    consolog(num1 + num2);
    return num1 + num2;
}

var result = add(2,3);
consolelog(result)

// Global Scope vs function scope
var x = 5;
    
function setX(newValue) {
    x = newValue; 
}
    
console.log(x);
setX(15);
console.log(x);



var x = 5;
    
function addToX(amount) {
    return x + amount;
    console.log("hello there");
}
    
console.log(x);
var result = addToX(-10);
console.log(result);
console.log(x);


/*
A palindrome is a word that is spelled the same if read forwards or backwards. Some excellent palindrome examples are:

racecar
tacocat
But in our case we'll be looking at some arrays, can the values in the array be read the same forwards as backwards

*/ 

function isPal(arr) {
    for(var left=0; left<arr.length/2; left++) { //math.floor would round down, math.ceil to round up, math.round
        var right = arr.length-1-left;
        if(arr[left] != arr[right]) {
            return "Not a pal-indrome!";
        }
    }
    return "Pal-indrome!";
}
    
var result1 = isPal( [1, 1, 2, 2, 1] );
console.log(result1);
    
var result2 = isPal( [3, 2, 1, 1, 2, 3] );
console.log(result2);

