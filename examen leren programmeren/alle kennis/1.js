const cursisten = [
    {
    spreek: () => {
    console.log("Bart is cool!");
    },
    naam: "Angelique",
    score: 0,
    },
    {
    spreek: () => {
    console.log("Bart is hip!");
    },
    naam: "Arne",
    score: 0,
    },
    {
    spreek: () => {
    console.log("Bart is de beste!");
    },
    naam: "Domenico",
    score: 0,
    },
    {
    spreek: () => {
    console.log("Bart is hilarisch!");
    },
    naam: "Ian",
    score: 0,
    },
    {
    spreek: () => {
    console.log("Bart is grappig!");
    },
    naam: "Jochen",
    score: 0,
    },
    {
    spreek: () => {
    console.log("Bart is funny!");
    },
    naam: "Jorg",
    score: 0,
    },
    {
    spreek: () => {
    console.log("Bart is stoer!");
    },
    naam: "Marco",
    score: 0,
    },
    {
    spreek: () => {
    console.log("Bart is zo cool!");
    },
    naam: "Marvi",
    score: 0,
    },
    {
    spreek: () => {
    console.log("Bart is zo hip!");
    },
    naam: "Michelle",
    score: 0,
    },
    {
    spreek: () => {
    console.log("Bart is zo hilarisch!");
    },
    naam: "Romy",
    score: 0,
    },
    {
    spreek: () => {
    console.log("Bart is zo grappig!");
    },
    naam: "Simone",
    score: 0,
    },
    {
    spreek: () => {
    console.log("Bart is zo funny!");
    },
    naam: "Tony",
    score: 0,
    },
    {
    spreek: () => {
    console.log("Bart is zo stoer!");
    },
    naam: "Yoeri",
    score: 0,
    },
    ];
    const docent = {
    spreek: (eersteDeel) => {
    return `${eersteDeel} cool, hip, hilarisch, grappig, funny en stoer!`;
    },
    naam: "Bart",
    };
    
    function hackDeScore() {
    /*
    * Hier wordt gebruikgemaakt van de globaal gedefinieerde variabele `cursisten`.
    *
    * Gebruik iteratie (een WHILE loop) om de score van alle cursisten te
    * wijzigen naar 69.
    */
        let index = 0;
        while(index < cursisten.length){
            cursisten[index].score = 69;
            index++;
        }
    }
    function printInformatieCursisten(alleCursisten) {
    /*
    * Hier wordt gebruikgemaakt van de parameter alleCursisten, NIET van de
    * globaal gedefinieerde variabele `cursisten`.
    
    *
    * Gebruik iteratie (een FOR loop) om van elke student uit te printen:
    * 'Mijn naam is: HIER_DE_NAAM'
    * 'Mijn score is: HIER_DE_SCORE'
    *
    * Vervang HIER_DE_NAAM door de property 'naam' van de cursist.
    * Vervang HIER_DE_SCORE door de property 'score' van de cursist.
    *
    * Roep de functie `spreek` aan van elke cursist zodat de mening over de
    * docent uitgeprint wordt.
    */
        for(object of alleCursisten){
            console.log(`Mijn naam is: ${object.naam}`);
            console.log(`Mijn score is: ${object.score}`);
            object.spreek();
        }   
    }
    function printMeningDocent(mening) {
    /*
    * Roep de functie 'spreek' van het object genaamd 'docent' aan met de
    * parameter 'mening' van deze functie.
    * Geef het resultaat van de functie 'spreek' terug als resultaat van deze functie.
    */
        return docent.spreek(mening);
    }
    /*
    * Pas onderstaande code NIET aan.
    * Indien alle bovenstaande code goed is geïmplementeerd en alle code wordt in
    * één JavaScript-bestand (of snippet) geplaatst.
    * Dan zal het uitvoeren van de code zorgen voor het resultaat dat terug te
    * zien is bij 'verwachte uitkomst'.
    */
    hackDeScore();
    printInformatieCursisten(cursisten);
    console.log(`Docent zegt: ${printMeningDocent("Alle curisten zijn")}`);
    