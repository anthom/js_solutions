// Free Code Camp, Front End track
// Basic Algorithm Challenge: Truncate a String

function truncateString(str, num) {
  // Clear out that junk in your trunk
   if (num <= 3) {
      str = str.slice(0, num)+"...";
  }
  else if (str.length > num) {
      str = str.slice(0, num-3)+"...";
  }  
  return str;
}

truncateString("Absolutely longer", 2);
