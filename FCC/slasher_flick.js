// Free Code Camp, Front End track
// Basic Algorithm Challenge: Slasher Flick

function slasher(arr, howMany) {
  arr.splice(0, howMany);           // Take the first #howMany items off the front of arr
  return arr;
}

slasher([1, 2, 3], 2);
