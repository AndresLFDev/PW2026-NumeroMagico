
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
    const number = numberInput.value;
    numberInput.value = '';
    numberCheck(number);
});

function numberCheck(number) {
    if (number < 1 || number > 100 || number === '') {
        setTimeout(() => {
            Swal.fire({
                title: "Error",
                text: "The number must be between 1 and 100",
                icon: "error"
            });
        }, 0);
        return;
    }
    attempts++;
    if (number == magicNumber) {
        setTimeout(() => {
            Swal.fire({
                title: "Correct",
                text: "The number was " + magicNumber,
                icon: "success"
            });
        }, 0);
    } else {
        if (number < magicNumber) {
            history.push(attempts + '. The number is greater than ' + number);
        } else {
            history.push(attempts + '. The number is less than ' + number);
        }
    }
    if (attempts >= 10) {
        setTimeout(() => {
            Swal.fire({
                title: "Sorry",
                text: "The number was " + magicNumber + ". You have run out of attempts.",
                icon: "error"
            });
        }, 0);
        resetGame();
        return;
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
    historyElement.innerHTML = '';
}








