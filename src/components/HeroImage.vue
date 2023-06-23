<template>
  <h1>Top Trending Movie</h1>
    <div>
      <img :src="getImageUrl(movies.results.file_path)" 
        alt="Movie Image" height="722" @click="getMovieId(movies.results)" />
    </div>
</template>
  
<script lang="ts">
  import { MovieDetail } from './types/type';
  import { MovieHero } from '../models/MovieHero';
  import { MovieHeroImage } from '../models/MovieHero';

  export default {

    props: {
      category: {
        type: String,
        required: true,
      },
    },

    data() {
      return {
        movies: {
          results: [] as MovieDetail[0],
        }
      };
    },

    methods: {
      getImageUrl(movie: MovieDetail){
          // console.log(movie);
          const imageUrl: string = `https://image.tmdb.org/t/p/original/${movie}`
          console.log(`${imageUrl}`);
          return imageUrl;
      },
      getMovieId(movieId: string) {
        console.log(movieId);
      // this.$router.push({ name: 'movieDetails', params: { movieId } });
      }
    },

    async mounted() {
      try {

        // Find the list of trending movies
        const movieHeroImage = new MovieHero();
        const moviesData = await movieHeroImage.fetchMovies();
        this.movies.results = moviesData.results;
        console.log(this.movies.results[0]);
        // Calling the id of the top rated movie
        const movieId = new MovieHeroImage()
        const heroImage = await movieId.fetchMovie(moviesData.results[0].id)
        console.log(heroImage)
        const foundImage = heroImage.backdrops.find((image: { iso_639_1: string }) => image.iso_639_1 === 'en')
        this.movies.results = foundImage
        console.log(foundImage);
      } catch (error) {
        console.error('Error in fetching movies:', error);
      }
    },
  };
  </script>
  
  <style scoped>
  h1{
    color: rgb(255, 255, 255);
  }
  </style>
  