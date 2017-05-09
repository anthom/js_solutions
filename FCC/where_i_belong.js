// Free Code Camp, Front End track
// Basic Algorithm Challenge: Where Do I Belong

function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  arr.sort(function(a,b){                         // sort all numbers in the initial array properly
    return a - b;
  });
  console.log(arr.length+" items in array "+arr); // iterate across items in the array
  for (i =0; i < arr.length; i++) {               // if an item is larger than num
    if (arr[i] >= num) {                          // return its position in the array
      console.log(num+" belongs at position "+ i);      
      return i;
    }
  }
    return arr.length;                            // if no items were found larger
                                                  // than num, return the last position of arr
}

getIndexToIns([10, 20, 30, 40, 50], 35);
