/*Maak een functie genaamd gewerveldeDierenCategorie. De functie accepteert één
parameter (een string). Maak gebruik van een switch-statement.
Parameter: "Kikker" "Salamander" "Wormsalamander" Resultaat: "Amfibie"
Parameter: "Hagedis" "Slang" "Krokodil" "Schildpad" Resultaat: "Reptiel"
Parameter: "Aal" "Kabeljauw" "Forel" Resultaat: "Vis"
Parameter: "Kanarie" "Merel" "Valk" Resultaat: "Vogel"
Parameter: "Dolfijn" "Walvis" "Vogelbekdier" "Mens" Resultaat: "Zoogdier"*/

function gewerveldeDierenCategorie(parameter){
    let result;
    switch(parameter){
        case "kikker":
        case "Salamander":
        case "Wormsalamander":
            result = "amfibie";
            break;
        case "Hagedis":
        case "Slang":
        case "Krokodil":
        case "Schildpad":
            result = "Reptiel";
            Break;
        case "Aal":
        case "Kabeljauw":
        case "Forel":
            result = "vis";
            Break;
        case "Kanarie":
        case "Merel":
        case "Valk":
            result = "Vogel";
            Break;
        case "Dolfijn":
        case "Walvis":
        case "Vogelbekdier":
        case "Mens":
            result = "zoogdier";
            Break;
    }
    return result;
}

gewerveldeDierenCategorie("Salamander")


