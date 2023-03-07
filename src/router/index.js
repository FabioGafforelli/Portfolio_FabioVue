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
    { path: '/createProjet', name: 'CreateProjets', component: CreateProjets, beforeEnter: guard  },
    { path: '/updateProjets/:id', name: 'UpdateProjets', component: UpdateProjets, beforeEnter: guard },
    { path: '/deleteProjets/:id', name: 'DeleteProjets', component: DeleteProjets, beforeEnter: guard },


  ]
})


function guard(to, from, next) {
  getAuth().onAuthStateChanged(function (user) {
    if (user) {
      console.log('router OK => user ', user);
      const firestore = getFirestore();
      const dbUsers = collection(firestore, "users");
      const q = query(dbUsers, where("uid", "==", user.uid));
      onSnapshot(q, (snapshot) => {
        let userInfo = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        let isAdmin = userInfo[0].admin;
        if (isAdmin) {
          next(to.params.name);
          return;
        } else {
          alert("Vous n'avez pas l'autorisation pour cette fonction");
          next({ name: "HomeView" });
          return;
        }
      })
    } else {
      console.log('router NOK => user ', user);
      next({ name: "HomeView" });
    }
  });
}

export default router
