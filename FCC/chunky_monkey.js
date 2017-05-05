// Free Code Camp, Front End track
// Basic Algorithm Challenge: Chunky Monkey

function chunkArrayInGroups(arr, size) {

  var chunked = [];                             // create new sub-array for first #size number of items in #arr
  var numArrs = arr.length / size;              // Number of sub-arrays needed to chunk all items in arr
  if (numArrs % 1 !== 0 || numArrs % 1 !== 1) { // Basically, if numArrs is not an integer
    numArrs = Math.ceil(numArrs);               // then round up numArrs
  }
  for (i=0; i < numArrs; i++) {
        removed = arr.splice(0, size);          // Splice the first #num items off the front of arr
        chunked.push(removed);                  // Push the removed items into the chunked array
  }

  return chunked;
}

chunkArrayInGroups([0,1,2,3,4,5,6], 3);

