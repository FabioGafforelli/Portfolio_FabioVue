<template>
    <div class="flex justify-center w-80 h-fit">
      <div
        class=" max-w-sm rounded-lg flex justify-center bg-white border border-black shadow-lg">
          <img
            class="rounded-t-lg md:w-20"
            :src="imgcard"
            alt="" />
        <div class="p-6">
          <div class="grid grid-cols-2">
            <h5
            class="mb-2 text-xl font-medium leading-tight text-black">
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
    
    