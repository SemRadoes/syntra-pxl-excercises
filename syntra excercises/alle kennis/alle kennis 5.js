/* 
Ga verder op Opdracht 4.
Definieer een functie genaamd speelSpel.
Zorg ervoor dat alle code in het codeblok drie keer wordt uitgevoerd.
Vraag de gebruiker met prompt() naar blad, steen of schaar?, sla de keuze op in
een variabele genaamd keuzeVanGebruiker.
Roep de functie oneerlijkeBladSteenSchaar op met keuzeVanGebruiker als
parameter.
Extra:
Zorg ervoor dat de functie speelSpel één parameter accepteert, genaamd aantal.
Deze parameter bepaalt het aantal keer dat het codeblok wordt uitgevoerd.
*/

function oneerlijkeBladSteenSchaar(keuzeVanGebruiker){
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

function speelSpel(aantal){
    iteratie = 1
    while (0 < iteratie <= aantal){
        const keuzeVanGebruiker = prompt("blad, steen of schaar? " )
        alert(`Gebruiker: ${keuzeVanGebruiker}, Computer: ${oneerlijkeBladSteenSchaar(keuzeVanGebruiker)},
         de gebruiker wint!}`);
        iteratie++;
    }

    for (let i = 0; i > aantal; i++){
        const keuzeVanGebruiker = prompt("blad, steen of schaar? " )
        alert(`Gebruiker: ${keuzeVanGebruiker}, Computer: ${oneerlijkeBladSteenSchaar(keuzeVanGebruiker)},
         de gebruiker wint!}`);
    }   
}
const aantal = 5
speelSpel(aantal)
