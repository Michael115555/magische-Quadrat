n = 5;
myArray = [0,1]; 

function getFibonacciNumber(n) {
    // Initialisiere das Array mit den ersten beiden Fibonacci-Zahlen
    let myArray = [0, 1]; 

    // Sonderfälle für n = 1 oder n = 2
    if (n === 1) {
        return [0]; // Nur die erste Fibonacci-Zahl
    }
    if (n === 2) {
        return myArray; // Die ersten zwei Fibonacci-Zahlen
    }

    // Berechne die Fibonacci-Zahlen für n > 2
    for (let i = 2; i < n; ++i) {
        let firstNumber = myArray[myArray.length - 2];
        let lastNumber = myArray[myArray.length - 1];
        myArray.push(firstNumber + lastNumber);
    }

    return myArray;
}

// Beispielaufruf:
let result = getFibonacciNumber(3);
console.log(result); // Gibt [0, 1, 1, 2, 3] aus