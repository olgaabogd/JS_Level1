function updateArray(sourceArray, geeseArray) { 
        return (sourceArray.filter
            (element => !geeseArray.includes(element)))
    }

const resultArray = updateArray(['Minsk', 'Moscow', 'Berlin', 'Toronto', 'Paris', 'Moscow'], ['London', 'Paris', 'Moscow'])
console.log(resultArray);
