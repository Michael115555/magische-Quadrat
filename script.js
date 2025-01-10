var n = 3;
var m = 3;

Matrix = [
    [8, 1, 6],
    [3, 5, 7],
    [4, 9, 2]
];

// Funktion zur Berechnung der Summe jeder Zeile
function row_sum(Matrix) {
    var rowSum = 0;
    var sumMatrix = 0;
    var isMagic = true;

    console.log("\nFinde die Summe jeder Zeile:");

    // Berechnung der Summe jeder Zeile
    for (var i = 0; i < m; ++i) {
        rowSum = 0;
        for (var j = 0; j < n; ++j) {
            // Addiere das Element der aktuellen Zeile
            rowSum += Matrix[i][j];
        }

        // Zeilen-Summe ausgeben
        console.log("Summe der Zeile " + (i + 1) + " = " + rowSum);

        // Vergleiche mit der ersten Zeile
        if (i === 0) {
            sumMatrix = rowSum; // Die Summe der ersten Zeile ist die Referenz
        } else if (rowSum !== sumMatrix) {
            isMagic = false; // Wenn eine Zeilen-Summe nicht der gleichen Summe entspricht, ist es kein magisches Quadrat
            break;
        }
    }

    // Überprüfen der Spalten
    if (isMagic) {
        for (var j = 0; j < n; ++j) {
            var colSum = 0;
            for (var i = 0; i < m; ++i) {
                colSum += Matrix[i][j];
            }
            if (colSum !== sumMatrix) {
                isMagic = false;
                break;
            }
        }
    }

    // Überprüfen der Diagonalen
    if (isMagic) {
        var diag1Sum = 0, diag2Sum = 0;
        for (var i = 0; i < n; ++i) {
            diag1Sum += Matrix[i][i];
            diag2Sum += Matrix[i][n - 1 - i];
        }

        if (diag1Sum !== sumMatrix || diag2Sum !== sumMatrix) {
            isMagic = false;
        }
    }

    // Ergebnis ausgeben
    if (isMagic) {
        console.log("Das Quadrat ist magisch!");
    } else {
        console.log("Das Quadrat ist nicht magisch.");
    }
}

row_sum(Matrix);

var n = 3;  // Größe der Matrix

// Ausgangsmatrix
var Matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Funktion, um die Matrix um 90 Grad zu drehen
function rotateMatrix(Matrix) {
    // Die Matrix in-place drehen, indem wir die Elemente verschieben
    for (var i = 0; i < n / 2; i++) {
        for (var j = i; j < n - i - 1; j++) {
            var temp = Matrix[i][j];
            Matrix[i][j] = Matrix[n - j - 1][i];
            Matrix[n - j - 1][i] = Matrix[n - i - 1][n - j - 1];
            Matrix[n - i - 1][n - j - 1] = Matrix[j][n - i - 1];
            Matrix[j][n - i - 1] = temp;
        }
    }
    // Matrix ausgeben
    console.log("Drehung der Matrix um 90 Grad:");
    for (var i = 0; i < n; i++) {
        console.log(Matrix[i]);
    }
}

console.log("Originale Matrix:");
for (var i = 0; i < n; i++) {
    console.log(Matrix[i]);
}

rotateMatrix(Matrix);