// Free Code Camp, Front End track
// Basic Algorithm Challenge: Title Case A Sentence

function titleCase(str) {
  str = str.toLowerCase(); // make all letters lower case
  words = str.split("");
  arraySize = words.length;
  console.log(words);
  // capitalize first letter
  words[0] = words[0].toUpperCase();
  // capitalize all letters that occur after a space
  for (i = 0; i < arraySize; i++) {
    if (words[i-1]===" ") {
      words[i] = words[i].toUpperCase();
    }
  str = words.join("");
  }
  return str;
}

titleCase("HERE IS MY HANDLE HERE IS MY SPOUT");
