// Schrijf een programma om de verkiezingsresultaten van de verkiezing “student van het jaar” te verwerken. 
// Er zijn 4 kandidaten waarop men kan stemmen. Via het toetsenbord wordt de keuze van een aantal personen ingegeven. 
// De keuze is de code van de student waarvoor men stemt. De invoer stopt wanneer voor de keuze de waarde 0 wordt ingegeven.
// code 1: An Janssen
// code 2: Bart Vriends
// code 3: Andries Michels
// code 4: Inge Kaas
// Druk per kandidaat de naam, het aantal personen dat voor deze kandidaat gestemd heeft
//  en het procentueel aandeel van de gekregen stemmen in het totaal aantal uitgebrachte stemmen af. 
// Het procentueel aandeel wordt weergegeven met 1 cijfer na de komma.
const PromptSync = require("prompt-sync");
const prompt = PromptSync();

const kandidaten = [
    {aantalStemmen : 0, code : 1, naam: "An Janssen"},
    {aantalStemmen : 0, code : 2, naam: "Bart Vriends"},
    {aantalStemmen : 0, code : 3, naam: "Andries Michels"},
    {aantalStemmen : 0, code : 4, naam: "Inge Kaas"}
];
let totaalAantalStemmen = 0;
let keuze = parseInt(prompt("stem op je kandidaat: "));
while(keuze !== 0){
    for(const kandidaat of kandidaten){
        if(keuze === kandidaat.code){
            kandidaat.aantalStemmen++;
            totaalAantalStemmen++;
        }  
    }
    keuze = parseInt(prompt("stem op je kandidaat: "));
}

for(let kandidaat of kandidaten){
    const output = 
    console.log(`kandidaat: ${kandidaat.naam}
                aantal stemmen: ${kandidaat.aantalStemmen}
                procent van de stemmen: ${Math.ceil(kandidaat.aantalStemmen*100/totaalAantalStemmen)}`);
}