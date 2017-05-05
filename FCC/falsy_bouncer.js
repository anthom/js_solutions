// Free Code Camp, Front End track
// Basic Algorithm Challenge: Falsy Bouncer

function bouncer(arr) {
  var falsy = Boolean;              // define a new Boolean but do not assign value, making it false
  var filtered = arr.filter(falsy); // filter any falsy values from the input string
  return filtered;
}

bouncer([7, "ate", "", false, 9]);
