import { watch } from "fs";

export class AccountDetails{
    private baseUrl: string;

    constructor(){
        // Hard coded for the time being. 
        this.baseUrl =  'https://api.themoviedb.org/3/account/19425264?'
    }

    async fetchAccountDetails(){
        try{
            const url = `${this.baseUrl}`
            const options = {
                method: 'GET',
                headers: {
                  accept: 'application/json',
                  Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOTRmMTI3MjJiODliMWU4NzU0OTMwNWFjMTk2MDg1YyIsInN1YiI6IjY0NWQxZWMwZmUwNzdhNWNhYWUxNTViMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9kwPOWwAM_KC4vBnDRsnOCx0f8x6GkgApQNk6pE8tHA'
                }
            };
            const response = await fetch(url, options);
            const data = response.json();
            return data
        }catch (error){
            console.error('Error in getting user info:', error)
            return [];
        }
    }
}