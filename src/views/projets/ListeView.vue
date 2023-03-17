<template>
    <div class="bg-gray-50">
  <Header />
        <h1 class="md:text-8xl text-left text-6xl text-black pb-10">Projets</h1>
          <div class="grid grid-cols-3">
      <button class="text-black text-xl font-bold border border-white" @click="filtreCartes('toutes')">Toutes les cartes</button>
      <button class="text-black text-xl font-bold border border-white gap-7" @click="filtreCartes('teaching')">Teaching</button>
      <button class="text-black text-xl font-bold border border-white" @click="filtreCartes('developpement')">Developpement</button>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
      <div v-for="carte in cartesFiltrees" :key="carte.id">
                  <Card 
                  :carte="carte" 
                  :id="carte.id" 
                  :title="carte.title"
                  :description="carte.description"
                  :imgcard="carte.imgcard"  
                  :lien="carte.lien" 
                  :textecategorie="carte.textecategorie"
                  :textelien="carte.textelien"/>
                </div>
    </div>
    </div>
</template>

<script>
import Card from '../../components/icones/card.vue'
import Header from '../../components/layouts/header.vue';

export default {
    data() {
        return {
            cartes: [
            { id: 1, title: 'TP VueJs', description:  "Réalisation d'un cours pour expliquer aux étudiants la configuration d'un produit en utilisant vue.js" ,categorie: 'teaching', imgcard: 'images/Tp_Vue_Chaussure.png', lien: '/cours',  textelien: 'Voir le cours', textecategorie: 'Teaching' },
            { id: 2, title: 'TP VueJs', categorie: 'developpement', imgcard: 'images/Tp_Vue_Chaussure.png', lien: '/cours' },
            ],
            categorieSelectionnee: "toutes"
        };
    },
    computed: {
        cartesFiltrees() {
            if (this.categorieSelectionnee === "toutes") {
                return this.cartes;
            }
            else {
                return this.cartes.filter(carte => carte.categorie === this.categorieSelectionnee);
            }
        }
    },
    methods: {
        filtreCartes(categorie) {
            this.categorieSelectionnee = categorie;
        }
    },
    components: { Card, Header }
}
</script>