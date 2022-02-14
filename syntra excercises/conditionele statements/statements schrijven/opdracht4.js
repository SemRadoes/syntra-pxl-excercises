/*In Finland is het puntensysteem anders dan in België. In Finland worden testen beoordeeld
op 5.
0/5 is gelijk aan een 0/100 in België. 1/5 is gelijk aan een 50/100 in België. 5/5 is gelijk aan
een 100/100 in België.
2, 3 en 4 op 5 zijn gelijk aan een waarde tussen 50 en 100 in België.
Schrijf een functie genaamd convertScore die één parameter accepteert. De parameter is
de score in België. De functie print uit wat de score in Finland is.*/

function convertScore(parameter){
if(parameter == 100){
    console.log("5/5");
} else if (parameter >= 50 && parameter <= 100){
    console.log("1,2,3of4 op 5");
} else {
Console.log("0/5");
}
}
