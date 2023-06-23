<template>
    <div class="body">
      <div class="popular">
        <hero-image category="popular"></hero-image>
      </div>
      <div class="carousels">
      <!-- category is passing these terms down to Movie Service for unique carousels -->
        <carousel category="popular"  category_title="Popular"></carousel>
        <carousel category="upcoming" category_title="Upcoming"></carousel>
        <carousel category="top_rated" category_title="Top Rated"></carousel>  
      </div>
    </div>
  </template>
  
  <script lang="ts">
    import Carousel from '../components/Carousel.vue';
    import HeroImage from '../components/HeroImage.vue';
    // Can't just use: <Carousel />
    export default{
      components: {
        HeroImage,
        Carousel
    }
    }
  </script>
  
  <style scoped>
    .popular{
      padding-top: 1rem;
      padding-left: 8rem;
    }
    .carousels{
      padding-left: 8rem;
      padding-right: 10.5rem;
    }
    .body{
    background-size: 100vw, 100vh;
    padding-bottom: 3rem;
    min-height: 100vh;
  }
  </style>
  