const resultaat = typeof {} && typeof [];
let i = 0;
do {
console.log(i);
i++;
} while (resultaat);

// variabele resultaat word geinit met types undefined
//variabele i word geinit met types number en waarde 0
// dowhile loop wordt geinit 
// de waarde van "i" wordt geprint.
// i word vermeerderd met 1.
// loop blijft doorlopen zolang resultaat 'true is'
// infinite loop