let sourceArray = ['Minsk', 'Moscow', 'Berlin', 'Toronto', 'Paris', 'Moscow'];
let geese = ['London', 'Paris', 'Moscow'];

let result = sourceArray.reduce((res, value) => {
if (!geese.includes(value)) res.push(value); 
return res;} , []);
console.log(result); 