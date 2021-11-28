const PromptSync = require("prompt-sync");
const prompt = PromptSync();


function berekenBasisscore(naam){
    let basisscore = 0;
    woord = "cinema"
    positie = 1

    for (letter of naam){
        if (woord.indexOf(letter)){
            basisscore += naam.charCodeAt(letter) * positie;
        }
        positie++; 
    return basisscore;
    }
}

let naam = prompt("wat is jouw naam? ");
let hoogsteScore = 0;
let winnaar;
while (naam !== "xxx" && naam !== "qqq"){
    const geboortejaar = 1992 //parseInt(prompt("Wat is jouw geboortejaar? "));
    const bezoekPerMaand = 3 //parseInt(prompt("Hoe vaak per maand breng je een bezoek aan kinepolis?: 1 = weinig, 2 = matig, 3 = veel: "));
    const versnapering = "C" //parseInt(prompt("Welke versnapering nuttig je in kinepolis: P = popcorn, C = chips, N = niets: "));

    const basisscore = berekenBasisscore(naam);
    let score = basisscore
    if (bezoekPerMaand === 1){
        score /= 2;
    } else if ( bezoekPerMaand === 2){
        score *= 2;
    } else {
        score *= 3;
    }
    if (versnapering === "N" && bezoekPerMaand === 1 || bezoekPerMaand === 2){
        score -= 1050;
    }

    if (score > hoogsteScore){
        hoogsteScore = score;
        winnaar = naam;
    }

    console.log(`naam: ${naam}, basisscore = ${basisscore}`);
    naam = prompt("wat is jouw naam? ");
}
console.log(`${winnaar} : Jij hebt gewonnen!`);
console.log(`jouw score is: ${hoogsteScore}`);

let randomGetal = Math.floor(1000 + Math.random() * 9000);

while (randomGetal % 10 === 0 || (randomGetal < 5000 && randomGetal % 2 !=0)){
    randomGetal = Math.floor(1000 + Math.random() * 9000);
}

let prijs = 0;
for (cijfer of randomGetal.toString()){
    prijs += parseInt(cijfer);
}
console.log(`Het random gegenereerd getal is ${randomGetal}`);
console.log(`${winnaar}, jij wint ${prijs} filmtickets.`);
