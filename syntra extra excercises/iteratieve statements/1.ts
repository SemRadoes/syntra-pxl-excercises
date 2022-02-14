// Definieer een functie genaamd doortellen.
// De functie accepteert één paramater getal.
// Indien het getal groter is dan 100 of gelijk is aan 100, print uit "Het getal is 100 of
// meer!".
// Indien het getal kleiner is dan 100, laat de functie dan doortellen tot 100.

// Voorbeelden:
// doortellen(100); // "Het getal is 100 of meer!" wordt uitgeprint
// doortellen(98); // De volgende getallen worden uitgeprint: 99 100
// doortellen(89);
// // De volgende getallen worden uitgeprint:
// // 90 91 92 93 94 95 96 97 98 99 100

function doortellen(getal){
    let getallen = "";
    if(getal < 100){
        while(getal <100){
            getal++;
            getallen += getal + " ";
        }
        console.log(getallen);
    } else {
        console.log("Het getal is 100 of meer!");
    }
}

doortellen(100); // "Het getal is 100 of meer!" wordt uitgeprint
doortellen(98); // De volgende getallen worden uitgeprint: 99 100
doortellen(89);