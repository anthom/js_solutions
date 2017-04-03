// Free Code Camp, Front End track
// Basic Algorithm Challenge: Title Case A Sentence

function titleCase(str) {
  chars = str.toLowerCase().split(""); // make all letters lower case
  // capitalize first letter
  chars[0] = chars[0].toUpperCase();
  // capitalize all letters that occur after a space
  for (i = 0; i < chars.length; i++) {
    if (chars[i-1]===" ") {
      chars[i] = chars[i].toUpperCase();
    }
  str = chars.join("");
  }
  return str;
}

titleCase("I'm a little tea pot");

