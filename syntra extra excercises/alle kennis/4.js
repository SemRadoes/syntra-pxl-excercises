// const naam = "John Duck";
// if (naam === "John Duck") {
// console.log("Hallo John Duck");
// } else if (naam === "Janine Duck") {
// console.log("Hallo Janine Duck");
// } else {
// console.log("Hallo vreemdeling");
// }
// Schrijf bovenstaande code om naar een switch.

const naam = "John Duck";
switch(naam){
    case "John Duck":
        console.log("Hallo John Duck");
        break;
    case "Janine Duck":
        console.log("Hallo Janine Duck");
        break;
    default:
        console.log("Hallo vreemdeling");
}