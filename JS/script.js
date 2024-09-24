let resultDisplayed = false;

function appendToDisplay(value) {
    let display = document.getElementById('display');

    if (resultDisplayed) {
        if (!isNaN(value)) {
            display.value = value;
        } else {
            display.value += value;
        }
        resultDisplayed = false;
    } else {
        display.value += value;
    }
}

function clearDisplay() {
    document.getElementById('display').value = '';
    resultDisplayed = false;
}

function deleteChar() {
    let display = document.getElementById('display').value;
    document.getElementById('display').value = display.slice(0, -1);
}

function calculate() {
    let display = document.getElementById('display').value;
    try {
        document.getElementById('display').value = eval(display);
        resultDisplayed = true;
    } catch {
        document.getElementById('display').value = 'Erro';
        resultDisplayed = true;
    }
}