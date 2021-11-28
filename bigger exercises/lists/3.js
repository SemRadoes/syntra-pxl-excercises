// Er worden via het toetsenbord 10 getallen ingelezen. 
// Schrijf een programma dat de positieve getallen toevoegt in een list met de naam positieve_getallen 
// en de strikt negatieve getallen toevoegt in een list met de naam negatieve_getallen.
// Druk de lengte en de waarden van beide lists af.
// Bepaal het kleinste getal van de list negatieve_getallen.

const PromptSync = require("prompt-sync");
const prompt = PromptSync();
let positieveGetallen = [];
let negatieveGetallen = [];
for(let i = 0; i < 10; i++){
    const getal = prompt("geef een getal: ");
    if ( getal >= 0){
        positieveGetallen.push(getal);
    } else {
        negatieveGetallen.push(getal);
    }
}

const kleinsteWaarde = Math.min(negatieveGetallen);
console.log(`positieve getallen: ${positieveGetallen.length}`);

for (getal of positieveGetallen){
    console.log(getal);
}

console.log(`negatieve getallen: ${negatieveGetallen.length}`);

for (getal of negatieveGetallen){
    console.log(getal);
}