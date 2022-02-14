/*Initialiseer een variabele i met waarde 0.
Maak gebruik van een while loop.
Elke iteratie wordt i met 1 opghoogd.
Maak gebruik van een while loop om elk getal dat geheel deelbaar is door 10 uit te
printen.
Zorg dat er 100 iteraties gebeuren.*/

let i = 0;
while (i < 101){
    if(i %10 === 0){
        console.log(i)
    }
    i++
}