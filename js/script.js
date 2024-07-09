const numbers = [];

// Creo un array vuoto dove inserire i numeri dell'utente
const userNumbers = [];

console.log(numbers);

// Genero i numeri casuali
numberGenerator();

// Stampo l'array di numeri generati
console.log(numbers);

const numbersElement = document.getElementById('numbers');

// Aggiorno il contenuto dell'elemento <p> con i numeri generati
numbersElement.innerHTML = numbers.join(', ');

// Imposto un timer per far sparire i numeri
setTimeout(function(){
    numbersElement.innerHTML = ''; // Rimuove il contenuto dell'elemento <p>
}, 30000);

// Imposto un timer per chiedere all'utente di inserire 5 numeri dopo 30 secondi
setTimeout(function() {
    insertNumbers();
}, 30000);

// Creo una funzione per generare i cinque numeri casuali
function numberGenerator() {
    while (numbers.length < 5) {
        let numb = Math.floor(Math.random() * 100) + 1;

        if (!numbers.includes(numb)) {
            numbers.push(numb);
        }
    }
}

// Creo una funzione per chiedere all'utente di inserire 5 numeri
function insertNumbers() {
    while (userNumbers.length < 5) {
        let userNumber = parseInt(prompt('Inserisci qui i numeri uno alla volta'));
        
        // Controllo se il numero inserito è valido
        if (!isNaN(userNumber)) {
            userNumbers.push(userNumber);
        } else {
            alert('Per favore, inserisci un numero valido.');
        }
    }

    // Stampo l'array di numeri inseriti dall'utente per verifica
    console.log(userNumbers);
}

// Rimuovo la chiamata diretta a `insertNumbers`
// insertNumbers();

// Stampo l'array di numeri inseriti dall'utente per verifica
console.log(userNumbers);
