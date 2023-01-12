function defineWinterMonth(month) {
  let season;
  if (month == "December" || month == "January" || month == "February") {
    season = 'winter';
  } else {
    season = 'NOT winter';
  }
  return season;
}

console.log(defineWinterMonth("February")); 
console.log(defineWinterMonth("April")); 
console.log(defineWinterMonth("")); 