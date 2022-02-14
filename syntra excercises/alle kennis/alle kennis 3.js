/*
Fibonacci-nummers werken alsvolgt:
1e nummer is een 1
2e nummer is een 1
3e nummer is de som van 1e en 2e nummer
4e nummer is de som van 2e en 3e nummer
5e nummer is de som van 3e en 4e nummer
...
Definieer een functie berekenFibonacci.
Ken één parameter toe aan deze functie, genaamd aantalNummers.
Verwachte output staat in commentaar achter elke regel:
berekenFibonacci(1); // 1
berekenFibonacci(2); // 1 1
berekenFibonacci(5); // 1 1 2 3 5
berekenFibonacci(10); // 1 1 2 3 5 8 13 21 34 55
Wat is het honderste getal in de Fibonacci-reeks?
*/

function berekenFibonacci(aantalNummers){
    let n1 = 0;
    let n2 = 1;
    let volgendeGetal;

    console.log('Fibonacci Series:');

    for (let i = 1; i <= aantalNummers; i++) {
        console.log(n1);
        volgendeGetal = n1 + n2;
        n1 = n2;
        n2 = volgendeGetal;
    }
}

berekenFibonacci(100);