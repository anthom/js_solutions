// Free Code Camp, Front End track
// Basic Algorithm Challenge: Check for Palindromes

function palindrome(str) {
  // create a variable to store number of palindrom matches
  var palMatch = 0;
  var strArray = [];
  // modify str to remove any non alpha characters
  str = str.replace(/\W+/g,""); // remove non alphanumeric
  str = str.replace(/\d+/g,""); // remove numbers
  str = str.replace(/[_-]/g, ""); // remove dashes and underscores
  str = str.toLowerCase(); // modify str to ensure all lowercase characters
  strArray = str.split(''); // expand contents of str to an array
  while(strArray.length >= 1) {
    arrayEnd = str.length - 1;
    // compare first element in array to last element
    if (strArray[0] == strArray[arrayEnd]) {
      palMatch = palMatch + 2;
     }
    strArray = strArray.pop;
    strArray = strArray.shift;
  }
  console.log(strArray, palMatch);
  // if both elements match, increment palmatch by 2
  // delete first and last element, loop back to compare new first and last
  
  return true;
}

palindrome("eye");
