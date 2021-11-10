// Indien Opdracht 2 opgelost is met een switch, herschrijf het met if else if else. 
// Opdracht 2 opgelost is met een if else if else, herschrijf het met switch.

function uitlegBijTypeVanParameterTs(parameter?: any): void {

    switch( typeof parameter){
        case "boolean":
            console.log("De mogelijke waarden zijn false en true");
            break;
        case "number":
            console.log("Mogelijke waarden zijn 1, 69, 3.141592");
            break;
        case "string":
            console.log("Mogelijke waarden zijn 'a', 'Bart', '3'");
            break;
        case "object":
            console.log("Mogelijke waarden zijn [1, 2], {naam 'Bart'}, null");
            break;
        case "undefined":
            console.log("De waarde is undefined");
            break;
        case "function":
            console.log("De waarde is een functie, bv function hihi() {}");  
            break; 
        default:
            console.log("Geen informatie over dit type!");
    }
}

uitlegBijTypeVanParameterTs(5);
uitlegBijTypeVanParameterTs(true);
uitlegBijTypeVanParameterTs("yey");
uitlegBijTypeVanParameterTs(["lalala"]);
uitlegBijTypeVanParameterTs();
uitlegBijTypeVanParameterTs(function easy(){});
uitlegBijTypeVanParameterTs(null);