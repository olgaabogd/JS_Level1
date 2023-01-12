let array = [2, 4, 5, 7, 8];

let result = array.filter(function(value) {
if (value % 2 == 0) {
    return true;
} else {
    return false;
}
});

console.log(result); 