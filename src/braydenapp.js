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

console.log(arrValTypes([10, "Burger", 69, "Nice", true, 10.6]));
//first = (setting equal) == (checking if equal) === (checking if equal and same datatype)
function corndog(novu,novu2){
    return novu.length === novu2.length;
}
console.log(corndog("meat", "vegetable"));

function annointed(jar){
    var gib = []
    for (let index = 0; index < jar.length; index++) {
        if (typeof jar[index] == "number" ) {
            gib.push(jar[index])
        }        
    }
    return gib 
}

console.log(annointed([10, "Burger", 69, "Nice", true, 10.6])); 

function funky_tristan_b33Я00t(obj) {
    var cheese = []
    for (var key in obj) {
        cheese.push(obj[key]);
    }
    return cheese
}

console.log(funky_tristan_b33Я00t({var: 1, var2: 2}))



