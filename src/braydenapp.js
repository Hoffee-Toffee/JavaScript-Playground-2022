function test(arr){
    return arr[0, 1 ,2 ];
}
console.log(test);

test([1, 23, 5])
//refactored to 
const getArrElement = arr => arr[0]
