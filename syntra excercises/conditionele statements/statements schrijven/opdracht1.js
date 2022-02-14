/*Herschrijf Opdracht 4 uit de vorige reeks oefeningen. 
Maak hierbij gebruik van if, else-if en
else.*/

const digit = 3;
let result;

if (digit === 1) {
    result = "een";
} else if (digit === 2) {
    result = "twee";
} else if (digit === 3) {
    result = "drie";
} else if (digit === 4) {
    result = "vier";
} else if (digit === 5) {
    result = "vijf";
} else {
    result = "getal niet gekend";
}
console.log(result);