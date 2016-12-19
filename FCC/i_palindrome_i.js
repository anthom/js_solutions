// Free Code Camp, Front End track
// Basic Algorithm Challenge: Check for Palindromes

function palindrome(str) {
  str = str.toLowerCase().replace(/[^a-z|0-9]/g, ""); // modify str to ensure all lowercase characters

  strArray = str.split(''); // expand contents of str to an array

  console.log(str);
  
  if (str.length === 0) {
	  return true;
  }
  
  if (str[0] !== str[str.length-1]){
	  return false
  }
  
  else {
	  return palindrome(str.slice(1,str.length-1));
  }
 
}

palindrome("I, man, am regal! A German, am I!");
