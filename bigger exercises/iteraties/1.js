// Geef het gewicht van een appel (in gram) in via het toetsenbord. 
// Maak een tabel om het gewicht van 1 tot 100 appels af te drukken als volgt:

// 1 appel(s) = 165 gr.
// 2 appel(s) = 330 gr.
// 3 appel(s) = 495 gr.
// 4 appel(s) = 660 gr.
// ...
// 99 appel(s) = 16335 gr.
// 100 appel(s) = 16500 gr.
// Maak deze opgave eerste via een for, vervolgens via een while. Welk is de betere oplossing?

let gewichtAppel = 0;
for (let i = 0; i < 100; i++){
    gewichtAppel += 165;
    console.log(`${i+1} appels(s) = ${gewichtAppel} gr.`);
}