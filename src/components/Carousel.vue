<template>
  <h2>{{category_title}}</h2>
    <div class="carouselWrapper">
      <a v-for="movie in movies.results" :key="movie.id" class="carouselItem">
        <div class="singlePoster">
          <img :src="getImageUrl(movie.poster_path)" alt="Movie Image" @click="getMovieId(movie.id)"/>
        </div>
      </a>
    </div>
  
  </template>
  
  <script lang="ts">
  // The type for what we are looping through
  import { Movie } from './types/type';
  import { MovieService } from '../models/MovieService';
  
  export default {
    // This will allow me to pass 
    props: {
        category:{
            type: String,
            required: true
        },
        category_title:{
          type: String,
          required: true
        }
    },
    // Data is a reactive. Similar to Ref, but allows objects to be returned
    data() {
      return {
        movies: {
          results:[] as Movie[],
        },
      };
    },
    // This is traditionally used with v-on methods (like click). Methods gives easy reusability 
    // for the code.
    methods: {
      getImageUrl(path: string) {
        const imageUrl: string = 'https://image.tmdb.org/t/p/w185';
        return `${imageUrl}/${path}`;
      },
      getMovieId(movieId: string) {
        this.$router.push({ name: 'movieDetails', params: { movieId } });
      }
    },
    // Lifecycle hook. Akin to a useEffect hook. 
    async mounted() {
       try{
        // Just like C#, you create New from existing class
        const movieService = new MovieService();
        // This grabs the fetchMovies function from inside the class, and you pass the prop
        // through the category
        const moviesData = await movieService.fetchMovies(this.category)
        // Populates the data.movies.results with the GET
        this.movies.results = moviesData.results;
        console.log(moviesData.results); 
       }catch (error) {
        console.error('Error in fetching movies:', error);
       }
    },
  }
  </script>
  
  <style scoped>
  /* I'll need to style the h2 */
  h2{
    color: rgb(252, 252, 252);
  }
  .carouselWrapper {
    overflow-x: auto; /* Enable horizontal scrolling */
    display: flex; /* Use flexbox for layout */
  }
  
  .carouselItem {
    flex: 0 0 auto; /* Prevent items from stretching to fill the width */
    margin-right: 10 px; 
  }
  
  .singlePoster {
    width: 200px; /* Set the width of each item */
    position: relative;
    display: inline-block;  
  }

  .carouselItem:hover{
    transition: transform 0.2s;
    transform: scale(1.1);
    cursor: pointer;
  }
  /* Hide horizontal scrollbar */
  .carouselWrapper::-webkit-scrollbar {
    display: none;
  }
  </style>
  