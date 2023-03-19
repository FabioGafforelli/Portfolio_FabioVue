import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import View404 from '../views/404View.vue';
import ContactView from '../views/ContactView.vue';

import ListeProjets from '../views/projets/ListeView.vue';
import SkillsView from '../views/SkillsView.vue';
import CoursView from '../views/projets/CoursView.vue';
import CobbleBrosView from '../views/projets/CobbleBrosView.vue';
import BaselHandballView from '../views/projets/BaselHandballView.vue';
import AreneView from '../views/projets/AreneView.vue';
import CoursHoneystView from '../views/projets/CoursHoneystView.vue';
import JaguarView from '../views/projets/JaguarView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Home', component: HomeView },

    { path: '/:pathMatch(.*)*', name: 'View404', component: View404 },

    { path: '/contact', name: 'ContactView', component: ContactView },
   
   
    { path: '/projets', name: 'ListeProjets', component: ListeProjets },
    { path: '/skills', name: 'SkillsView', component: SkillsView },

    { path: '/cours', name: 'CoursView', component: CoursView },
    { path: '/cobblebros', name: 'CobbleBrosView', component: CobbleBrosView },
    { path: '/basel', name: 'BaselHandballView', component: BaselHandballView },
    { path: '/arene', name: 'AreneView', component: AreneView },
    { path: '/cours_wordpress', name: 'CoursHoneystView', component: CoursHoneystView },
    { path: '/jaguar', name: 'JaguarView', component: JaguarView },


  ]
})


export default router
