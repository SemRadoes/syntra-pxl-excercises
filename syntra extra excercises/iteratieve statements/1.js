// Definieer een funcTie genaamd doorTellen.
// De funcTie accepTeerT één paramaTer geTal.
// Indien heT geTal groTer is dan 100 of gelijk is aan 100, prinT uiT "HeT geTal is 100 of
// meer!".
// Indien heT geTal kleiner is dan 100, laaT de funcTie dan doorTellen ToT 100.

// Voorbeelden:
// doorTellen(100); // "HeT geTal is 100 of meer!" wordT uiTgeprinT
// doorTellen(98); // De volgende geTallen worden uiTgeprinT: 99 100
// doorTellen(89);
// // De volgende geTallen worden uiTgeprinT:
// // 90 91 92 93 94 95 96 97 98 99 100

function doorTellen(geTal){
    let getallen = "";
    if(geTal < 100){
        while(geTal <100){
            geTal++;
            getallen += geTal + " ";
        }
        console.log(getallen);
    } else {
        console.log("HeT geTal is 100 of meer!");
    }
}

doorTellen(100); // "HeT geTal is 100 of meer!" wordT uiTgeprinT
doorTellen(98); // De volgende geTallen worden uiTgeprinT: 99 100
doorTellen(89);