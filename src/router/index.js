import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AdminView from '../views/AdminView.vue';
import View404 from '../views/404View.vue';

import CreateProjets from '../views/projets/CreateView.vue';
import UpdateProjets from '../views/projets/UpdateView.vue';
import DeleteProjets from '../views/projets/DeleteView.vue';
import ListeProjets from '../views/projets/ListeView.vue';
import idprojet from  '../views/projets/[id].vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Home', component: HomeView },
    { path: '/admin', name: 'AdminView', component: AdminView },

    { path: '/:pathMatch(.*)*', name: 'View404', component: View404 },

    { path: '/projets', name: 'ListeProjets', component: ListeProjets },
    { path: '/projet/:id', name: 'idprojet', component: idprojet },
    { path: '/createProjet', name: 'CreateProjets', component: CreateProjets  },
    { path: '/updateProjets/:id', name: 'UpdateProjets', component: UpdateProjets },
    { path: '/deleteProjets/:id', name: 'DeleteProjets', component: DeleteProjets },


  ]
})


export default router
