// Free Code Camp, Front-End track
// Basic algorithm challenge: Reverse A String

function reverseString(str) {
  var strArray = [];
  strArray = str.split('');
  strArray.reverse();
  str = strArray.join('');
  return str;
}

reverseString("WazzupMuzzaFuzza?");
