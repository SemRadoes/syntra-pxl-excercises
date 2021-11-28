// Tel hoe vaak iedere letter voorkomt in een string (zonder verschil te maken tussen hoofd- en kleine letters). 
// Je mag ieder teken dat geen letter is negeren. Print de letters met het aantal malen dat ze voorkomen. 
// Print de letter wel enkel af indien de letter voorkomt in de oorspronkelijke tekst.

const string = "rgarahathgffghrthEFGJaRTHRJZR545e5r4g9ath8a9r4h9ar4hgaerhg4ath4";
const alfabet = "abcdefghijklmnopqrstuvwxyz";
let tellerObject = {};

for ( let letter of string){
    for (let occurence of alfabet){
        if(letter.toLowerCase() === occurence){
            for ( let property of Object.keys(tellerObject))
                if(property !== letter){
                    tellerObject[letter]++;
                } else {
                    tellerObject[`${occurence}`] = occurence;
                }
            
        }
    // console.log(`${letter}: ${count}`);      
    }
}
 
console.log(tellerObject);