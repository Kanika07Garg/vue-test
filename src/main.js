import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { createRouter, createWebHistory } from 'vue-router';

import MovieDetails from './components/MovieDetails';
import MainContainer from './components/MainContainer';

const routes = [
    { path: '/', component: MainContainer },

    //dynamic Routing
    { path: '/movie/:id', component: MovieDetails,  props: {
        header: true,
        content: true
     }, },
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  const app = createApp(App);
  app.use(router).mount('#app');