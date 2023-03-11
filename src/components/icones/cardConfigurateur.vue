<template>
<div class="flex justify-center">
  <div
    class="block max-w-sm rounded-lg bg-white shadow-lg">
    <a href="#!">
      <img
        class="rounded-t-lg"
        src="/public/images/Tp_Vue_Chaussure.png"
        alt="" />
    </a>
    <div class="p-6">
      <h5
        class="mb-2 text-xl font-medium leading-tight text-neutral-800">
        TP Configurateur Vue.JS
      </h5>
      <p class="mb-4 text-base text-neutral-600 ">
        Réalisation d'un cours pour expliquer aux étudiants la configuration d'un produit en utilisant vue.js
      </p>
      <div class="grid grid-cols-2">
      <button
        type="button"
        class="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-black "
        data-te-ripple-init
        data-te-ripple-color="light">
        <a href="https://docs.google.com/presentation/d/e/2PACX-1vSMGax1cjDp1ystoKPwPvVgp84XToij1xQX3JqUywmBowONIy0tDOsgDWuauWcJNFAHvmTLA19vi00L/pub?start=false&loop=false&delayms=3000" target="_blank">
        Voir le cours
        </a>
      </button>
      <p
        class="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-black "
        data-te-ripple-init
        data-te-ripple-color="light">
        Teaching
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

