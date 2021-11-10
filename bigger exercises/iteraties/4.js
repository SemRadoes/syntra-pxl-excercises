// Schrijf een programma dat een getal tussen 1 en 100 opvraagt. 
// Zorg ervoor dat elke foutieve invoer geweigerd wordt. 
// Telkens een verkeerde invoer gebeurt dient er op het scherm een foutboodschap te verschijnen. 
// Ofwel “Fout! Het getal moet groter zijn dan 1” ofwel, “Fout! Het getal moet kleiner zijn dan 100”. 
// Het programma stopt als er een juiste invoer gedaan is. Het getal wordt dan weergegeven op het scherm.

const PromptSync = require("prompt-sync")

const prompt = PromptSync();
let getal = parseInt(prompt("getal tussen 1 en 100: "));

while(getal <= 1 || getal >= 100){
    if(getal <= 1){
        console.log("fout! het getal moet groter zijn dan 1");
    } else {
        console.log("fout! het getal moet kleiner zijn dan 100");
    } 
    getal = parseInt(prompt("getal tussen 1 en 100: "));
}

console.log(getal);