import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import View404 from '../views/404View.vue';

import ListeProjets from '../views/projets/ListeView.vue';
import CoursView from '../views/projets/CoursView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Home', component: HomeView },

    { path: '/:pathMatch(.*)*', name: 'View404', component: View404 },

    { path: '/projets', name: 'ListeProjets', component: ListeProjets },
    { path: '/cours', name: 'CoursView', component: CoursView },


  ]
})


export default router
