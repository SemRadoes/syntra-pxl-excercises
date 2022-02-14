const ps = require("prompt-sync");
const prompt = ps();
// const tb = require('text-table');
// const table = tb();

const autos = [
    {
        Merk: "Volkswagen",Type: "Passat", aantalDeuren: 5, pk: 120, kleur: "groen", prijs: 20970
    },
    {
        Merk: "Renault", Type: "Kadjar", aantalDeuren: 5, pk: 138, kleur: "blauw metallic", prijs: 17990
    },
    {
        Merk: "Peugeot", Type: "208", aantalDeuren: 5, pk: 82, kleur: "grijs metallic", prijs: 11990
    },
    {
        Merk: "BMW", Type: "I3", aantalDeuren: 5, pk: 168, kleur: "wit", prijs: 25990
    },
    {
        Merk: "Opel", Type: "Corsa", aantalDeuren: 5, pk: 74, kleur: "grijs", prijs: 5250
    },
    {
        Merk: "Opel", Type: "Mokka", aantalDeuren: 5, pk: 114, kleur: "zwart", prijs: 11950
    },
    {
        Merk: "Audi", Type: "A5", aantalDeuren: 5, pk: 170, kleur: "zilver", prijs: 40900
    },
    {
        Merk: "Ford", Type: "Focus", aantalDeuren: 5, pk: 123, kleur: "wit", prijs: 15290
    },
    {
        Merk: "Ford", Type: "Fiesta", aantalDeuren: 5, pk: 80, kleur: "blauw", prijs: 8500
    },
    {
        Merk: "Volkswagen", Type: "Polo", aantalDeuren: 5, pk: 115, kleur: "rood", prijs: 16990
    },
    {
        Merk: "Volkswagen", Type: "Golf", aantalDeuren: 3, pk: 110, kleur: "zwart", prijs: 22490
    },
    {
        Merk: "Renault", Type: "Twingo", aantalDeuren: 3, pk: 74, kleur: "zilver metallic", prijs: 3850 
    },
    {
        Merk: "Peugeot", Type: "508", aantalDeuren: 5, pk: 178, kleur: "zilver", prijs: 14125
    },
    {
        Merk: "BMW", Type: "X1", aantalDeuren: 5, pk: 138, kleur: "wit metallic", prijs: 32990
    }
];

function bereken_prijs(auto){
    let prijs = auto.prijs;
    const aantalDeuren = auto.aantalDeuren;
    const pk = auto.pk;
    if (aantalDeuren === 3){
        prijs -= 1000;
    }

    if (pk > 90 && pk <= 110){
        prijs += 700;
    } else if (pk <= 140){
        prijs += 950;
    } else {
        prijs += 1250;
    }

    const kleur = auto.kleur;
    if (kleur.includes("metallic")){
        prijs += 900;
    }
    return prijs;
}

function genereerLijst(autos){
    const randomAutos = [];
    const gebruikteIndexes = [];
    for (let i = 0; i < 4; i++){
        let index = Math.floor(Math.random() * autos.length);
        while (index in gebruikteIndexes){
             index = Math.floor(Math.random() * autos.length);
        }
        gebruikteIndexes.push(index);
        randomAutos.push(autos[index]);
    }
    return randomAutos;
}

const randomAutos = genereerLijst(autos);
const gekochteWagens = [];
let totaalPrijs = 0;
let totaalAantalWagens = 0;

for (const auto of randomAutos){
    console.log(auto);
    let question = prompt("Wil je deze wagen kopen? (j/n): ", "geen keuze gemaakt!");
    if (question === "j"){
        totaalPrijs += bereken_prijs(auto);
        totaalAantalWagens += 1;
        gekochteWagens.push(auto);
    
    console.log();
    }
}

// console.table([["Merk", `${gekochteWagens[0][0]}`,`${gekochteWagens[1][0]}`,`${gekochteWagens[2][0]}`,`${gekochteWagens[3][0]}`],
//                 ["Type", `${gekochteWagens[0][1]}`, `${gekochteWagens[1][1]}`, `${gekochteWagens[2][1]}`, `${gekochteWagens[3][1]}`],
//                 ["#deuren", `${gekochteWagens[0][2]}`, `${gekochteWagens[1][2]}`, `${gekochteWagens[2][2]}`, `${gekochteWagens[3][2]}`],
//                 ["#pk", `${gekochteWagens[0][3]}`, `${gekochteWagens[1][3]}`, `${gekochteWagens[2][3]}`, `${gekochteWagens[3][3]}`],
//                 ["Kleur", `${gekochteWagens[0][4]}`, `${gekochteWagens[1][4]}`, `${gekochteWagens[2][4]}`, `${gekochteWagens[3][4]}`],
//                 ["Prijs", `${gekochteWagens[0][5]}`, `${gekochteWagens[1][5]}`, `${gekochteWagens[2][5]}`, `${gekochteWagens[3][5]}`]]);
console.log(`Merk\t\tType\t\t#deuren\t\t#pk\tKleur\t\tPrijs`);
// console.log("Merk".padStart(14) + "Type".padStart(9) + "#deuren".padStart(14) + "#PK".padStart(6) + "Kleur".padStart(7) + "Prijs".padStart(10));

for (const auto of gekochteWagens){
    // console.log(auto[0].padStart(14) + auto[1].padStart(9) + auto[2].padStart(14) + auto[3].padStart(6) + auto[4].padStart(7) + auto[5].padStart(10));
    console.log(`${auto.Merk}\t\t${auto.Type}\t\t${auto.aantalDeuren}\t${auto.pk}\t${auto.kleur}\t${auto.prijs}`);
}

// const t = table([
//     [ `${gekochteWagens[0][0]}`, `${gekochteWagens[0][1]}`, `${gekochteWagens[0][2]}`, `${gekochteWagens[0][3]}`, `${gekochteWagens[0][4]}`, `${gekochteWagens[0][5]}` ],
//     [ `${gekochteWagens[1][0]}`, `${gekochteWagens[1][1]}`, `${gekochteWagens[1][2]}`, `${gekochteWagens[1][3]}`, `${gekochteWagens[1][4]}`, `${gekochteWagens[1][5]}` ],
//     [ `${gekochteWagens[2][0]}`, `${gekochteWagens[2][1]}`, `${gekochteWagens[2][2]}`, `${gekochteWagens[2][3]}`, `${gekochteWagens[2][4]}`, `${gekochteWagens[2][5]}` ],
//     [ `${gekochteWagens[3][0]}`, `${gekochteWagens[3][1]}`, `${gekochteWagens[3][2]}`, `${gekochteWagens[3][3]}`, `${gekochteWagens[3][4]}`, `${gekochteWagens[3][5]}` ],
// ],{ align: [ 'l' ] });

console.log();
// console.log(t);
console.log(`De wagens kosten in het totaal: ${totaalPrijs}`);
console.log(`De gemiddelde prijs van de aangekocht wagens is: ${Math.floor(totaalPrijs/totaalAantalWagens)}`);