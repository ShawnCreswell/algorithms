
function alwaysHungry(arr) {
    var yummy = "yummy";
    var hungry = "Im hungry";

    for(var i = 0; i < arr.length; i++){
        if(arr[i] == "food"){
            // console.log("yummy")
            return yummy;
        }else if(arr[i] !== "food") {
            // console.log("Im hungry")

            return hungry;
        }

    } 

}

alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
// console.log(yummy);
console.log(alwaysHungry);

alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"
// console.log(hungry);
