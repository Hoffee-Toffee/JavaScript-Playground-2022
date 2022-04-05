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
    //return arr.toString()
    return arr.join(" ")
}

console.log(arrToStr([10, "Burger", 69, "Nice"]))

function arrValTypes(arr = []) {
    var typeArr = []

    for (let index = 0; index < arr.length; index++) {
        typeArr.push(typeof(arr[index]))
    }
    return typeArr.join(", ")
}

console.log(arrValTypes([10, "Burger", 69, "Nice", true, 10.6]))

const getArrElementTypes = arr => arr.map(x => typeof x)

console.log(getArrElementTypes([10, "Burger", 69, "Nice", true, 10.6]))