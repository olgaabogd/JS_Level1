function getAverage(array) {
    if (array.length == 0) {
        return 0;
    }
let sum = 0
    for (i = 0; i < array.length; i++) {
    sum = sum + array[i];
    }
    return sum / array.length
}

console.log(getAverage([1,5,7,3,67,4,56,8])) 
console.log(getAverage([])) 