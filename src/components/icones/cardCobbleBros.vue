<template>
    <div class="flex justify-center">
      <div
        class="block max-w-sm rounded-lg bg-white shadow-lg">
          <img
            class="rounded-t-lg"
            src="/public/images/CobbleBros.png"
            alt="" />
        <div class="p-6">
          <h5
            class="mb-2 text-xl font-medium leading-tight text-neutral-800">
            TP Configurateur Vue.JS
          </h5>
          <p class="mb-4 text-base text-neutral-600 ">
            Réalisation d'un jeu de plateforme en javasript grâce à des tutoriels suivi sur l’Internet
          </p>
          <div class="grid grid-cols-2">
          <button
            type="button"
            class="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-black "
            data-te-ripple-init
            data-te-ripple-color="light">
            <RouterLink to="/cobblebros">
            Voir le projet
          </RouterLink>
          </button>
          <p
            class="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-black "
            data-te-ripple-init
            data-te-ripple-color="light">
            Développement
        </p>
          </div>
        </div>
      </div>
    </div>
    </template>
    <script>
    
    
    
    export default {
        components: {  },
      data() {
        return {
          menuOuvert: false,
    
        }
      },
    }
    </script>
    
    