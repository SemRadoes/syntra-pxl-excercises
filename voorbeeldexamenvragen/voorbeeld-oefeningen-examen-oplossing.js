// Oefening 1 - Functies
/*
 * Maak een functie genaamd `som`, deze functie accepteert twee parameters
 * genaamd getal1 en getal2.
 * De functie geeft de som van deze twee parameters terug.
 *
 * Opmerking: Er mag van uitgegaan worden dat er ALTIJD nummers meegegeven worden als parameters.
 */

function som(getal1, getal2) {
  return getal1 + getal2;
}

/*
 * Maak een functie genaamd `verschil`, deze functie accepteert twee parameters
 * genaamd getal1 en getal2.
 * De functie geeft het verschil van deze twee parameters terug.
 *
 * Opmerking: Er mag van uitgegaan worden dat er ALTIJD nummers meegegeven worden als parameters.
 */

function verschil(getal1, getal2) {
  return getal1 - getal2;
}

/*
 * Extra uitdaging: zorg in beide functies dat er gecontroleerd wordt
 * of beide parameters van het type "number" zijn, zo niet, print dan in de
 * console "Beide parameters moeten een nummer zijn!" en geef niks terug.
 */

function som(getal1, getal2) {
  if (typeof getal1 !== "number" || typeof getal2 !== "number") {
    console.log("Beide parameters moeten een nummer zijn!");
    return;
  }
  return getal1 + getal2;
}

function verschil(getal1, getal2) {
  if (typeof getal1 !== "number" || typeof getal2 !== "number") {
    console.log("Beide parameters moeten een nummer zijn!");
    return;
  }
  return getal1 - getal2;
}

// Oefening 2 - Object
/*
 * Maak een object genaamd "rekenmachine".
 * Dit object zal drie properties hebben "eigenaar", "deel", "maal".
 * Ken aan de property "eigenaar" je eigen naam toe als string.
 * Ken aan de parameters "deel" en "maal" een anonieme functie toe die
 * twee parameters accepteert genaamd "getal1" en "getal2".
 * Bij de functie toegekend aan de property "deel" wordt er een
 * deling van getal1 met getal2 teruggegeven.
 * Bij de functie toegekend aan de property "maal" wordt er een
 * vermenigvuldiging van getal1 met getal2 teruggegeven.
 */

const rekenmachine = {
  eigenaar: "Bart",
  maal: (getal1, getal2) => getal1 * getal2,
  deel: (getal1, getal2) => getal1 / getal2,
};

console.log(rekenmachine.maal(3, 4)); // Dit zal 12 uitprinten in de console
console.log(rekenmachine.deel(10, 2)); // Dit zal 5 uitprinten in de console
console.log(rekenmachine.eigenaar); // Dit zal de naam van de eigenaar uitprinten in de console

// Oefening 3 - Array
/*
 * Maak een array met de naam van vijf medecursisten.
 * Itereer met een for-loop over alle namen.
 * Print voor elke naam het volgende uit:
 * "Hallo [naam], jij bent tof!"
 * [naam] zal vervangen worden door de naam van de cursist, bijvoorbeeld "John".
 * "Hallo John, jij bent tof!"
 */

const namen = ["Vanessa", "Sem", "Vincent", "Arne", "Lana"];

for (let i = 0; i < namen.length; i++) {
  const naam = namen[i];
  console.log(`Hallo ${naam}, jij bent tof!`);
}

// Extra oefening
/*
 * Voeg de functies som en verschil toe aan het rekenmachine object.
 * Maak een array genaamd 'rekenmachines', elk element in deze array is één rekenmachine object.
 * Voeg in deze array 5 rekenmachine-objecten, elk met een andere eigenaar (naam van medecursist).
 *
 * Itereer over deze array met een while-loop. Print voor elke rekenmachine de eigenaar uit.
 *
 * Extra: Maak een functie genaamd 'bereken', deze accepteert drie parameters genaamd 'actie', 'getal1' en 'getal2'.
 * In deze functie bereken wordt elke actie altijd uitgevoerd voor elk rekenmachine in de array 'rekenmachines'.
 * Bijvoorbeeld, er zijn 3 rekenmachine-objecten, met de eigenaren "John", "Janine", "Samson".
 *
 * bereken("som", 3, 5); // Dit zal uitprinten:
 * "John zegt dat 3 + 5 gelijk is aan 8."
 * "Janine zegt dat 3 + 5 gelijk is aan 8."
 * "Samson zegt dat 4 + 5 gelijk is aan 8."
 *
 * bereken("maal", 5, 5); // Dit zal uitprinten:
 * "John zegt dat 5 * 5 gelijk is aan 25."
 * "Janine zegt dat 5 * 5 gelijk is aan 25."
 * "Samson zegt dat 5 * 5 gelijk is aan 25."
 */

const rekenmachines = [
  {
    eigenaar: "John",
    maal: (getal1, getal2) => getal1 * getal2,
    deel: (getal1, getal2) => getal1 / getal2,
    som: (getal1, getal2) => getal1 + getal2,
    verschil: (getal1, getal2) => getal1 - getal2,
  },
  {
    eigenaar: "Janine",
    maal: (getal1, getal2) => getal1 * getal2,
    deel: (getal1, getal2) => getal1 / getal2,
    som: (getal1, getal2) => getal1 + getal2,
    verschil: (getal1, getal2) => getal1 - getal2,
  },
  {
    eigenaar: "Samson",
    maal: (getal1, getal2) => getal1 * getal2,
    deel: (getal1, getal2) => getal1 / getal2,
    som: (getal1, getal2) => getal1 + getal2,
    verschil: (getal1, getal2) => getal1 - getal2,
  },
];

let i = 0;

while (i < rekenmachines.length) {
  const rekenmachine = rekenmachines[i];
  console.log(rekenmachine.eigenaar);
  i++;
}

/* Extra */
function bereken(actie, getal1, getal2) {
  for (let i = 0; i < rekenmachines.length; i++) {
    const rekenmachine = rekenmachines[i];

    switch (actie) {
      case "som":
          console.log(`${rekenmachine.eigenaar} zegt dat ${getal1} + ${getal2} gelijk is aan ${rekenmachine.som(getal1, getal2)}`);
          break;
      case "verschil":
          console.log(`${rekenmachine.eigenaar} zegt dat ${getal1} - ${getal2} gelijk is aan ${rekenmachine.verschil(getal1, getal2)}`);
          break;
      case "maal":
          console.log(`${rekenmachine.eigenaar} zegt dat ${getal1} * ${getal2} gelijk is aan ${rekenmachine.maal(getal1, getal2)}`);
          break;
      case "deel":
          console.log(`${rekenmachine.eigenaar} zegt dat ${getal1} / ${getal2} gelijk is aan ${rekenmachine.deel(getal1, getal2)}`);
          break;
    }
  }
}
