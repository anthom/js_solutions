// Free Code Camp, Front End track
// Basic Algorithm Challenge: Confirm the Ending

function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  sub = str.substr(str.length-target.length);
  if (sub == target) {
    return true;
  }
  else {
    return false;
  }
  return str;
}

confirmEnding("Bastian", "n");
