// Je krijgt de opdracht van een tv-zender om een programma te schrijven om de punten te
// berekenen voor het programma “Komen eten”.
// Het programma start met de ingave van de namen van de deelnemers.
// De gebruiker van het programma geeft alle voornamen van de deelnemers in, gescheiden door
// een “,”.
// Vervolgens kunnen de punten voor de deelnemers worden ingegeven.
// Eerst worden de punten voor de eerste deelnemer ingegeven. Iedere andere deelnemer geeft
// een punt voor SFEER en een punt voor ETEN. Er wordt steeds een punt van 0 tot 10 (incl.)
// gegeven. Controleer de ingevoerde waarde. Indien een ingegeven waarde niet correct is, vraag
// je om de waarde opnieuw in te geven. Nadat alle deelnemers hun punten voor de eerste
// deelnemer hebben ingegeven, worden de punten voor de tweede deelnemer ingegeven, daarna
// voor de derde,…
// Als alle punten zijn ingegeven wordt voor iedere deelnemer zijn totaal behaalde punten
// afgedrukt en wordt de voornaam van de winnaar afgedrukt in hoofdletters. 

const PromptSync = require("prompt-sync");
const prompt = PromptSync();

const deelnemers = prompt("geef de namen van de deelnemers in gescheiden door een komma");
