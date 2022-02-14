let teller = 0;
function som(getal1, getal2) {
teller = teller + 1;
return getal1 + getal2;
}
teller = teller + 1;
som(5, 5);
som(5, "5");
teller = teller + 1;

/* de variabele teller wordt geinitialiseerd en krijgt de waarde 0 toegekend. Het type is number. */
/* de funstie som wordt aangemaakt met 2 parameters. 
Binnen deze functie wordt de waarde van variabele teller verhoogd met 1 
en de som van de twee parameters terugegeven */
/* de variabele teller wordt opnieuw verhoogd met 1. */
/* De functie som wordt uitgevoerd met 2 x nummer 5 als parameter. 
De functie geeft de som van 5 + 5 terug en verhoogd de waarde van teller met 1 maar doet er verder niets meer mee waardoor de waarde verloren gaat.
/* De functie som wordt uitgevoerd met nummer 5 en string 5 als parameter. 
De functie geeft de som van stringen 5 + 5 terug en verhoogd de waarde van teller met 1 
maar doet er verder niets meer mee waardoor de waarde verloren gaat. */
/* de waarde van teller wordt verhoogd met 1. De waarde van teller is nu 2 */
