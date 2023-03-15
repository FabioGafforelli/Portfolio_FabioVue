<script>
import Card from '../components/icones/card.vue';
import Cardcompetence from '../components/icones/cardcompetence.vue';
import Dropdown from '../components/icones/Dropdown.vue';
import Header from '../components/layouts/header.vue';
export default {
  data: () => {
    return {
      cartes: [
            { id: 1, title: 'TP VueJs', description:  "Réalisation d'un cours pour expliquer aux étudiants la configuration d'un produit en utilisant vue.js" ,categorie: 'teaching', imgcard: 'images/Tp_Vue_Chaussure.png', lien: '/cours',  textelien: 'Voir le cours', textecategorie: 'Teaching' },
            { id: 2, title: 'CobbleBros',  description:  "Réalisation d'un jeu de plateforme en JavaScript grâce à un tutoriel", categorie: 'developpement', imgcard: 'images/CobbleBros.png', lien: '/cobblebros', textelien: 'Voir le projet', textecategorie: 'Développement'  },
            ],
            categorieSelectionnee: "toutes",
            competences: [
            { id: 1, title: 'VueJs', categorie: 'frameworks', imgcard: 'images/outils/VueJS.webp', lien: '/', textecategorie: 'Frameworks' },
            { id: 2, title: 'Figma', categorie: 'maquettage', imgcard: 'images/outils/Figma.webp', lien: '/', textecategorie: 'Maquettage Web' },
            { id: 3, title: 'VS Code', categorie: 'outilsdev', imgcard: 'images/outils/VSCode.webp', lien: '/', textecategorie: 'Outils de Développement' },
            { id: 4, title: 'React', categorie: 'frameworks', imgcard: 'images/outils/React.webp', lien: '/', textecategorie: 'Frameworks' },
            { id: 5, title: 'Next JS', categorie: 'frameworks', imgcard: 'images/outils/Nextjs.png', lien: '/', textecategorie: 'Frameworks' },
            { id: 6, title: 'Tailwind CSS', categorie: 'frameworks', imgcard: 'images/outils/TailwindCSS.png', lien: '/', textecategorie: 'Frameworks' },
            { id: 7, title: 'Three JS', categorie: 'frameworks', imgcard: 'images/outils/Three.png', lien: '/', textecategorie: 'Frameworks' },
            { id: 8, title: 'Chart JS', categorie: 'frameworks', imgcard: 'images/outils/ChartJS.png', lien: '/', textecategorie: 'Frameworks' },
            { id: 9, title: 'Illustrator', categorie: 'design', imgcard: 'images/outils/Illustrator.png', lien: '/', textecategorie: 'Design' },
            { id: 10, title: 'Photoshop', categorie: 'design', imgcard: 'images/outils/Photoshop.png', lien: '/', textecategorie: 'Design' },
            { id: 10, title: 'InDesign', categorie: 'design', imgcard: 'images/outils/InDesign.png', lien: '/', textecategorie: 'Design' },
            ],
            categorieSelectionnee: "toutes",
      typeValue: '',
      typeStatus: false,
      typeArray: ['Teacher', 'Front-End Developper', 'WebDesign'],
      typingSpeed: 200,
      erasingSpeed: 100,
      newTextDelay: 1500,
      typeArrayIndex: 0,
      charIndex: 0
    }
  },
  methods: {
    filtreCartes(categorie) {
            this.categorieSelectionnee = categorie;
        },
    filtreCompetences(categorie) {
            this.categorieSelectionnee = categorie;
        },
    typeText(){
      if(this.charIndex < this.typeArray[this.typeArrayIndex].length) {
        if(!this.typeStatus)
        this.typeStatus = true;

        this.typeValue += this.typeArray[this.typeArrayIndex].charAt(this.charIndex);
        this.charIndex += 1;

        setTimeout(this.typeText, this.typingSpeed);
      }
      else {
        this.typeStatus = false;
        setTimeout(this.eraseText, this.newTextDelay);
      }
    },
    eraseText() {
      if(this.charIndex > 0) {
        if(!this.typeStatus)
        this.typeStatus = true;

        this.typeValue = this.typeArray[this.typeArrayIndex].substring(0, this.charIndex - 1);
        this.charIndex -= 1;
        setTimeout(this.eraseText, this.erasingSpeed); 
      }
      else {
        this.typeStatus = false;
        this.typeArrayIndex += 1;
        if(this.typeArrayIndex >= this.typeArray.length)
        this.typeArrayIndex = 0;

        setTimeout(this.typeText, this.typingSpeed + 1000);
      }
    }
  },
  created(){
    setTimeout(this.typeText, this.newTextDelay + 200);
  },
  computed: {
        cartesFiltrees() {
            if (this.categorieSelectionnee === "toutes") {
                return this.cartes;
            }
            else {
                return this.cartes.filter(carte => carte.categorie === this.categorieSelectionnee);
            }
        },
        competenceFiltrees() {
            if (this.categorieSelectionnee === "toutes") {
                return this.competences;
            }
            else {
                return this.competences.filter(competence => competence.categorie === this.categorieSelectionnee);
            }
        },
    },
    name:"App",
    components: { Header, Dropdown, Card, Cardcompetence },
}

</script>
<template>
  <div class="bg-[#000140]">
<Header />

<div class="grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-5  ">

<div>
      <section class="md:h-screen h-fit">
         <div class="grid ">
          <div class="col-span-2 md:text-[190px] text-center text-6xl animate__animated animate__backInLeft text-[#FAFF00] uppercase"><h1>Fabio</h1></div>
          <div class="col-span-2 md:text-[190px] text-center text-6xl animate__animated animate__backInRight text-[#FAFF00] uppercase"><h1>Gafforelli</h1></div>
          <div class="col-span-2 md:text-9xl text-center text-6xl ">
            <span class="typed-text">{{ typeValue }}</span>
            <span class="cursor" :class="{'typing' : typeStatus}">&nbsp;</span>
<div class="flex flex-col justify-center items-center relative mb-20 lg:mb-36 xl:mb-44 motion-safe:animate-bounce">
            <Dropdown />
          </div>
          </div>
          

        </div>

      </section>

      <section class="h-fit">
        <h1 class="md:text-8xl text-left text-6xl text-[#FAFF00]">A Propos</h1>
        <div class="grid grid-cols-1 md:grid-cols-2">
          <div class="flex pt-5 justify-center md:w-full w-80">
          <img src="/public/images/Fabio.webp" alt="">
        </div>
        <div class="grid ">
        <p class="md:text-6xl text-center md:pt-64 text-3xl text-[#FAFF00]">Étudiant en 2ème année de BUT Métiers du Multimédia et de l’Internet (MMI) à Montbéliard.</p>
        <a href="/public/Fabio_Gafforelli-CV.pdf" target="_blank">
          <button class=" w-20 h-20 mb-20 rounded-2xl bg-[#FAFF00] py-2 px-5  text-[#000140]">
            CV
          </button>
        </a>  
    </div>
      </div>
      </section>

      <section class="md:h-screen h-fit">
        <h1 class="md:text-8xl text-left text-6xl text-[#FAFF00] pb-10">Projets</h1>
          <div class="grid grid-cols-3">
      <button class="text-[#FAFF00] text-xl font-bold border border-white" @click="filtreCartes('toutes')">Tous les projets</button>
      <button class="text-[#FAFF00] text-xl font-bold border border-white gap-7" @click="filtreCartes('teaching')">Teaching</button>
      <button class="text-[#FAFF00] text-xl font-bold border border-white" @click="filtreCartes('developpement')">Developpement</button>
      <button class="text-[#FAFF00] text-xl font-bold border border-white" @click="filtreCartes('design')">Design</button>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
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
</section>


<section class="md:h-fit h-fit">
        <h1 class="md:text-8xl text-left text-6xl text-[#FAFF00]">Compétences</h1>
        <div class="grid grid-cols-3">
      <button class="text-[#FAFF00] text-xl font-bold border border-white" @click="filtreCompetences('toutes')">Toutess les compétences</button>
      <button class="text-[#FAFF00] text-xl font-bold border border-white gap-7" @click="filtreCompetences('maquettage')">Maquettage</button>
      <button class="text-[#FAFF00] text-xl font-bold border border-white" @click="filtreCompetences('frameworks')">Frameworks</button>
      <button class="text-[#FAFF00] text-xl font-bold border border-white" @click="filtreCompetences('outilsdev')">Outils Développement</button>
      <button class="text-[#FAFF00] text-xl font-bold border border-white" @click="filtreCompetences('design')">Design</button>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
      <div v-for="competence in competenceFiltrees" :key="competence.id">
                  <Cardcompetence class="w-80"
                  :carte="competence" 
                  :id="competence.id" 
                  :title="competence.title"
                  :description="competence.description"
                  :imgcard="competence.imgcard"  
                  :lien="competence.lien" 
                  :textecategorie="competence.textecategorie"
                  :textelien="competence.textelien"/>
                </div>
    </div>
      </section>


      </div>
      </div>
    </div>
</template>

<style scoped>
  span.typed-text {
    color: #FAFF00;
  }
  span.cursor {
    display: inline-block;
    margin-left: 3px;
    width: 4px;
    background-color: #fff;
    animation: cursorBlink 1s infinite;
  }
  span.cursor.typing {
    animation: none
  }
  @keyframes cursorBlink {
    49% {background-color: #fff ;}
    50% {background-color: transparent ;}
    99% {background-color: transparent ;}
  }
</style>
