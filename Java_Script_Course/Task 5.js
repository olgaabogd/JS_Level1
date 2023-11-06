const a = 100, b = 5;

try {
    console.log(a/b);
    console.log(c); 
}
catch(error) {
    console.log('Attention! An error has occurred!'); 
    console.log('Error details: ' + error);  
}
finally {
    console.log('It is necessary to fix all the errors before going further with this programme');
} 