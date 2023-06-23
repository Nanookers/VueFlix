export class SingleMovie{
    private baseUrl: string;

    constructor(){
        this.baseUrl = 'https://api.themoviedb.org/3/movie'
    }

    async fetchMovie( id: string ) {
        try{
            const url = `${this.baseUrl}/${id}?`;
            const response = await fetch(url);
            const data = response.json();
            return data;
        } catch (error){
            console.error('Error in fetching movies:', error)
            return [];
        }
    }
}