function test(arr){
    return arr[0];
}

console.log(test([1]))

console.log(test([1, 23, 5]))
//refactored to 
//const getArrElement = arr => arr[0] ;

//console.log("damn daniel", "back at it again with the white vans");

// coding rust - println!("insane in the membrane") 

function createArray(a, b) {
    var arr = [a,b]

    return arr
}

console.log(createArray(1, 2))

function reverseArray(arr) {
    return arr.reverse()
}

console.log(reverseArray([10, "Burger", 69, "Nice"]))

function lastArrayElement(arr = []) {
    return arr[arr.length - 1]
}

console.log(lastArrayElement([10, "Burger", 69, "Nice"]))





function arrToStr(arr = []) {
    return arr.toString()
}

console.log(arrToStr([10, "Burger", 69, "Nice"]))