<script>
import Dropdown from '../components/icones/Dropdown.vue';
import Header from '../components/layouts/header.vue';
export default {
  data: () => {
    return {
      typeValue: '',
      typeStatus: false,
      typeArray: ['Neon', 'Chamber', 'Bronze', 'KJ Lineup'],
      typingSpeed: 200,
      erasingSpeed: 100,
      newTextDelay: 1500,
      typeArrayIndex: 0,
      charIndex: 0
    }
  },
  methods: {
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
    name:"App",
    components: { Header, Dropdown },
}

</script>
<template>
<Header />

<div class="grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-5  ">

<div>
      <section class="md:h-screen h-fit bg-white">
         <div class="grid ">
          <div class="col-span-2 md:text-[190px] text-center text-6xl text-[#252C35] uppercase"><h1>Fabio</h1></div>
          <div class="col-span-2 md:text-[190px] text-center text-6xl text-[#252C35] uppercase"><h1>Gafforelli</h1></div>
          <div class="col-span-2 md:text-9xl text-center text-2xl text-green-600 ">
            <span class="typed-text">{{ typeValue }}</span>
            <span class="cursor" :class="{'typing' : typeStatus}">&nbsp;</span>
<div class="flex flex-col justify-center items-center relative mb-20 lg:mb-36 xl:mb-44 motion-safe:animate-bounce">
            <Dropdown />
          </div>
          </div>
          

        </div>

      </section>

      <section class="md:h-screen h-fit">
        <h1 class="md:text-8xl text-left text-6xl text-[#252C35]">A Propos</h1>
        <div class="grid grid-cols-2">
          <div class="pt-5">
          <img src="/public/images/Test.jpg" alt="">
        </div>
        <div class="grid grid-rows-2">
        <p class="md:text-3xl text-center pt-64 text-6xl text-[#252C35]">Étudiant en 2ème année de BUT Métiers du Multimédia et de l’Internet (MMI) à Montbéliard.</p>
      <button class=" w-20 h-20 mb-20 rounded-2xl bg-blue-600 py-2 px-5  text-white">CV</button>  
    </div>
      </div>
      </section>

      <section class="md:h-screen h-fit">
        <h1 class="md:text-8xl text-left text-6xl text-[#252C35]">Projets</h1>
        
      </section>
      </div>
      </div>
</template>

<style scoped>
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
