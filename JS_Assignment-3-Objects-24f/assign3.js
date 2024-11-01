var movie = {
    director: "Christopher Nolan",
    title: "Inception",
    year: 2010,
    genre: "Science Fiction",

    updateYear: function(newYear) {
        this.year = newYear;
        alert(`Updated year to: ${this.year}`);
    }
};

console.log("Initial Movie Object:", movie);

var newTitle = prompt(`Current Title: ${movie.title}\nEnter any Christopher Nolan's film title:`);
if (newTitle) {
    movie.title = newTitle;
}

var newGenre = prompt(`Current Genre: ${movie.genre}\nEnter a new genre:`);
if (newGenre) {
    movie.genre = newGenre;
}

var newYear = prompt(`Current Year: ${movie.year}\nEnter a new year:`);
if (newYear) {
    movie.updateYear(newYear);
}

console.log("Updated Movie Object:", movie);

