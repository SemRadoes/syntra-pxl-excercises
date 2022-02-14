// Gebruik de oplossing van Opdracht 3 als basis:
// Definieer een functie genaamd printTotaal:
// De functie accepteert één parameter, genaamd aantalLussen
// Het codeblok bevat volgende code: console.log("Het totaal is: ",
// berekenTotaal(aantalLussen));
// Vervang de vijf console.log onderaan door:

function berekenTotaal(aantalLussen){
    let totaal = 0;
    let i = 0;

    while( i < aantalLussen){
        i++;
        totaal += i;
    }
    return totaal;
}
function printTotaal(aantalLussen){
    console.log("Het totaal is: ",berekenTotaal(aantalLussen));
}
printTotaal(10);
printTotaal(25);
printTotaal(100);
printTotaal(666);
printTotaal(10000);