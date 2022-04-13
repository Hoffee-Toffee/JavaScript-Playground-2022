// Returns the name of the month given a month in number format
function numToMonth (num){
    num = Number(num)
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    return months[num - 1]
}

// console.log(numToMonth(10))

// console.log(numToMonth(14))

// console.log(numToMonth("5"))

// console.log(numToMonth("Cheeseburger"))

// console.log(numToMonth())

// MM/DD/YY to day of the week as a string
function getDay (date) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    date = new Date(date)
    return days[date.getDay()]
}

// console.log(getDay("04/13/22"))

// Function that returns True if the length of a string is even, and False if it is not
function evenLen (string) {
    var len = string.length
    return len/2 == Math.round(len/2)
}

// console.log(evenLen("Odd"))
// console.log(evenLen("Even"))

const isEven = (string) => string.length % 2 == 0


// Function that finds the index of a string in an array
function getIndex (array, string) {
    return array.indexOf(string)
}

// console.log(getIndex(["Q", "W", "R"], "W")) // -> 1

// const getIndex = (array, string) => array.findIndex(val => val === string)

// Returns a total of all odd numbers up to (and including) a given 

function sumOdds (limit) {
    var sum = 0
    for (let number = 1; number <= limit; number += 2) {
        sum += number
    }
    return sum
}

// console.log(sumOdds(1))
// console.log(sumOdds(2))
// console.log(sumOdds(3))
// console.log(sumOdds(4))
// console.log(sumOdds(5))

// Filters out the numbers from an array of strings and numbers
function filterArray (array) {
    var filteredArray = []
    for (let index = 0; index < array.length; index++) {
        if (typeof(array[index]) == "number") {
            filteredArray.push(array[index])
        }
    }
    return filteredArray
}

// console.log(filterArray([100, 10, 90, "Cheese", 59, "Obama"]))

// Increments a given number by 1

function addOne (num) {
    return num + 1
}

// console.log(addOne(12))

// console.log(addOne(-2))