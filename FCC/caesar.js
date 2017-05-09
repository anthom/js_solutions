// Free Code Camp, Front End track
// Basic Algorithm Challenge: Caesar's Cipher

function rot13(str) { // LBH QVQ VG!
  
  var codes = [];
  var deciphered="";
  
  
   for (var x in str){                                                        // check ASCII code of each character in str
      if (str.charCodeAt(x) >= 78){
        charCode = (str.charCodeAt(x) - 13);                                  // 65="A", 65+13=78=ROT13 for A
    }
      else if (str.charCodeAt(x) >= 65 && str.charCodeAt(x) < 78) {
        charCode = (str.charCodeAt(x) + 13);
      }
    else {
      charCode = str.charCodeAt(x);                                         // if not uppercase alpha, charcode remains the same
    }
    codes.push(charCode);                                                   // push all "de-rotated" character values into codes array
  }  
    
    
    
  for (i = 0; i < codes.length; i++){
    deciphered = deciphered + String.fromCharCode(codes[i]);              // concatenate deciphered string w/character values from
  }                                                                       // codes array

  return deciphered;

}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
