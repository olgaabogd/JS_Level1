console.log('The process has started');

const interval = setInterval(function () {
    if (arrayTest.length == 0) {
        clearInterval(interval);
    } else {
        console.log(arrayTest.shift());
    }
}, 1000);
let arrayTest = [1, 2, 3, 4]

function printResult() {
    console.log('Success!');
}
setTimeout(printResult, 7000);