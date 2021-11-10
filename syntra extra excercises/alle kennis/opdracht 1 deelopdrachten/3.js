// Voeg een parameter toe aan de functie berekenTotaal genaamd aantalLussen.
// Zorg ervoor dat de while loop niet 10 keer herhaald wordt, maar dat de parameter
// aantalLussen bepaalt hoe vaak de while loop herhaald wordt.
// Verwijder de regel code waar de variabele resultaat geïnitialiseerd wordt.
// Vervang in de console.log, de variabele resultaat door berekenTotaal(10).
// Voeg volgende console.log toe:

function berekenTotaal(aantalLussen){
    let totaal = 0;
    let i = 0;

    while( i < aantalLussen){
        i++;
        totaal += i;
    }
    return totaal;
}

console.log(`Het totaal is:  ${berekenTotaal(10)}`);
console.log("Het totaal is: ", berekenTotaal(25));
console.log("Het totaal is: ", berekenTotaal(100));
console.log("Het totaal is: ", berekenTotaal(666));
console.log("Het totaal is: ", berekenTotaal(10000));