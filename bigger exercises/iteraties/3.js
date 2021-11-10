// Schrijf een programma om het gewicht van een persoon te berekenen op de Maan, Jupiter en Mars. 
// Volgende gegevens worden via het toetsenbord ingevoerd: percentage van het gewicht t.o.v. aarde: Maan 16,5%; Jupiter 253,7 % en Mars 37,8%.

// Aarde: 50
// Maan: 8.25
// Jupiter: 126.85
// Mars: 18.9

// Aarde: 55
// Maan: 9.075000000000001
// Jupiter: 139.535
// Mars: 20.79

// Aarde: 60
// Maan: 9.9
// Jupiter: 152.22
// Mars: 22.68

// ...

// Aarde: 120
// Maan: 19.8
// Jupiter: 304.44
// Mars: 45.36

let aarde = 55;

while(aarde < 121){
    let maan = Math.round((aarde*16.5/100)*100)/100;
    let jupiter = Math.round((aarde*253.7/100)*100)/100;
    let mars = Math.round((aarde*37.8/100)*100)/100;
    console.log(
    `Aarde: ${aarde}
    Maan: ${maan}
    jupiter: ${jupiter}
    mars: ${mars}`);
    aarde += 5;
}