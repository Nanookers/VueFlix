<template>
  <div>
      <a v-for="movie in movies.results" :key="movie.id">
        <img :src="getImageUrl(movie.poster_path)" alt="Movie Image" />
      </a>
  </div> 
</template>

<script lang="ts">

interface Movie {
  id: number;
  original_title: string;
  poster_path: string;
  // Add other properties of a movie
}

const imageUrl = 'https://image.tmdb.org/t/p/w342'

export default {
  // Data is a reactive. Similar to Ref, but allows objects to be returned
  data() {
    return {
      movies: {
        results:[] as Movie[],
      },
    };
  },

  methods: {
    getImageUrl(path: string) {
      // Return the complete image URL based on the path
      return `${imageUrl}/${path}`;
    },
  },

  // Lifecycle hook. Akin to a useEffect hook. 
  async mounted() {
    try {
      const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=194f12722b89b1e87549305ac196085c');
      const data = await response.json();
      // grabs the movies property from above and assigns the data component to it.
      this.movies = data;
      console.log(data)
    } catch (error) {
      console.error('Error in fetching movies:', error);
    }
  },
};
</script>
