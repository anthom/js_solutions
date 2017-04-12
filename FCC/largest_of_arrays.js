// Free Code Camp, Front End track
// Basic Algorithm Challenge: Return Largest Numbers in Arrays

function largestOfFour(arr) {
  // You can do this!
  largeArr = [];
  for (i=0; i < arr.length; i++) {
    largest = arr[i][0];
    for (j=1; j < arr[i].length; j++) {
      if (arr[i][j] > largest) {
       largest = arr[i][j];
    }
      
    }
    largeArr.push(largest);
  }
  arr = largeArr;  
  return arr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
