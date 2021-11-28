// Creëer een list met 500 elementen waarbij de elementen willekeurige gehele getallen zijn tussen 0 en 10000 (beiden inclusief).
// Als er minder dan de helft (250 elementen) van de getallen groter zijn dan 5000,
// dan tel je alle elementen van de list die groter zijn dan 5000 op en druk het resultaat van deze optelling af.
// Als er 250 of meer getallen groter zijn dan 5000, 
// dan tel je alle elementen van de list die groter zijn dan 8000 op en drukt dit resultaat af.

let randomList = [];
let listGroterDan5000 = [];
let somGroterDan5000 = 0;
let somGroterDan8000 = 0;

for( let i = 0; i < 500; i++){
    const min = Math.floor(1);
    const max = Math.floor(10001);
    const randomNum = Math.floor(Math.random() * (max - min) + min);
    randomList.push(randomNum);
}

for (getal of randomList){
    if(getal > 5000){
        listGroterDan5000.push(getal);
    }
}

if(listGroterDan5000.length < 250){
    for(getal of listGroterDan5000){
        somGroterDan5000 += getal;
    }
    console.log(somGroterDan5000);
} else {
    for( getal of listGroterDan5000){
        if(getal > 8000){
            somGroterDan8000 += getal;
        }
    }
    console.log(somGroterDan8000);
}