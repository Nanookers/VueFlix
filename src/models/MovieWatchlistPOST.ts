export class AddMovieToWatchList{
    private baseUrl: string;
    constructor() {
        this.baseUrl = 'https://api.themoviedb.org/3/account'
    }

    async addMovie( user:string ){
        try{
            const url = `${this.baseUrl}/${ user }/watchlist`
            const options = {
                method: 'POST',
                headers: {
                  accept: 'application/json',
                    'content-type': 'application/json',
                  Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOTRmMTI3MjJiODliMWU4NzU0OTMwNWFjMTk2MDg1YyIsInN1YiI6IjY0NWQxZWMwZmUwNzdhNWNhYWUxNTViMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9kwPOWwAM_KC4vBnDRsnOCx0f8x6GkgApQNk6pE8tHA'
                }
              };
            const response = await fetch (url, options);
            const data = response.json();
            return data;
        }catch (error){
            console.error('Error in adding to Watchlist:', error)
        }
    }
}