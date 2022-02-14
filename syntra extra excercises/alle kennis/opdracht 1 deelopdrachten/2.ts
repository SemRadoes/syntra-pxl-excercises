// Definieer een functie genaamd berekenTotaal:
// De functie bevat in het codeblok, de code van Opdracht 1.
// Verwijder de console.log in de while loop.
// De functie geeft het berekende totaal terug (na de while loop).
// Initialiseer een variabele genaamd resultaat, roep de functie berekenTotaal aan
// en ken het resultaat toe aan de variabele resultaat.
// Voeg een console.log toe, die uitprint "Het totaal is: " met daarachter de waarde van
// de variabele resultaat.

function berekenHetTotaal(): number{
    let totaal = 0;
    let i = 0;

    while( i < 10){
        i++;
        totaal += i;
    }
    return totaal;
}

const resultaatTs = berekenHetTotaal();
console.log(`Het totaal is: ${resultaatTs}`);