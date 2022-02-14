/*Een bankbediende wenst snel te kunnen uitrekenen hoeveel de waarde van een bepaald bedrag in euro is in US dollar. 
Aan het begin van het programma geeft hij de waarde van de euro in t.o.v. de US dollar,
 vb. 1 euro = 1,28 US dollar (1,28 wordt ingevoerd). Vervolgens worden bedragen in euro ingevoerd,
  waarna de waarde in US dollar getoond wordt. 
De omzetting gebeurt via een functie. 
Het programma eindigt als voor het bedrag in euro 0 wordt ingevoerd.*/
const PromptSync = require("prompt-sync");
const prompt = PromptSync();

function rekenOm(munt){
    const euroToUsDollar = 1.28;
    const wisselkoers = munt * euroToUsDollar;
    return wisselkoers;
}

let ingave = parseInt(prompt("euro: "));
while (ingave !== 0){
    const wisselkoers = rekenOm(ingave);
    console.log(`${ingave} Euro is ${wisselkoers} Dollar`);
    ingave = parseInt(prompt("euro: "));
}