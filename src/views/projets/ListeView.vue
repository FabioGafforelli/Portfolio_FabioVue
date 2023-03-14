<template>
    <div>
      <div>
        <button @click="filtreCartes('toutes')">Toutes les cartes</button>
        <button @click="filtreCartes('categorie1')">Catégorie 1</button>
        <button @click="filtreCartes('categorie2')">Catégorie 2</button>
      </div>
      <div>
        <div v-for="carte in cartesFiltrees" :key="carte.titre">
          <h2>{{ carte.titre }}</h2>
          <p>{{ carte.description }}</p>
          <p>{{ carte.categorie }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        cartes: [
          { titre: 'Carte 1', description: 'Description de la carte 1', categorie: 'categorie1' },
          { titre: 'Carte 2', description: 'Description de la carte 2', categorie: 'categorie2' },
          { titre: 'Carte 3', description: 'Description de la carte 3', categorie: 'categorie1' },
          { titre: 'Carte 4', description: 'Description de la carte 4', categorie: 'categorie2' }
        ],
        categorieSelectionnee: 'toutes'
      }
    },
    computed: {
      cartesFiltrees() {
        if (this.categorieSelectionnee === 'toutes') {
          return this.cartes
        } else {
          return this.cartes.filter(carte => carte.categorie === this.categorieSelectionnee)
        }
      }
    },
    methods: {
      filtreCartes(categorie) {
        this.categorieSelectionnee = categorie
      }
    }
  }
  </script>