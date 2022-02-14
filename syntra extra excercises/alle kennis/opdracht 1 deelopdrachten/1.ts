let totaal3 = 0;
for (let i = 0; i < 10; i++) {
    totaal3 += i; // Zelfde als: totaal = totaal + i;
    console.log("totaal is nu: ", totaal3);
}
// Herschrijf bovenstaande code met een while loop i.p.v. een for loop.

let totaal4 = 0;
let i2 = 0;

while( i2 < 10){
    i2++;
    console.log(`totaal is nu: ${totaal4}`);
    totaal4 += i2;
}