import { createRouter, createWebHistory } from "vue-router";
import MovieDetails from "../views/MovieDetails.vue"
import Home from "../views/Home.vue"
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/MovieDetails/:movieId',
            name: 'movieDetails',
            component: MovieDetails,
            props: true
        },
        {
            path: '/',
            name: 'home',
            component: Home,
            props: true
        }
    ]
})

export default router;