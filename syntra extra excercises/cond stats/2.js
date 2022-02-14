// Definieer een functie genaamd uitlegBijTypeVanParameter.
// De functie accepteert één typeof parameter genaamd typeof parameter
// Controleer het type van de typeof parameter indien het type:
// "boolean" is, dan print uit "De mogelijke waarden zijn: false en true"
// "number" is, dan print uit "Mogelijke waarden zijn: 1, 69, 3.141592"
// "string" is, dan print uit "Mogelijke waarden zijn: 'a', 'Bart', '3'"
// "object" is, dan print uit "Mogelijke waarden zijn: [1, 2], {naam: 'Bart'}, null"
// "undefined" is, dan print uit "De waarde is: undefined"
// "function" is, dan print uit "De waarde is een functie, bv: function hihi() {}"
// Indien het type niet gekend is, dan wordt er uitgeprint "Geen informatie over dit type!".

function uitlegBijTypeVanParameter(parameter){
    if (typeof parameter === "boolean" ){
        console.log("De mogelijke waarden zijn: false en true");
    } else if (typeof parameter === "number"){
        console.log("Mogelijke waarden zijn: 1, 69, 3.141592");
    } else if (typeof parameter === "string"){
        console.log("Mogelijke waarden zijn: 'a', 'Bart', '3'");
    } else if (typeof parameter === "object"){
        console.log("Mogelijke waarden zijn: [1, 2], {naam: 'Bart'}, null");
    } else if (typeof parameter === "undefined") {
        console.log("De waarde is: undefined");
    } else if(typeof parameter === "function") {
        console.log("De waarde is een functie, bv: function hihi() {}");   
    } else {
        console.log("Geen informatie over dit type!");
    }
}

uitlegBijTypeVanParameter(5);
uitlegBijTypeVanParameter(true);
uitlegBijTypeVanParameter("yey");
uitlegBijTypeVanParameter(["lalala"]);
uitlegBijTypeVanParameter();
uitlegBijTypeVanParameter(function easy(){});
uitlegBijTypeVanParameter(null);
