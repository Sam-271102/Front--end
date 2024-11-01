/**
 * Checks if it is safe to walk a dog based on temperature.
 * @param {number} currentTemp - The current temperature in degrees Celsius.
 * @returns {boolean} - Returns true if the temperature is safe for dog walking, otherwise false.
 */
function checkTemp(currentTemp) {
    return currentTemp <= 30 && currentTemp >= -10;
}

var userInput = prompt("Please enter the current temperature:");
var currentTemp = parseFloat(userInput);

var isSafe = checkTemp(currentTemp);

if (!isSafe) {
    alert("Yikes! This is no weather for dog walking!");
} else {
    alert("You're good, have a nice walk!");
}

