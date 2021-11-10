// Write a function to convert a name into initials. 
// This kata strictly takes two words with one space in between them.
// The output should be two capital letters with a dot separating them.

function abbrevName(name){
    const nameArray = name.split(" ");
    const firstInitial = nameArray[0].charAt(0).toUpperCase();
    //console.log(firstInitial);
    const secondInitial = nameArray[1].charAt(0).toUpperCase();
    //console.log(secondInitial);
    return `${firstInitial}.${secondInitial}`;
}

console.log(abbrevName("Sem Radoes"));