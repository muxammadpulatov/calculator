const display = document.getElementById("display");

function appendToDisplay(input) {
    const operationalChars = ['*', '/', '+', '-']

    let lastChar = display.value.at(-1)

    if (input == '.' && !isDotAllowed(display.value) ) {
        return
    }

    if (operationalChars.includes(lastChar) && operationalChars.includes(input)) {
        deleteDisplay()
        display.value += input;
    } else {
        display.value += input;
    }

}

function isNumber(input) {
    return ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(input)
}

function clearDisplay(clear) {
    display.value = "";

}

function calculate() {
    try {
        display.value = eval(display.value);
    }
    catch (error) {
        display.value = "Error";
    }

}

function deleteDisplay() {
    display.value = display.value.slice(0, -1);
}


function isDotAllowed(fullDisplay) {
    if(fullDisplay == '')
        return false;
    
    let dotCount = fullDisplay.split(/[*/+-]/)?.filter(a => a.length)?.at(-1)?.split('.').length - 1

    
    if (isNaN(dotCount) || dotCount > 0) {
        return false
    }
    return true
}


