nction formatWords(words){
  let refinedWords = [];
  let sentence = [];
  if (words === null || words.length === 0 || (words.length === 1 && words[0] === '')) {return'';}
  for (let i = 0; i < words.length; i++) {
    if (words[i]) {
      refinedWords.push(words[i]);
    } 
  }
  for (let j = 0; j < refinedWords.length; j++) {
    console.log(refinedWords);
    if (refinedWords.length === 1) {
      return refinedWords[j];
    } else if (refinedWords.length === 2) {
      sentence.push(refinedWords[j] + ' and ' + refinedWords[j+1]);
      return sentence.join('');
    } else if (j+2 !== refinedWords.length) {
      sentence.push(refinedWords[j] + ', ');
    } else {
      sentence.push(refinedWords[j] + ' and ' + refinedWords[j+1]);
      return sentence.join('');
    }
  }
}