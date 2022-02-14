/*Gebruik de oplossing van Opdracht 1.
Maak een functie genaamd deelbaarDoorTien.
De functie accepteert één parameter.
Wanneer de functie wordt aangeroepen, zal de parameter het aantal iteraties
dat gedaan moet worden bevatten.*/

function deelbaarDoorTien(getal){
    let i = 0;
    while (i < getal){
        if(i % 10 === 0){
            console.log(i)
        }
        i++
    }
}

deelbaarDoorTien(50);
deelbaarDoorTien(70);
