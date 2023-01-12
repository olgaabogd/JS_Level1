let array = ['spring', 'water','caught', 'helicopter', 'chosen', 'hold', 'pelicopter', 'april'];
var initialLength = 0;
for(var i=0; i < array.length; i++) {
        if(array[i].length > initialLength){
        initialLength = array[i].length;}
    } 
for(var i=0; i < array.length; i++){
    if(array[i].length >= initialLength){
console.log(array[i]);}
} 