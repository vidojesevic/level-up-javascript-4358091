// Write your code here
class Movie {
    constructor(title, director, genre, releaseYear, rating) {
        this.title = title;
        this.director = director;
        this.genre = genre;
        this.releaseYear = releaseYear;
        this.rating = rating;
    }
    getOverview() {
        return "Movie " + this.title + ", a " + this.genre + " film directed by " + this.director + " was released in " + this.releaseYear + ". It received a rating od " + this.rating + "/10."; 
    }
}

const movie = new Movie('Pulp Fiction', 'Quentin Tarantino', 'Drama', 1994, 8.9);
console.log(movie.getOverview());

const guardians = new Movie('Guardians of the Galaxy', 'James Gunn', 'Action', 2014, 8);
console.log(guardians.getOverview());
