<template>
    <header class=" bg-transparent sticky top-0 drop-shadow-lg z-10 ">
        <a href="#content" class="sr-only focus:not-sr-only text-lg text-black"> Passez au contenu </a>
        <nav class=" lg:flex lg:justify-between items-center">
          <div class="flex justify-between items-center">
           <RouterLink to="/">			
           <h1 class="text-black text-xl font-bold lg:text-5xl">FG</h1>
        </RouterLink> 
          <span class="text-5xl cursor-pointer lg:hidden block w-8 h-8 mx-55  ">
            <MenuIcon class=" text-black"  aria-controls="menu"
            :aria-expanded="menuOuvert"
            @click="menuOuvert = !menuOuvert">
            </MenuIcon>
            <span class="sr-only ">Menu</span>
          </span>
          </div>
          <Transition
            enter="transition duration-2000 ease-out"
            enterFrom="transform translate-x-full opacity-0"
            enterTo="transform translate-x-0 opacity-100"
            leave="transition duration-1750 ease-out"
            leaveFrom="transform  translate-x-0 opacity-100"
            leaveTo="transform translate-x-full opacity-0"
          >
          <ul id="menu" v-if="menuOuvert" class="lg:hidden w-full  text-xl font-museomoderno  py-4 text-center" >
            <li class="my-5">
              <RouterLink class="my-6 lg:px-4 xl:pt-2 xl:rounded-sm font-museomoderno text-black  " to="/">Accueil</RouterLink>
            </li>
            <li class="my-5">
              <RouterLink class="my-6 lg:px-4 xl:pt-2 xl:rounded-sm text-black font-museomoderno " to="/projets">Projets</RouterLink>
            </li>
            <li class="my-5">
              <a href="#competences">
            Compétences
              </a>
            </li>
            <li class="my-5">
              <RouterLink class="my-6 lg:px-4 xl:pt-2 xl:rounded-sm font-museomoderno text-black" to="/contact">Contact</RouterLink>
            </li>
          </ul>
          </Transition>
          <ul class="lg:flex  gap-4 lg:items-center text-black text-xl font-algerian mx-6 py-4 hidden" >
            <li class="my-5">
              <RouterLink class="my-6 lg:px-2 xl:pt-2 xl:rounded-sm font-museomoderno text-black" to="/">Accueil</RouterLink>
            </li>
            <li class="my-5">
              <RouterLink class="my-6 lg:px-2 xl:pt-2 xl:rounded-sm font-algerian text-black " to="/projets">Projets</RouterLink>
            </li>
            <li class="my-5">
              <a href="#competences">
            Compétences
            </a>
          </li>
            <li class="my-5">
              <RouterLink class="my-6 lg:px-2 xl:pt-2 xl:rounded-sm font-algerian text-black " to="/contact">Contact</RouterLink>
            </li>
          </ul>    
        </nav>
      </header>
    </template>
    
    <script>
    import Navigation from '../icones/Navbar.vue'
    import { MenuIcon, } from "@heroicons/vue/solid";
    export default {
      name: "App",
      components: { MenuIcon, Navigation },
        data() {
        return {
          menuOuvert: false,
        };
        },
    }
    
    </script>
    