function findLongestWord(str) {
  words = str.split(' ');
  longest = words[0];
  arraySize = words.length;
  for (i = 0; i < arraySize; i++) {
   if (words[i].length > longest.length) {
     longest = words[i];
    }
    str = longest;
  }
  return str.length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
