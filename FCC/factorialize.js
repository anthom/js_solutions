//Free Code Camp, Front End track
// Basic Algorithm Challenge: Factorialize a number

function factorialize(num) {
  var fact =[];
  if (num < 1) {
    num = 1;
    return num;
  }
  else {
    for (var i = 1; i <= num; i++) {
    fact.push(i);
    console.log(fact);
  }
  
  num = fact.reduce(function(previousVal, currentVal) {
    return currentVal * previousVal;
  });
  return num;
}
}

factorialize(0);
