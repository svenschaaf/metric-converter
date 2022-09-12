/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const userInput = document.getElementById("user-input")
const convertBtn = document.getElementById("convert-btn")
const lengthEl = document.getElementById("length")
const volumeEl = document.getElementById("volume")
const massEl = document.getElementById("mass")
const error = document.getElementById("error")
let inputValue = true
let lenghFeet = 0
let lengthMeter = 0
let volumeLiter = 0
let volumeGallon = 0
let massKilo = 0
let massPound = 0


userInput.addEventListener("click", function(){
    userInput.value = ""
    error.textContent = ""
})

convertBtn.addEventListener("click", function(){
    if (userInput.value > 999) {
        error.textContent = "Please type in a number < 1000"
    }
        else if (userInput.value < 1) {
            error.textContent = "Please type in a number > 0"
        }
        else {
        render()
    }
})

function render () {
    calcLength ()
    calcVolume ()
    calcMass ()
    lengthEl.textContent = `${userInput.value} meters = ${lengthFeet.toFixed(2)} feet | ${userInput.value} feet = ${lengthMeter.toFixed(2)} meters`
    volumeEl.textContent = `${userInput.value} liters = ${volumeGallon.toFixed(2)} gallons | ${userInput.value} gallons = ${volumeLiter.toFixed(2)} liters`
    massEl.textContent = `${userInput.value} kilos = ${massPound.toFixed(2)} pounds | ${userInput.value} pounds = ${massKilo.toFixed(2)} kilos`
}

function calcLength () {
    lengthFeet = userInput.value * 3.281 
    lengthMeter = userInput.value / 3.281
}


function calcVolume () {
    volumeGallon = userInput.value * 0.264 
    volumeLiter = userInput.value / 0.264
}

function calcMass () {
    massPound = userInput.value * 2.204 
    massKilo = userInput.value / 2.204
}

