// Complete the method that takes a boolean value 
// and return a "Yes" string for true, or a "No" string for false.

function boolToWord( bool ){
    switch(bool){
        case true:
            return "Yes";
        case false:
            return "No";
    }
  }

  console.log(boolToWord(true));
  console.log(boolToWord(false));

function boolToWord( bool ){
    if(bool === true){
        return "Yes";
    } else {
        return "No";
    }
  }

console.log(boolToWord(true));
console.log(boolToWord(false));