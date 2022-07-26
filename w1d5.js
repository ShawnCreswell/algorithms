// Arrays - what are they even?
// Arrays are our first datatype that ca hold a collection of values

// Reference Datatypes - pointers to a location in memory

// var colors = ['Red', 'Blue', 'Green', 'Yellow']

//Get and set Values using bracket notation

// Getting values using bracket notation
// console.log(colors[1]);
// var color = colors[1];

// Setting values using braket notation

// colors[2] = 'Purple';
// console.log(colors);

// colors[0] = color;
// console.log(colors);

//When setting values, you cna skip indexes
// colors[6] = 'mauve'
// console.log(colors);

// colors[5] = 25;
// console.log(colors);

//You cna mix and match datatypes in arrays.

// Popular methods that all arrays have.
// Push = add an element at the end of the array

// var length = colors.push('black');
// console.log(length);
// console.log('before pop:', colors);

// Pop = removes and returns the last item in an array

// colors.pop();
// console.log('after pop:', colors);
// var color2 = colors.pop();
// console.log(color2);

// Reverse an array in place
// ['a', 'b', 'c', 'd', 'e']
// ['e', 'd', 'c', 'b', 'a']

//In place - do not create a  new array
var arr = ['a', 'b', 'c', 'd', 'e']
console.log(arr(['a', 'b', 'c', 'd', 'e',]));

function reverseArr(arr) {
    for (var left = 0; left < Math.floor(arr.length / 2);left++ ){
        var right = arr.length - 1 - left;
        var temp = arr[right];
        arr[left] = arr[right];
        arr[right] = temp ;
    }
    return arr;
}

// var arr = [a,b,c,d,e]

console.log(reverseArr['a', 'b', 'c', 'd', 'e']);