/*Bij het spelletje blad steen schaar kiezen twee partijen elk één optie. De regels zijn:
blad wint van steen
steen wint van schaar
schaar wint van blad
Definieer een functie genaamd oneerlijkeBladSteenSchaar.
De functie accepteert één parameter genaamd keuze.
In het codeblok van de functie wordt er gezorgd dat de functie altijd de verliezende
keuze neemt ten opzichte van de parameter.
Toon een alert() met "Gebruiker: [keuze], Computer: [keuze van computer], de
gebruiker wint!". Waarbij [keuze] de doorgegeven parameter is en [keuze van
computer] de verliezende optie.*/

function oneerlijkeBladSteenSchaar(keuze){
    let computerkeuze;
    if (keuze === "blad"){
        computerkeuze = "steen"
    } else if (keuze === "steen"){
        computerkeuze = "schaar"
    } else {
        computerkeuze = "blad"
    }
    return computerkeuze;
}
const keuze = prompt("blad, steen of schaar? " )
alert(`Gebruiker: ${keuze}, Computer: ${oneerlijkeBladSteenSchaar(keuze)}, de gebruiker wint!}`);