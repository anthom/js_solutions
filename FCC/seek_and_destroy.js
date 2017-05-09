// Free Code Camp, Front End track
// Basic Algorithm Challenge: Seek and Destroy

function destroyer(arr) {
  // Remove all the values
  var initArray = arr;
  var filters = Array.from(arguments).slice(1);
  var filteredArray = initArray.filter(function(val) {
                return !filters.includes(val);});
  return filteredArray;
  
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
