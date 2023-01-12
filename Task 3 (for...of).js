let initialArray = [1, 8 ,25, 17, 56, 98, 5, 0, 16, 2, 3]

function getNewArrayForElementsMoreThanSeven() {
let result = [];
for(let value of initialArray) {
    if(value > 7) {
    result.push(value);
    }
}
return result;
}

console.log(getNewArrayForElementsMoreThanSeven(initialArray)); 