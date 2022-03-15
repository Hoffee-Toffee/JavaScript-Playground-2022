//TODO
/*
JS Variables
*/

console.clear()

var fullName = "Tristan"
var classcode = 503

console.log(fullName)

// JS Objects
var person = {
    first_name: "Tristan",
    last_name: "Bulmer",
    course_number: classcode
}

console.log(person.last_name)

// JS Functions

function add_two_nums(numA, numB) {
    return numA + numB
}

console.log( add_two_nums(9, 10) )

// JS Loops

for (let i = 0; i < 10; i++) {
    console.log(i)
}

// JS Conditionals

var number = 10

if (number === 10){
    console.log("Number is 10")
}
else{
    console.log("Number is not 10")
}