// Week 2 Day 1


var floor = Math.floor(1.8);
var ceiling = Math.ceil(Math.PI);
var random = Math.random();

console.log(floor); // 1
console.log(ceiling); // 4
console.log(random); // 0 (Inclusive) and 1 (exclusive)

// Dice Roller
// Using what we've learned about the Math library in JavaScript, complete the following function that should return a value between 1 through 6 at random.

function d6() {
    var roll = Math.random();
    roll = Math.floor(roll * 6) + 1;
    return roll;
}

var playerRoll = d6();
console.log("The player rolled: " + playerRoll);


// Consult the Oracle
// Using the following array, write a function that will answer all of our questions by randomly choosing a response

var lifesAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes - definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];

function magic8Ball(question){
    var randIdx = Math.floor(Math.random() * lifesAnswers.length);
    var answer = lifesAnswers[randIdx];
    console.log('You asked:' + question);
    return answer;
}

console.log(magic8Ball());

function oddNum() {
    var arr = []
    for(var i = 1; i <= 255; i += 2){
        arr.push(i)
    }
    console.log(arr);
} 
oddNum()

// i % 3-- i is modulo and 3 is modululs

// Fi