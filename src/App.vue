<template>
  <div>
    <ul>
      <li v-for="movie in movies.results" :key="movie.id">
        {{ movie.original_title }}
      </li>
    </ul>
  </div>
  
</template>

<script>
export default {
  // Data is a reactive. Similar to Ref, but allows objects to be returned
  data() {
    return {
      movies: [],
    };
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
