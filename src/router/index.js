import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AdminView from '../views/AdminView.vue';
import View404 from '../views/View404.vue';
import ProjetsView from '../views/ProjetsView.vue';



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Home', component: HomeView },
    { path: '/admin', name: 'AdminView', component: AdminView },
    { path: '/projets', name: 'ProjetsView', component: ProjetsView },

    { path: '/:pathMatch(.*)*', name: 'View404', component: View404 },



  ]
})


export default router
