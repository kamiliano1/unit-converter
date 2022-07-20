
const meterFeet = 3.2808399
const feetMetter = 0.3047851264
const literGallon = 0.264172052
const Gallonliter = 3.785411789
const kilogramPound = 2.20462262
const poundKilogram = 0.45359237

const convertButton = document.getElementById("convert-btn")
const convertField = document.getElementById("convert-value")
const convertedLenght = document.getElementById("length-conv")
const convertedVolume = document.getElementById("volume-conv")
const convertedMass = document.getElementById("mass-conv")

convertButton.addEventListener("click", function(){
    let unit = convertField.value
    if (convertField.value >=1){
        let lenghtText = `${unit} meters = ${(unit*meterFeet).toFixed(3)}  feet | ${unit} feet = ${(unit*feetMetter).toFixed(3)} meters`
        let volumeText = `${unit} liters = ${(unit*literGallon).toFixed(3)} gallons | ${unit} gallons = ${(unit*Gallonliter).toFixed(3)} liters`
        let massText = `${unit} kilograms = ${(unit*kilogramPound).toFixed(3)} pounds | ${unit} gallons = ${(unit*poundKilogram).toFixed(3)} pounds`
        convertedLenght.innerText = lenghtText
        convertedVolume.innerText = volumeText
        convertedMass.innerText = massText
    }
})
