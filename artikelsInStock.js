const ps = require("prompt-sync");
const prompt = ps();

const artikels = [
    "S-kaftE34-5-100",
    "S-DVD345-1-124",
    "A-penD34-125",
    "S-boekX33-3-256",
    "A-bal34-145",
    "S-boekZ34-2-26",
    "A-ballon34-15"
];

function checkAArtikelen(artikels){
    
    let aArtikelen = [];

    for ( let artikel of artikels){
        const artikeldelen = artikel.split("-");

        const typeArtikel = artikeldelen[0];
        const naamArtikel = artikeldelen[1];

        const aantal = prompt(`geef het aantal artikels in voorraad van het artikel ${artikel} `);

        if (typeArtikel === "A"){

            const aantalLaatsteTelling = parseInt(artikeldelen[2]);

            while (aantal > aantalLaatsteTelling){
                console.log("Foute ingave! Zoveel artikels kunnen niet in voorraad zijn");

                aantal = prompt(`Opnieuw: Geef het aantal artikels in voorraad van het artikel ${artikel}`);
            }
            if (aantal >= 1){
                aArtikelen.push(`${typeArtikel}-${naamArtikel}-${aantal}`);
            }
        }
    }
    return aArtikelen;
}

function checkSArtikelen(artikels){
    let sArtikelen = [];
    for ( let artikel of artikels){
        const artikeldelen = artikel.split("-");

        const typeArtikel = artikeldelen[0];
        const naamArtikel = artikeldelen[1];

        const aantal = prompt(`geef het aantal artikels in voorraad van het artikel ${artikel} `);

        
        if (typeArtikel == "S"){
            const aantalPerBestelling = parseInt(artikeldelen[2]);
            const minimumAantalInStock = parseInt(artikeldelen[3]);

            if (aantal < minimumAantalInStock){

                const aantalBijTeBestellen = minimumAantalInStock - aantal;

                if (aantalBijTeBestellen % aantalPerBestelling != 0){

                    const aantalBestellingen = (aantalBijTeBestellen / aantalPerBestelling) + 1;

                    aantalBijTeBestellen = aantalBestellingen * aantalPerBestelling;
                }
                sArtikelen.push([artikel, aantalBijTeBestellen]);
            }
        }
    }
    return sArtikelen;
}

function printSArtikelen(sArtikelen){
    console.log("Lijst van de bij te bestellen producten");

    for (let artikel of sArtikelen){
        for(let aantalBijTeBestellen of sArtikelen)
        console.log(`Product ${artikel} te bestellen: ${aantalBijTeBestellen} stuks`);
    }
}

function printAArtikelen(aArtikelen){
    console.log("Lijst van de actie artikelen");

    for (let artikel of aArtikelen){
        console.log(artikel);
    }
}
const sArtikelen, aArtikelen = checkArtikelen(artikels);

print();
printSArtikelen(sArtikelen);

print();
printAArtikelen(aArtikelen);