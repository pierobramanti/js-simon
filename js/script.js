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
numbersElement.innerHTML = numbers


// Creo una funzione per generare i cinque numeri casuali
function numberGenerator() {
    while (numbers.length < 5) {
        let numb = Math.floor(Math.random() * 100) + 1;

        if (!numbers.includes(numb)) {
            numbers.push(numb);
        }
    }
}


