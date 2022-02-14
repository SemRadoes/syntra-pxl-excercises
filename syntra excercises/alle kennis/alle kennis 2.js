/*
Definieer een functie genaamd vraagInfoAanGebruiker.
Kopieer de code uit Opdracht 1 en plak deze in de body van de functie.
Ken twee parameters toe aan de functie, genaamd vraagVoornaam en
vraagAchternaam.
Indien vraagVoornaam de waarde false bevat, wordt er niet naar de voornaam
gevraagd.
Indien vraagAchternaam de waarde false bevat, wordt er niet naar de achternaam
gevraagd.
Indien er een voornaam of een achternaam gekend is, toon de alert uit Opdracht 1.
Indien ze beide niet gekend zijn, console.log "Niks om te tonen!".
*/

const vraagInfoAanGebruiker = (vraagVoornaam, vraagAchternaam) => {
    if (vraagVoornaam === false && vraagAchternaam){
        vraagAchternaam = prompt("wat is je achternaam? ");
        
    } else if (vraagAchternaam === false && vraagVoornaam){
        vraagVoornaam = prompt("wat is je voornaam? ");
        
    } else if (vraagAchternaam || vraagVoornaam) {
        vraagVoornaam = prompt("wat is je voornaam? ");
        vraagAchternaam = prompt("wat is je achternaam? ");
        alert(`${vraagVoornaam} ${vraagAchternaam}`);
    } else {
        alert("niks om te tonen");
    }
}

vraagInfoAanGebruiker(true, false);
// Dit zou maar één prompt moeten tonen, die van de voornaam.
vraagInfoAanGebruiker(false, true);
// Dit zou maar één prompt moeten tonen, die van de achternaam.
vraagInfoAanGebruiker(true, true);
// Dit zou maar twee prompts moeten tonen, die van de voornaam én achternaam.
vraagInfoAanGebruiker(false, false);
// Dit zou géén prompts moeten tonen.