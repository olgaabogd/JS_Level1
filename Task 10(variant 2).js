class MyArrayWithNumbers {
static selectEvenNumbers(arr){	    
    const result = [];

    for (let i = 0; i < arr.length; i++) {	    
        if ((arr[i] % 2) == 0) {
        result.push(arr[i]);
        }
	 }

	return result;
	}	
}

	const evenNumbers = MyArrayWithNumbers.selectEvenNumbers([2, 4, 5, 6, 7, 8]);
	console.log (evenNumbers);
