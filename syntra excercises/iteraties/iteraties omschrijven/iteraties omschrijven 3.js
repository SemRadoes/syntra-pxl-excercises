for (let i = 9; i > 0; i--) {
    console.log("Voor: ", i);
    i--;
    console.log("Na: ", i);
    if (i === 8) {
    break;
    }
}

//for loop geinit
// beginwaarde 9, eindwaarde 0, stap = 1
// elke iteratie wordt er uitgeprint wat de waarde van "i" was voor de loop
// dan wordt i in vermindering gebracht met 1
// daarna de waarde van "i" afgedrukt na de loop
// als de waarde van "i" 8 bereikt, dan breekt de loop