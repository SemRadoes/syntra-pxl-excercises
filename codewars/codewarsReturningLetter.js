// An isogram is a word that has no repeating letters, 
// consecutive or non-consecutive. 
// Implement a function that determines whether a string that contains only letters is an isogram. 
// Assume the empty string is an isogram. Ignore letter case.

function isIsogram(str){
    const lowerCase = str.toLowerCase();
    for (let i = 0; i <= lowerCase.length; i++) {
        for (let j = i + 1; j <= lowerCase.length; j++) {
          if (lowerCase[j] == lowerCase[i]) {
            return false;
          }
        }
      }
    return true;
    
}


console.log(isIsogram("leuk"));
console.log(isIsogram("leukzijn"));
console.log(isIsogram("leek"));
console.log(isIsogram("lEek"));
console.log(isIsogram("leek"));
