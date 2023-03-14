import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AdminView from '../views/AdminView.vue';
import View404 from '../views/404View.vue';

import ListeProjets from '../views/projets/ListeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Home', component: HomeView },
    { path: '/admin', name: 'AdminView', component: AdminView },

    { path: '/:pathMatch(.*)*', name: 'View404', component: View404 },

    { path: '/projets', name: 'ListeProjets', component: ListeProjets },


  ]
})


export default router
