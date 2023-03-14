<template>
    <div class="flex justify-center">
      <div
        class="block max-w-sm rounded-lg bg-[#FAFF00] shadow-lg">
        <a href="#!">
          <img
            class="rounded-t-lg flex justify-center"
            :src="imgcard"
            alt="" />
        </a>
        <div class="p-6">
          <div class="grid grid-cols-2">
            <h5
            class="mb-2 text-xl font-medium leading-tight text-[#000140]">
            {{ title }}
          </h5>
          <p
            class="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-black "
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
    
    