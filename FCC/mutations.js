// Free Code Camp, Front End track
// Basic Algorithm Challenge: Mutations

function mutation(arr) {
  inStr = arr[0].toLowerCase();           // assign both array items to a new lowercase string
  outStr =  arr[1].toLowerCase();
  truthCount = 0;                         // set count of "hits" for value 2
  for (i = 0; i < outStr.length; i++){      // check each character in outStr against the whole of inStr
    if (inStr.indexOf(outStr.charAt(i)) !== -1) {
      truthCount++;                         // If there's a match, increment truthCount
    }
  }
  
  if ( truthCount == outStr.length ) {      // If truth count equals the length of outArr, then we have a match!
    return true;
  }
  
  else {
  return false;
  }
}
mutation(["Mary", "Aarmy"]);
