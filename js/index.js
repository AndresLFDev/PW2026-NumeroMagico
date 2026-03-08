
const numberInput = document.getElementById('numberInput');
const submitButton = document.getElementById('submitButton');
const historyElement = document.getElementById('history');
const playAgainButton = document.getElementById('playAgainButton');
const darkModeButton = document.getElementById('darkModeButton');

let magicNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let history = [];



playAgainButton.addEventListener('click', () => {
    resetGame();
});

darkModeButton.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
});

numberInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        submitButton.click();
    }
});

submitButton.addEventListener('click', () => {
    if (attempts >= 10) {
        setTimeout(() => {
            Swal.fire({
                title: "Lo siento",
                text: "El número era " + magicNumber + ". Has agotado tus intentos.",
                icon: "error"
            });
        }, 0);
        resetGame();
        return;
    }
    console.log('Botón clickeado');
    const number = numberInput.value;
    numberInput.value = '';
    numberCheck(number);
});

function numberCheck(number) {
    if (number < 1 || number > 100 || number === '') {
        setTimeout(() => {
            Swal.fire({
                title: "Error",
                text: "El número debe estar entre 1 y 100",
                icon: "error"
            });
        }, 0);
        return;
    }
    attempts++;
    console.log("probando");
    if (number == magicNumber) {
        setTimeout(() => {
            Swal.fire({
                title: "Correcto",
                text: "El número era " + magicNumber,
                icon: "success"
            });
        }, 0);
    } else {
        if (number < magicNumber) {
            history.push(attempts + '. El número es mayor que ' + number);
        } else {
            history.push(attempts + '. El número es menor que ' + number);
        }
    }
    showHistory();
}

function showHistory() {
    historyElement.innerHTML = history.join('<br>');
}

function resetGame() {
    magicNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    numberInput.value = '';
    history = [];
    console.log('Juego reiniciado');
    historyElement.innerHTML = '';
}








