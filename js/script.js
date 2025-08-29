// Primi passi ciclo for


// Ex-1 Stampare dei numeri dispari da 1 a 20


// Definisco il cilo for

for (let i = 1; i <= 20; i++) { // Contatore - condizione - incremento


    if (i % 2 !== 0) { // Definisco l'istruzione condizionale che stampa solo i numeri dispari in console

        console.log(i); // Stampo il valore di i in console

    };

};




// Ex-2 Somma dei numeri da 1 a 100




let ex_two_somma = 0; // Dichiaro variabile somma


for (let i = 1; i <= 100; i++) { // Ciclo for che genera numeri da 1 a 100

    ex_two_somma = ex_two_somma + i; // Aggiungo il valore di i alla somma

};


console.log(`La somma dei numeri da 1 a 100 è : ${ex_two_somma} `); // Stampo il risultato in console





// Ex - 3 Lista di elementi del dom (creazione items ul)

// Dichiarazione delle variabili