/*Initialiseer een variabele genaamd calculator en ken er een object aan toe met de
volgende properties:
som, met als waarde een anonieme functie die twee parameters accepteert.
Geef de som van de twee parameters terug als resultaat van de functie.
verschil, met als waarde een anonieme functie die twee parameters
accepteert. Geef het verschil van de twee parameters terug als resultaat van
de functie.
Ken een extra property toe aan de variabele calculator:
vermenigvuldigen, met als waarde een anonieme functie die twee parameters
accepteert. Geef de vermenigvuldiging van de twee parameters terug als
resultaat van de functie.
Ken een extra property toe aan de variabele calculator:
delen, met als waarde een anonieme functie die twee parameters accepteert.
Geef de deling van de twee parameters terug als resultaat van de functie.
Maak gebruik van het object in de variabele calculator om onderstaande
berekeningen te doen en print het resultaat er van uit:
2 + 3
128 * 2
1414 - 707
355 / 113
*/

const calculator = {
    som : (getal1, getal2) => { return getal1 + getal2;},
    vermenigvuldigen : (getal1, getal2) => { return getal1 * getal2;},
    delen: (getal1, getal2) => { return getal1/getal2;},
    verschil: (getal1, getal2) => { return getal1 - getal2;}
}

console.log(`2 + 3 = ${calculator.som(2, 3)}`);
console.log(`128 * 2 = ${calculator.vermenigvuldigen(128, 2)}`);
console.log(`1414 - 707 = ${calculator.verschil(1414, 707)}`);
console.log(`355 / 113 = ${calculator.delen(355, 113)}`);
console.log();

const som1Verm2 = 2;
const som2 = 3;
const verm1 = 128;
const verschil1 = 1414;
const verschil2 = 707;
const delen1 = 355;
const delen2 = 113;

console.log(`${som1Verm2} + ${som2} = ${calculator.som(som1Verm2, som2)}`);
console.log(`${verm1} * ${som1Verm2} = ${calculator.vermenigvuldigen(verm1, som1Verm2)}`);
console.log(`${verschil1} - ${verschil2} = ${calculator.verschil(verschil1, verschil2)}`);
console.log(`${delen1} / ${delen2} = ${calculator.delen(delen1, delen2)}`);