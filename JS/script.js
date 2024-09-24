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