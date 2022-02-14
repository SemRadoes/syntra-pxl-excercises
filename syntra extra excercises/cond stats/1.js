// const voornaam = "Bart".toLowerCase();
// console.log(voornaam); // "bart"
// const achternaam = "DuIsTeRs".toLowerCase();
// console.log(achternaam); // "duisters"
// Maak een functie genaamd kleineLetters.
// De functie accepteert één parameter, genaamd tekst.
// Als de parameter bestaat uit alleen kleine letters, geef true terug.
// Als de parameter niet bestaat uit alleen kleine letters, geef false terug.
// Verwacht resultaat:
// console.log(kleinLetters("bart")); // true
// console.log(kleinLetters("Bart")); // false
// console.log(kleinLetters("BaRt")); // false

const kleinLetters = (tekst) => {
    if (tekst === tekst.toLowerCase()){
        return true;
    } else {
        return false;
    }
}

console.log(kleinLetters("bart")); // true
console.log(kleinLetters("Bart")); // false
console.log(kleinLetters("BaRt")); // false