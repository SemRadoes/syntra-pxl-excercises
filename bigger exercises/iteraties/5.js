// Een onderneming wenst aan haar personeelsleden een premie uit te betalen 
// die in verhouding staat tot het aantal dienstjaren. Bereken de individuele premie en de totale premie. 
// Per personeelslid dient via het toetsenbord het volgende ingegeven te worden: 
// de familienaam (invoer van "/" of "*" betekent het einde van het programma), 
// voornaam en het aantal dienstjaren. Zorg voor een invoercontrole op het aantal dienstjaren, 
// dit moet een getal zijn tussen 0 en 40 jaar. De premie wordt als volgt berekend: het aantal dienstjaren * 25 euro. 
// Als het aantal dienstjaren minder zijn dan 5, krijgt de persoon 0 euro als premie. Druk per persoon de familienaam,
//  de voornaam, het aantal jaren dienst en de premie af. 
// Druk aan het einde van het programma de totaal te betalen premie en de hoogste premie af.

const PromptSync = require("prompt-sync");
const prompt = PromptSync();
let werknemers = [];
let premie = 0;
let familieNaam = prompt("familienaam: ");
while(familieNaam !== "/" || "*"){
    let voorNaam = prompt("voornaam: ");
    let aantalDienstjaren = prompt("dienstjaren: ");
    while(aantalDienstjaren < 0 || aantalDienstjaren > 40){
        console.log("Het aantal dienstjaren moet tussen 0 en 40 zijn!");
        aantalDienstjaren = prompt("dienstjaren: ");
    }
    if (aantalDienstjaren >= 5){
        premie = aantalDienstjaren * 25;
    }
    werknemers.push({familienaam: familieNaam}, {voornaam: voorNaam}, 
                    {aantalDienstjaren: aantalDienstjaren}, {premie: premie} )
    familieNaam = prompt("familienaam: ");
}

console.log(werknemers);