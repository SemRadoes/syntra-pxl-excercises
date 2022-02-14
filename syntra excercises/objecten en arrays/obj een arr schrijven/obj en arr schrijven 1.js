/*Declareer een variabele genaamd hobby.
Declareer een variabele genaamd ik.
Ken een waarde toe aan de variabele hobby, de waarde is een object met als
properties:
naam, de naam bevat een waarde van het type "string" en omschrijft de hobby
aantalUren, dit bevat het aantal uren dat gespendeerd wordt aan de hobby per
week
Ken een waarde toe aan de variabele ik, de waarde is een object met als properties:
voornaam, dit bevat een "string" met als waarde jouw voornaam
achternaam, dit bevat een "string" met als waarde jouw achternaam
hobby, ken hieraan de variabele hobby toe
Print uit, gebruikmakende van het object hobby, hoeveel uren er per week
gespendeerd worden.
Print uit wat de naam is van de hobby, gebruikmakende van de variabele ik.*/

let hobby;
let ik;
hobby = {
naam : "jujutsu",
aantalUren : 3}
ik = {
voornaam : "Sem",
achternaam : "Radoes",
hobby : hobby}

console.log(hobby.aantalUren)
console.log(ik.hobby.naam)
