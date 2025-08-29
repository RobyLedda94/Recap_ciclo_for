// Primi passi ciclo for


// Ex - 1 Stampare dei numeri dispari da 1 a 20


// Definisco il cilo for

for (let i = 1; i <= 20; i++) { // Contatore - condizione - incremento


    if (i % 2 !== 0) { // Definisco l'istruzione condizionale che stampa solo i numeri dispari in console

        console.log(i); // Stampo il valore di i in console

    };

};




// Ex - 2 Somma dei numeri da 1 a 100




let ex_two_somma = 0; // Dichiaro variabile somma


for (let i = 1; i <= 100; i++) { // Definisco un ciclo for di 100 iterazioni

    ex_two_somma = ex_two_somma + i; // Aggiungo il valore di i alla somma

};


console.log(`La somma dei numeri da 1 a 100 è : ${ex_two_somma} `); // Stampo il risultato in console





// Ex - 3 Lista di elementi del dom (creazione items ul)

// Dichiarazione delle variabili


let ex_three_ul = document.getElementById('ex-3-ul'); // Ul Ex - 3 



// Debugging  

console.log();



// Logica di visualizazzione



for (let i = 1; i <= 10; i++) { // Definisco un ciclo for di 10 iterazioni


    let ex_trhee_listItems = document.createElement('li'); // Creazione dei list items


    ex_trhee_listItems.innerHTML = `Elemento ${i}` // Inietto il contenuto ai list items


    ex_three_ul.appendChild(ex_trhee_listItems); // appendo i list items creati alla lista Ul


    ex_three_ul.classList.add('bg-darkBlue'); // Class List (ul)


    ex_trhee_listItems.classList.add('p-5px', 'txt-white'); // Class list (li)

};




// Ex - 4 Creazione lista numerica nel DOM, colori i numeri pari di verde e quelli dispari di arancione


// Dichiarazione dell variabili

let ex_four_ul = document.getElementById('ex-4-ul'); // Ul Ex - 4


// Debugging 

console.log(ex_four_ul);


// Logica di visualizazzione

for (let i = 1; i <= 10; i++) { // Definisco un ciclo for di 10 iterazioni

    let ex_four_listItems = document.createElement('li'); // Creazione dei list items


    // Definisco istruzione condizionale per determinare i numeri pari e dispari

    if (i % 2 === 0) {


        ex_four_listItems.innerHTML = `${i} : pari`; // Inietto il contenuto ai listItems

        ex_four_listItems.classList.add('txt-dark-green'); // Class List (li)


    } else {


        ex_four_listItems.innerHTML = `${i} : dispari`; // Inietto il contenuto ai listItems

        ex_four_listItems.classList.add('txt-dark-orange'); // Class list (li)


    };


    ex_four_ul.appendChild(ex_four_listItems); // Appendo i list items creati alla ul nel Dom


    ex_four_ul.classList.add('bg-black'); // classi css (ul)


    ex_four_listItems.classList.add('p-5px'); // classi css (ul)

};



// Ex - 5 Stampare nel DOM la tabellina del 5 


// Dichiarazione delle variabili 


let ex_five_ul = document.getElementById('ex-5-ul'); // Ul Ex - 5



// Debugging



// Logica di visualizazzione 

for (let i = 1; i <= 10; i++) {  // Definisco un ciclo di 10 iterazioni

    console.log(i); // Mostro in console il valore della variabile contatore

    let ex_five_molt = 5 * i; // Moltiplico ogni valore del contatore per 5

    console.log(`5 x ${i} = ${ex_five_molt}`); // Mostro in console l'perazione effettuata e il risultato (template literals)

};











