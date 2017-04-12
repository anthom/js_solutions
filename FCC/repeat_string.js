// Free Code Camp, Front End track
// Basic Algorithm Challenge: Repeat a String

function repeatStringNumTimes(str, num) {
  // repeat after me
  if (num < 0) {
  str = "";
  return str;
}
  else {
  str = str.repeat(num);
  return str;
  }
}
repeatStringNumTimes("abc", 3);
