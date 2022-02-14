// Vorm onderstaande code om naar een switch-statement.
const docent = "Bart";
if (docent === "Mark") {
console.log(`Hallo Mark!`);
} else if (docent === "John") {
console.log(`Hallo John!`);
} else if (docent === "Bart") {
console.log(`Hallo Bart!`);
} else {
console.log(`Hallo vreemdeling!`);
}

switch("Bart"){
    case "Mark":
        console.log("Hallo Mark!");
        break;
    case "John":
        console.log("Hallo John!");
        break;
    case "Bart":
        console.log("Hallo Bart!");
        break;
    default:
        console.log("Hallo vreemdeling!");
}