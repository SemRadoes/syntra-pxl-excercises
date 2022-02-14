function findShort(s){
  const arrayOfWords = s.split(" ");
  console.log(arrayOfWords);
  let lengthOfShortestWord = 99;
  for (let i = 0; i < arrayOfWords.length; i++){
    if (arrayOfWords[i].length < lengthOfShortestWord){
      lengthOfShortestWord = arrayOfWords[i].length;
    } 
  } return lengthOfShortestWord;
}

s = "hola hela ik ben wel een kutkopje";
console.log(findShort(s));