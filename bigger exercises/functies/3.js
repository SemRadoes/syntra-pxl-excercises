/*Schrijf een programma om het lidgeld voor een tennisclub te berekenen. 
Voor elk lid worden volgende gegevens via het toetsenbord ingevoerd: 
naam, leeftijd, aantal kinderen ten laste, inkomen en het aansluitingsjaar. 
De invoer eindigt wanneer voor de naam X of x wordt ingegeven.

Per lid moet de naam en het lidgeld afgedrukt worden. Het lidgeld wordt als volgt berekend:

normaal aanvangsgeld 100 € per jaar;
leden ouder dan 60 jaar: een vermindering van 15 €;
leden met kinderen een vermindering van 7.5 € per kind met een maximum van 35 €;
leden die meer dan 20 jaar lid zijn een vermindering van 12.5 €;
leden met een inkomen kleiner dan 7500 € per jaar een vermindering van 25 €.
De verminderingen mogen gecumuleerd worden maar het minimum lidgeld is 50 €. De berekening van het lidgeld gebeurt in een functie.*/

const PromptSync = require("prompt-sync");
const prompt = PromptSync();

let leden = [];
let lid = {};

let naam = prompt("naam: ");
while(naam !== "X" && naam !== "x"){
    const leeftijd = parseInt(prompt("leeftijd: "));
    const kinderenTenLaste = parseInt(prompt("kinderen ten laste: "));
    const inkomen = parseInt(prompt("inkomen(jaarlijks): "));
    const aansluitingsjaar = parseInt(prompt("aansluitingsjaar: "));
    lid.naam = naam;
    lid.leeftijd = leeftijd;
    lid.kinderenTenLaste = kinderenTenLaste;
    lid.inkomen = inkomen;
    lid.aansluitingsjaar = aansluitingsjaar;
    leden.push(lid);
    naam = prompt("naam: ");
}
for( lid of leden){
    console.log(lid);
}

let Lidgeld = (leeftijd, kinderenTenLaste, aansluitingsjaar, inkomen) => {
    let berekenLidgeld = 100;
    if(leeftijd > 60){
        berekenLidgeld -= 15;
    }
    if(kinderenTenLaste >=1){
        const korting = 7.5 * kinderenTenLaste;
        if (korting > 35){
            berekenLidgeld -= 35;
        } else {
            berekenLidgeld -= korting;
        }
    }
    if(new Date().getFullYear() - aansluitingsjaar > 20){
        berekenLidgeld -= 12.5;
    }
    if(inkomen < 7500){
        berekenLidgeld -= 25;
    }
    if(berekenLidgeld < 50){
        berekenLidgeld = 50;
    }
    return berekenLidgeld;
}

for(lid of leden){
    console.log(`naam: ${lid.naam}
                lidgeld: ${Lidgeld}`);
}