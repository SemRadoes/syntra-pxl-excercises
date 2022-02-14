/*Gebruik de oplossing van Opdracht 2.
Hernoem de functie naar deelbaarDoorN.
Voeg een tweede parameter toe.
Wanneer de functie wordt aangeroepen, zal de tweede parameter het getal
bevatten dat gebruikt wordt bij de gehele deling.*/

function deelbaarDoorN(getal, n){
    let i = 0;
    while (i < getal){
        if(i % n === 0){
            console.log(i)
        }
        i++
    }
}

deelbaarDoorN(50, 3);
deelbaarDoorN(70, 5);