const fs = require("fs");
const start_time = Date.now();
const words = fs.readFileSync("./wordList.txt").toString().split("\n");

let maxAnagramsNumber = 0;
let maxAnagramsWords;
let anagramsNumber = 0;

const anagrams = new Map();

for (let i = 0; i < words.length; i++) {
  const wordSorted = words[i].split("").sort().join("");
  const ana = anagrams.get(wordSorted);
  ana ? ana.push(words[i]) : anagrams.set(wordSorted, [words[i]]);
}

anagrams.forEach((word_list) => {
  if (word_list.length > maxAnagramsNumber) {
    maxAnagramsNumber = word_list.length;
    maxAnagramsWords = word_list;
  }
  if (word_list.length > 1) anagramsNumber++;
});

console.log(`words number : ${words.length}`);
console.log(`number of anagrams : ${anagramsNumber}`);
console.log(`max anagrams ${maxAnagramsWords.length} :  ${maxAnagramsWords}`);

console.log(`${Date.now() - start_time} ms`);
