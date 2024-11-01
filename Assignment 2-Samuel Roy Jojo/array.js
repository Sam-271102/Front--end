var movie1 = "Fight Club";
var movie2 = "Shutter Island";
var movie3 = "Se7en";
var movie4 = "Prisoners";
var movie5 = "The Prestige";
var movie6 = "The Hangover";
var movie7 = "The Amtyville Horror";

var movies = [movie1, movie2, movie3, movie4, movie5, movie6, movie7];

function askUser() {
    var isValid = false;

    while (!isValid) {

        var userInput = prompt("Which top 7 movie would you like?\nPick a number: 1-7");

        var movieNumber = (userInput);

        if (movieNumber >= 1 && movieNumber <= 7) {

            alert("Number " + movieNumber + " on the list is \"" + movies[movieNumber - 1] + "\"");
            isValid = true;
        } else {

            alert("Please enter a number between 1 and 7!");
        }
    }

    for (var i = 0; i < movies.length; i++) {
        console.log("Movie " + (i + 1) + ": " + movies[i]);
    }
}
