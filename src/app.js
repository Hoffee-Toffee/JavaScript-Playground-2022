function splitArr(arr, n) {
    var arrI = 0
    var finalArr = []
    var currArr = []

    for (let i = 0; i < arr.length; i++) {
        currArr.push(arr[i])
        arrI++

        if (arrI == n) {
            finalArr.push(currArr)
            currArr = []
            arrI = 0
        }
        else if (i == arr.length - 1) {
            finalArr.push(currArr)
        }
        
    }

    return finalArr
}

// console.log(splitArr([1, 2, 3, 4, 5, 6, 7, 8, 9], 3))
// console.log(splitArr([1, 2, 3, 4, 5, 6, 7, 8, 9], 2))

console.clear()

// Returns an array of numbers that are common in the two arrays given 
function arrCommon(arr, arr2) {
    finalArr = []

    // Loops through the first array
    for (let i = 0; i < arr.length; i++) {
        // Checks if the item is in the other array
        if (arr2.includes(arr[i])) {
            finalArr.push(arr[i])
        }
    }
    return finalArr
}

// console.log(arrCommon([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [1, 3, 5, 7, 8, 9, 10]))
// returns [1, 3, 5, 7, 8, 9, 10]

// Average student grades and return whoever has the best average
function getBestStudent(data) {
    bestgrade = 0
    bestperson = ""

    // Loops though each student, averaging and comparing their data    
    for (let i = 0; i < data.length; i++) {
        // Sums the grades of a student
        var sumgrades = data[i].grades.reduce((previousValue, currentValue) => previousValue + currentValue, 0)
        // Averages the grades
        var averagegrade = sumgrades/(data[i].grades.length)

        if (averagegrade > bestgrade){
            bestgrade = averagegrade
            bestperson = data[i].name
        }
    }

    return bestperson
}

console.log(getBestStudent([
    {
        name: "Ali",
        grades: [12, 100, 41]
    },
    {
        name: "James",
        grades: [81, 32, 6]
    },
    {
        name: "Matt",
        grades: [42, 18, 6]
    }
]))

// Creates an empty object
let product = {}

// Adds values
product["name"] = "Laptop"
product["price"] = 1200

// Changes the price
product["price"] = 1000

// Displays the current name and price of the product
console.log(`${product["name"]}, costs $${product["price"]}`)

// Removes the 'name' property
delete product["name"]


console.log("price" in product)

console.clear()

let user = {
    name: "John",
    age: 30,
    isAdmin: true
}

for (const key in user) {
    console.log(key)
    console.log(user[key])
}

let salaries = {
    John: 100,
    Ann: 160,
    Peter: 130,
    getSum() {
        var sum = 0
        for (const key in this) {
            sum += this[key]
        }
        this["sum"] = sum
    }
}



console.log(salaries.sum)

console.clear()

let admin = user
admin.name = "David"

console.log(user.name)

console.clear()

const testuser = {
    name: "John"
}

testuser.name = "Bob"

console.log(testuser)

var clone = Object.assign({}, testuser)

clone.name = "David"

console.log(clone.name)

console.clear()

clone.sayHi = function () {
    console.log("Hello!")
}
clone.sayHi()