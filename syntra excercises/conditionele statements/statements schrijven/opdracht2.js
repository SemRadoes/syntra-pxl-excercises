/*Schrijf een functie genaamd grootsteGetal die twee parameters accepteert. Zorg ervoor
dat de functie de grootste parameter teruggeeft.*/

function grootsteGetal(parameter1, parameter2){
if(parameter1 > parameter2){
    return parameter1;
} else {
    return parameter2;
}
}

console.log(grootsteGetal(6, 5));