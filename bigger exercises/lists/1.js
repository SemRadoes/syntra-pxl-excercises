// Geef 15 gehele getallen in via het toetsenbord. 
// Druk het gemiddelde af weergegeven met 1 cijfer na de komma. 
// Hoeveel getallen zijn er kleiner dan het gemiddelde van deze 15 getallen? 
// Hoeveel procent is dit van de ingegeven getallen?

const PromptSync = require("prompt-sync");
const prompt = PromptSync();
let getallen = [];
let som = 0;
let kleinerDanGemiddelde = 0;
for(let i = 0; i < 15; i++){
    const getal = prompt("geef een geheel getal: ");
    getallen.push(getal);
    som += getal;
}

const gemiddelde = som/getallen.length;
for ( getal of getallen){
    if(getal < gemiddelde){
        kleinerDanGemiddelde++;
    }
}

const procent = kleinerDanGemiddelde*100/15;