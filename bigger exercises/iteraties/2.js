// Lees een rij gehele getallen in en druk de som af. 
// Deze rij eindigt met 0. 
// Druk ook af hoeveel negatieve getallen er werden ingegeven.

const PromptSync = require("prompt-sync");
const prompt = PromptSync();
let getal = parseInt(prompt("geef een getal: "));
let som = 0;
let negatieveGetallen = 0;

while(getal !== 0){
    
    som += getal;
    if(getal < 0){
        negatieveGetallen++
    }
    getal = parseInt(prompt("geef een getal: "));
}

console.log("De som is ", som);
console.log("Aantal negatieve getallen: ", negatieveGetallen);