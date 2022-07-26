// Dashawn Creswell 
// Command question mark for shortcut
// Varibles and Data types

// Creating a variable

var myName = "Dashawn Creswell"; 

// Rules when naming a variable
// You cannot start with a number
// You cannot have a hyphen or dash.
// You cannot have white space.
// You cannot use reserved keywords.

// Stings 
// Strings of characters 

var num = "1"; //This is a string not a number
var space = " ";


var firstname = "Dashawn";
var lastname = "Creswell";
console.log(firstname, lastname);

// Concatenation of two strings (Adding two strings together)
var fullname = firstname + " " + lastname;
console.log(fullname) ;

// Numbers 
// Floating point (decimals) and integers are both considered numbers in JS

var num1 = 35.1;
var num2 = 76;

console.log('num1: ', typeof num1);
console.log('num2: ', typeof num2);

// operators:
// + - / * % **

// Booleans
// Can only be true or false/

var isRainingToday = false;

// Camel Case - First word is lowercase, everyword folling is uppercase 

// Boolea expressions
// A boolean ecpresison will evaluate to true or false.

console.log(3 > 2);

console.log(1);
console.log(2);
console.log(3);


//Dry
//Dont reapeat yourself!

// For loop:
// 1. Named sentry
// 2. Where it starts
// 3. where it ends
// 4. How it changes

for(var i = 1; i<=1000; i++){       //i+=1 or 2...etc
    console.log(i);                 //If console.log is outside loop i=1001
}

// Basic 13 #1; 
// Create a fo rloop that prints every integer to 255

for(var i = 1; i < 256; i++){
    console.log(i);
}

