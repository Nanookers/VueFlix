  <template>  
    <div class="app">
      <div class="fade-effect"></div>
      <div class="imageCard">
        <img :src="getImageUrl(movie?.backdrop_path)" />
      </div>
      <div class="titleCard">
        <div class="titletagline">
          <h1 class="title">{{ movie?.title }}</h1>
          <div class="userScore">
            <p>User Score: {{ movie?.vote_average.toFixed(1) }}/10 </p>
          </div>  
          <p class="overview">{{ movie?.overview }}</p>
        </div>
      </div>
    </div>
  </template>

  <script lang="ts">
  import { SingleMovie } from '../models/SingleMovie';
  import { MovieDetail } from '../types/type';

  export default {
    props: ['movieId'],
    data() {
      return {
        // Can hold a null value or MovieDetail
        movie: null as MovieDetail | null,
      };
    },
    methods: {
        getImageUrl(path: string) {
          const imageUrl: string = 'https://image.tmdb.org/t/p/w1280';
          return `${imageUrl}/${path}`;
        },
        getPoster(path: string) {
          const imageUrl: string = 'https://image.tmdb.org/t/p/w185';
          return `${imageUrl}/${path}`;
        }
      },
    async mounted() {
      console.log('Received movieId:', this.movieId);
      const grabSingle = new SingleMovie();
      const movieData = await grabSingle.fetchMovie(this.movieId);
      console.log(movieData);
      this.movie = movieData;
  ;
    },
  };
  </script>

<style scoped>
  .app{
    padding-top: 2rem;
  }
  .fade-effect {
    position: absolute;
    width: 90%;
    height: 720px;
    right: 0;
    background: linear-gradient(to right,  black 10%, transparent 40%);
  }
  .imageCard{
    padding-left: 10rem;
  }
  .overview, .userScore{
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    max-width: 40ch;
    margin: 0;
  }
  .overview{
    line-height: 1.4;
  }
  .titleCard{
    display: flex;
    top: 70%;
    transform: translateY(-170%);
    color: rgb(251, 246, 239);
    padding-left: 8rem;
  }
  .title{
    font-weight:bolder;  
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    text-shadow: 3px 3px 3px #000000;
    max-width: 20ch;
  }
  .titletagline{
    padding: 10px;
  }
</style>
