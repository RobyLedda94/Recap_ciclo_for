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


    ex_three_ul.classList.add('bg-darkBlue', 'txt-white'); // Class List (ul)


    ex_trhee_listItems.classList.add('p-5px'); // Class list (li)

};




// Ex - 4 Creazione lista numerica nel DOM, colori i numeri pari di verde e quelli dispari di arancione


// Dichiarazione dell variabili

let ex_four_ul = document.getElementById('ex-4-ul'); // Ul Ex - 4


// Debugging 

console.log();


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


    let ex_five_molt = 5 * i; // Moltiplico ogni valore del contatore per 5


    let ex_five_listItems = document.createElement('li'); // Creazione dei list items


    ex_five_listItems.innerHTML = `5 x ${i} = ${ex_five_molt}` // Inietto l'oerazione effettuata e il risultato (template literals) ai list items


    ex_five_ul.appendChild(ex_five_listItems); // Appendo i list items alla ul


    ex_five_ul.classList.add('bg-darkBlue', 'txt-white'); // Classi css (ul)


    ex_five_listItems.classList.add('p-5px'); // Classi css (li)

};




// Ex - 6 Contatore click sul pulsante


// Dichiarazione delle variabili


const ex_six_btnCount = document.getElementById('ex-6-btn-count'); // Bottone count


const ex_six_btnReset = document.getElementById('ex-6-btn-reset'); // Bottone reset


let ex_six_countMsg = document.getElementById('ex-6-count-msg'); // Elemento htlm msg


let count = 0;  // Variabile che tiene traccia dei click al bottone


// Debugging

console.log();



// Gestione evento start

ex_six_btnCount.addEventListener('click', function () {

    count++; // Ogni volta che eseguo un click incremento


});



// Gestione evento reset

ex_six_btnReset.addEventListener('click', function () {

    console.log(ex_six_btnReset);

});














