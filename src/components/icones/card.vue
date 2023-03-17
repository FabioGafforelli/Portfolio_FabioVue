<template>
<div class="flex justify-center">
  <div
    class="block max-w-sm rounded-lg bg-black shadow-lg">
    <a href="#!">
      <img
        class="rounded-t-lg"
        :src="imgcard"
        alt="" />
    </a>
    <div class="p-6">
      <h5
        class="mb-2 text-xl font-medium leading-tight text-white">
        {{ title }}
      </h5>
      <p class="mb-4 text-base text-white">
        {{ description }}

      </p>
      <div class="grid grid-cols-2">
      <button
        type="button"
        class="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white "
        data-te-ripple-init
        data-te-ripple-color="light">
        <RouterLink  :to="lien">
        {{ textelien }}
      </RouterLink>
      </button>
      <p
        class="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white "
        data-te-ripple-init
        data-te-ripple-color="light">
        {{textecategorie}}
    </p>
      </div>
    </div>
  </div>
</div>
</template>
<script>

export default {
  props: {
        title: String,
        imgcard: String,
        description: String,
        textelien: String,
        textecategorie: String,
        lien:{
            type: String,
            default:"/"
        },
    },  
    components: {  },
  data() {
    return {
      menuOuvert: false,

    }
  },
}
</script>

