<script>
import Card from '../components/icones/card.vue';
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
        }
    },
    name:"App",
    components: { Header, Dropdown, Card },
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

      <section class="md:h-screen h-fit">
        <h1 class="md:text-8xl text-left text-6xl text-[#FAFF00]">A Propos</h1>
        <div class="grid grid-cols-1 md:grid-cols-2">
          <div class="pt-5">
          <img src="/public/images/Test.jpg" alt="">
        </div>
        <div class="grid grid-rows-2">
        <p class="md:text-3xl text-center pt-64 text-6xl text-[#FAFF00]">Étudiant en 2ème année de BUT Métiers du Multimédia et de l’Internet (MMI) à Montbéliard.</p>
      <button class=" w-20 h-20 mb-20 rounded-2xl bg-[#FAFF00] py-2 px-5  text-[#000140]">CV</button>  
    </div>
      </div>
      </section>

      <section class="md:h-screen h-fit">
        <h1 class="md:text-8xl text-left text-6xl text-[#FAFF00] pb-10">Projets</h1>
          <div class="grid grid-cols-3">
      <button class="text-[#FAFF00] text-xl font-bold border border-white" @click="filtreCartes('toutes')">Tous les projets</button>
      <button class="text-[#FAFF00] text-xl font-bold border border-white gap-7" @click="filtreCartes('teaching')">Teaching</button>
      <button class="text-[#FAFF00] text-xl font-bold border border-white" @click="filtreCartes('developpement')">Developpement</button>
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


<section class="md:h-screen h-fit">
        <h1 class="md:text-8xl text-left text-6xl text-[#FAFF00]">Compétences</h1>

      </section>


      </div>
      </div>
    </div>
</template>

<style scoped>
#moreInfo {
  appearance: none;
  position: fixed;
  top: -100%;
  left: -100%;
}
.mi {
  --openText: "Cours";
  --altText: "Cours";
  --img: url('/public/images/Tp_Vue_Chaussure.png');
  --fullText: "Réalisation d'un pdf expliquant le cours de développement en utilisant vue.js et supabase pour configurer un produit";
  position: relative;
  width: 12em;
  height: 4em;
  background-image: var(--img);
  background-position: right;
  background-size: 300% 300%;
  transition: transform 0.5s 0s;
  transform-style: preserve-3d;
  perspective: 40em;
}
.mi-outer {
  filter: drop-shadow(0.4em 0.2em 1em #0004);
}
*, *::before, *::after {
    padding: 0;
    margin: 0 auto;
    box-sizing: border-box;
}
.mi > * {
  position: absolute;
  transform-style: preserve-3d;
}
.mi > *::before, .mi > *::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}
.mi-flap1 {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform-origin: top;
  transition: transform 0.5s 1.5s;
}
.mi-flap1::before {
  content: var(--openText);
  background-color: #eee;
  border: 2px solid #555;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: border-color 0.25s;
}
.mi-flap1::after {
  background-image: var(--img);
  background-position: top right;
  background-size: 300% 300%;
  transform: rotateX(180deg);
}
.mi-flap1:hover::before {
  border-color: #585;
}
.mi-flap2 {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform-origin: bottom right;
  transition: transform 0.5s 1s;
}
.mi-flap2::before {
  content: var(--altText);
  background-color: #eee;
  border: 2px solid #555;
  display: flex;
  align-items: center;
  justify-content: center;
}
.mi-flap2::after {
  background-image: var(--img);
  background-position: bottom right;
  background-size: 300% 300%;
  transform: rotateX(180deg);
}
.mi-flap3 {
  top: -100%;
  left: 0;
  width: 100%;
  height: 300%;
  transform-origin: right;
  visibility: hidden;
  transition: visibility 0s 1s, transform 0.5s 0.5s;
}
.mi-flap3::before {
  background-image: var(--img);
  background-position: right;
  background-size: 300% 100%;
}
.mi-flap3 .mi-info {
  background-position: right;
}
.mi-flap3 .mi-info::after {
  left: -200%;
}
.mi-flap4 {
  top: -100%;
  left: 0;
  width: 100%;
  height: 300%;
  transform-origin: left;
  visibility: hidden;
  transition: visibility 0s 1s, transform 0.5s 0s;
}
.mi-flap4::before {
  background-image: var(--img);
  background-position: left;
  background-size: 300% 100%;
}
.mi-flap4::after {
  content: unset;
}
.mi-flap4 .mi-info {
  background-position: left;
}
.mi-flap4 .mi-info::after {
  left: 0%;
}
.mi-flap5 {
  top: -100%;
  left: 0;
  width: 100%;
  height: 300%;
  visibility: hidden;
  transform: rotateY(180deg);
  transition: visibility 0s 0.5s;
}
.mi-flap5 .mi-info {
  background-position: center;
}
.mi-flap5 .mi-info::after {
  left: -100%;
}
.mi .mi-info {
  position: relative;
  width: 100%;
  height: 100%;
  background-image: var(--img);
  background-size: 300% 100%;
  transform: rotateY(180deg);
  backface-visibility: hidden;
  overflow: hidden;
  transform-style: preserve-3d;
}
.mi .mi-info::after {
  padding: 4em 2em 2em;
  content: var(--fullText);
  border: 2px solid #555;
  position: absolute;
  top: 0%;
  width: 300%;
  height: 100%;
  background-color: #fffa;
}
.mi .mi-close {
  position: absolute;
  top: 0;
  left: 0;
  padding: 0.5em;
  z-index: 2;
  cursor: pointer;
  transition: color 0.25s;
  transform-style: preserve-3d;
}
.mi .mi-close:hover {
  color: #585;
}
#moreInfo:checked ~ .mi-outer > .mi > .mi-flap1 {
  pointer-events: none;
  transform: rotateX(180deg);
  transition: transform 0.5s 0s;
}
#moreInfo:checked ~ .mi-outer > .mi > .mi-flap2 {
  transform: rotateX(-180deg);
  transition: transform 0.5s 0.5s;
}
#moreInfo:checked ~ .mi-outer > .mi > .mi-flap3 {
  transform: rotateY(180deg);
  visibility: visible;
  transition: visibility 0s 1s, transform 0.5s 1s;
}
#moreInfo:checked ~ .mi-outer > .mi > .mi-flap4 {
  transform: rotateY(-180deg);
  visibility: visible;
  transition: visibility 0s 1s, transform 0.5s 1.5s;
}
#moreInfo:checked ~ .mi-outer > .mi > .mi-flap5 {
  visibility: visible;
  transition: visibility 0s 1s;
}

  span.typed-text {
    color: #D2B94B;
  }
  span.cursor {
    display: inline-block;
    margin-left: 3px;
    width: 4px;
    background-color: #000;
    animation: cursorBlink 1s infinite;
  }
  span.cursor.typing {
    animation: none
  }
  @keyframes cursorBlink {
    49% {background-color: #000 ;}
    50% {background-color: transparent ;}
    99% {background-color: transparent ;}
  }
</style>
