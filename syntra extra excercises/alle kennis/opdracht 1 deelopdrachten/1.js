let totaal1 = 0;
for (let i = 0; i < 10; i++) {
    totaal1 += i; // Zelfde als: totaal = totaal + i;
    console.log("totaal is nu: ", totaal1);
}
// Herschrijf bovenstaande code met een while loop i.p.v. een for loop.

let totaal2 = 0;
let i = 0;

while( i < 10){
    i++;
    console.log(`totaal is nu: ${totaal2}`);
    totaal2 += i;
}