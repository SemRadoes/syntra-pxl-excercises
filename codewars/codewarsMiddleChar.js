// You are going to be given a word. Your job is to return the middle character of the word. 
// If the word's length is odd, return the middle character. 
// If the word's length is even, return the middle 2 characters.


function getMiddle(s)
{
  if (s.length % 2 === 0){
      // neem de middelste
      const firstChar = s[s.length / 2] // return s[(s.length / 2) - 1] + s[s.length / 2];
      //neem de chracter voor de middelste
      const secChar = s[(s.length / 2) - 1]
      let middleChars = secChar + firstChar;
      return middleChars;
  } else {
      // neem de naar beneden afgeronde indexvalue
      return s[Math.floor(s.length / 2)];
  }
}

console.log(getMiddle("jullie"));
console.log(getMiddle("hij"));
console.log(getMiddle("hetzelfde"));
console.log(getMiddle("hetzelfde1"));