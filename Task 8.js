function selectTheLongestWord(array){	    
    const result = [];
    var initialLength = 0;

    for (var i=0; i < array.length; i++) {
        if(array[i].length > initialLength){
           initialLength = array[i].length;}
    }
    for(var i=0; i < array.length; i++) {
       if(array[i].length >= initialLength){
           result.push(array[i]);}
    } 

    return result

	}	


const longestWord = selectTheLongestWord(['spring', 'water','caught', 'helicopter', 'chosen', 'hold', 'pelicopter', 'april']);
console.log (longestWord);
