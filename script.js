let number = Math.floor((Math.random() * 100) + 1);
let output = document.getElementById('result')
let guesses = []

function myFunction() {
    var inputfield = document.getElementById('inputfield').value
    displayresult(inputfield)
    showguess(inputfield)
    showhistory()

}

function displayresult(inputfield) {
    if (inputfield > number) {
        showAboveNum()

    }
    else if (inputfield < number) {
        showbelowNum()
    }
    else {
        showYouWon()
    }
}


function getDialog(dialogtype, text) {
    let dialog;
    switch (dialogtype) {
        case "warning":
            dialog = "<div class='result1' role='alert' height: 30px; width: 400px;>"
            break
        case "won":
            dialog = "<div class='result1'  height: 30px; width: 400px; role='alert'>"
            break
    }

    dialog += text
    dialog += "</div>"
    return dialog
}


function showYouWon() {
    let text = "Your are Corret:)"

    let dialog = getDialog('won', text);

    output.innerHTML = dialog
    output.style.backgroundColor = "green"
}

function showAboveNum() {
    let text = "Your guess are too high"

    let dialog = getDialog('warning', text);

    output.innerHTML = dialog
    output.style.backgroundColor = "red"
}

function showbelowNum() {
    let text = "Your guess are too low"

    let dialog = getDialog('warning', text);

    output.innerHTML = dialog
    output.style.backgroundColor = "#E5D478"
}

function showguess(guess) {
    guesses.push(guess);
}

function showhistory() {
    let index = guesses.length - 1
    let list = "<ul>"
    while (index >= 0) {
        list += "<li> " + "Your Guress is " + guesses[index] + "</li>"
        index -= 1
    }
    list += "</ul>"
    document.getElementById('history').innerHTML = list

}

function initGame() {
    number = Math.floor((Math.random() * 100) + 1);
    document.getElementById('inputfield').value = ""
    output.innerHTML = ""
    output.style.backgroundColor = ""
    document.getElementById('inputfield').innerHTML = ""
    guesses = []
    showhistory()
}