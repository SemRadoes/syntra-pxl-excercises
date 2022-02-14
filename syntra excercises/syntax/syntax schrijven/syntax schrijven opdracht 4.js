/*Declareer twee variabelen, genaamd type1 en type2.
Ken aan type1 het resultaat van de expressie typeof {} toe.
Ken aan type2 het resultaat van de expressie typeof [] toe.
Print in de console het resultaat van de vergelijking van de waarden type1 en type2.
Zet onder elke regel de waarde en het type van elke variabele in de lijn boven de lijn
met commentaar.
Zet in commentaar wat er uitgeprint zal worden door console.log
Extra uitleg:
{} is de syntax om een object aan te maken in JavaScript
[] is de syntax om een array aan te maken in JavaScript
Het keyword typeof geeft de waarde van wat erachterkomt terug als string
Een vergelijking wordt gedaan met ===*/

let type1;
// type1 heeft de waarde undefined, type "undefined"

let type2;      // type2 heeft de waarde undefined, type "undefined"

type1 = typeof {}; 
// type1 heeft de waarde "object", type "string"

type2 = typeof [];  
// type2 heeft de waarde "object", type "string"

console.log(type1 === type2);   
// dit print true, aangezien de vergelijking is: "object" === "object"
