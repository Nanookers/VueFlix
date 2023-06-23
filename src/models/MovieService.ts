export class MovieService{
    private baseUrl: string;
    // Constructor is a method that is used to set the initial state. Don't use it 
    // To handle asynchronous actions. 
    constructor (){
        this.baseUrl = 'https://api.themoviedb.org/3/movie'
    }

    async fetchMovies( category:string ) {
        try{
            const url = `${this.baseUrl}/${category}/?`
            const response = await fetch(url);
            const data = response.json();
            return data;
        } catch (error) {
          console.error('Error in fetching movies:', error);
          return [];
        }
    }
}