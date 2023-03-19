<template>
    <div class="bg-gray-50">
  <Header />
  <h1 class="md:text-8xl text-left text-6xl text-black pb-10">Projects</h1>
          <div class="grid grid-cols-3">
      <button class="text-black text-xl font-bold border border-black" @click="filtreCartes('toutes')">All projects</button>
      <button class="text-black text-xl font-bold border border-black gap-7" @click="filtreCartes('teaching')">Teaching</button>
      <button class="text-black text-xl font-bold border border-black" @click="filtreCartes('developpement')">Developpement</button>
      <button class="text-black text-xl font-bold border border-black" @click="filtreCartes('design')">Design</button>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-40 pt-5 md:pt-10 px-10 md:px-28">
      <div v-for="carte in cartesFiltrees" :key="carte.id">
                  <Card class="w-80"
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
    <Footer />
</template>

<script>
import Card from '../../components/icones/card.vue'
import Footer from '../../components/layouts/footer.vue';
import Header from '../../components/layouts/header.vue';

export default {
    data() {
        return {
            cartes: [
            { id: 1, title: 'TP VueJs', description:  "Realization of a course to explain to students the configuration of a product using view.js" ,categorie: 'teaching', imgcard: 'images/Tp_Vue_Chaussure.png', lien: '/cours',  textelien: 'See the course', textecategorie: 'Teaching' },
            { id: 2, title: 'CobblesBros',  description:  "Making a platform game in JavaScript thanks to a tutorial", categorie: 'developpement', imgcard: 'images/CobbleBros.png', lien: '/cobblebros', textelien: 'See the project', textecategorie: 'Developpement'  },
            { id: 3, title: 'Basel Handball',  description:  "Realization of poster and communication mission on the club's social networks", categorie: 'design', imgcard: 'images/BaselHandball.png', lien: '/basel', textelien: 'See the project', textecategorie: 'Design and Communication'  },
            { id: 4, title: 'Arene Unified Champions',  description:  "Participation in the development and creation of the visual identity of the detection tournament of the esport team of the University of Franche Comté, the arena", categorie: 'design', imgcard: 'images/AreneCover.png', lien: '/arene', textelien: 'See the project', textecategorie: 'Developpement and Design'  },
            { id: 5, title: 'Honeyst course',  description:  "Realization of a course to explain to students the realization of an e commerce store with wordpress", categorie: 'teaching', imgcard: 'images/Honeyst.png', lien: '/cours_wordpress', textelien: 'See the project', textecategorie: 'Teaching'  },
            { id: 6, title: 'Jaguar 3D Next.JS',  description:  "Realization of a website with react just for try to import a 3d model to a wbesite", categorie: 'developpement', imgcard: 'images/Jaguarcover.png', lien: '/jaguar', textelien: 'See the project', textecategorie: 'Developpement'  },
            ],
            categorieSelectionnee: "toutes",
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
    components: { Card, Header, Footer }
}
</script>