export class MovieHero{
    private baseUrl: string;
    // Constructor is a method that is used to set the initial state. Don't use it 
    // To handle asynchronous actions. 
    constructor (){
        this.baseUrl = 'https://api.themoviedb.org/3/trending/movie/day?'
    }

    async fetchMovies( ) {
        try{
            const response = await fetch(this.baseUrl);
            const data = response.json();
            return data;
        } catch (error) {
          console.error('Error in fetching movies:', error);
          return [];
        }
    }

}

export class MovieHeroImage {
    private baseUrl: string;

    constructor() {
        this.baseUrl = 'https://api.themoviedb.org/3/movie';
    }

    async fetchMovie(movie: string) {
        try {
            const response = await fetch(`${this.baseUrl}/${movie}/images?`);
            const data = await response.json(); // Await the JSON data
            return data;
        } catch (error) {
            console.error('Error in fetching movie:', error);
            return null;
        }
    }
}
