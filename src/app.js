function returnTotalNested (array) {
    var num = 0
    for (let index = 0; index < array.length; index++) {
        if (typeof array[index] == "object") {
            num += returnTotalNested(array[index])
        }
        else {
            num++
        }
    }
    return num
}

console.log( returnTotalNested([1, 2, 3, 4, [5, 6, 7, [8, 9, [10], [], []]]]) )


