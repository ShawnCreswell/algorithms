var isSunny = true;
var temperature = 45; // let's assume degrees Fahrenheit
var isRaining = false;
var whatToBring = "I should bring: ";

if (isSunny) {                              //Contents in () are conditions
    whatToBring += "sunglasses, ";
}
if (temperature < 50) {
    whatToBring += "a coat, ";
}
if (isRaining) {
    whatToBring += "an umbrella, ";
}
whatToBring += "and a smile!";

console.log(whatToBring); //--> I should bring: sunglasses, a coat, and a smile!



for (var i = 10; i > 0; i--) { // as long as
    if (i != 2) {
        console.log(i);
    } else {                                //otherwise
        console.log("ignition!");
    }
}

console.log("liftoff!");

//v10, 9, 8, 7, 6, 5, 4, 3, ignition!, 1, liftoff!
