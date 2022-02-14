// Vertrek vanuit de oplossing van Opdracht 1.
// De functie genaamd doortellen accepteert twee parameters:
// De eerste parameter blijft gelijk aan Opdracht 1.
// De tweede parameter noemt printOneven.
// Indien de parameter printOneven de waarde true bevat, dan worden enkel de
// printOneven getallen uitgeprint tijdens het doortellen.
// Indien de parameter printOneven de waarde false bevat, dan worden enkel de
// even getallen uitgeprint tijdens het doortellen.

function doorTellen(getal, printOneven){
    let getallen = "";
    if(getal < 100){
        while(getal < 100){
            getal++;
            if(printOneven){
                if(getal % 2 !== 0){
                    getallen += getal + " ";
                } 
            } else {
                if(getal % 2 === 0) {
                    getallen += getal + " ";
                }
            }
        }
        console.log(getallen);
    } else {
        console.log("HeT getal is 100 of meer!");
    }
}

doorTellen(89, true);
// De volgende getallen worden uitgeprint:
// 91 93 95 97 99
doorTellen(89, false);
// De volgende getalle worden uitgeprint:
// 90 92 94 96 98 100