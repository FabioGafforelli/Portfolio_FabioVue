<template>
    <div class="bg-gray-50">
  <Header />
  
  <div class="pt-2 md:pt-5 px-10 md:px-20 gap-10 md:gap-20 pb-5 md:pb-10 relative ">
            <div>
      <h1 class="pt-8 md:pt-32 uppercase text-black text-left md:text-6xl text-xl ">       
    Cobbles Bros </h1>
    <div class="md:pt-5 w-40 md:w-96">
    <hr class="black">
    </div>
    <p class="text-base md:text-xl font-rubik font-light pt-5 md:pt-16 text-black">I followed a tutorial explaining how to create a platform video game in javascript. This tutorial allowed me to better understand the use and possibilities offered by the javascript language</p>
      </div>
    </div>
    <section class="h-fit md:h-fit pt-10">
      <div class="flex justify-center">
        <img src="/public/images/CobbleBros.png" alt="">
        </div>
    </section> 
    <div class="pt-2 md:pt-5 px-10 md:px-20 gap-10 md:gap-20 pb-5 md:pb-10 relative ">
                <div class="flex pb-7 md:px-14 pt-5 md:pt-16 gap-10 md:gap-12">
      <h2 class=" uppercase text-black text-left md:text-3xl text-xl ">       
    Client</h2>
    <p class="text-base md:text-xl font-rubik font-light text-black md:pl-80">My self</p>
   </div> 
    <div class="md:pt-5 w-full">
    <hr class="black">
    </div>
      </div>
    <div class="px-10 md:px-20 gap-10 md:gap-20 pb-2 md:pb-10 relative ">
                <div class="flex pb-7 md:px-14 pt-5 md:pt-5 gap-10 md:gap-12">
      <h2 class=" uppercase text-black text-left md:text-3xl text-xl ">       
    Year</h2>
    <p class="text-base md:text-xl font-rubik font-light text-black md:pl-80">2023</p>
   </div>
    <div class="md:pt-5 w-full">
    <hr class="black">
    </div>
      </div>
    <div class="px-10 md:px-20 gap-10 md:gap-20 pb-2 md:pb-10 relative ">
                <div class="flex pb-7 md:px-14 pt-5 md:pt-5 gap-10 md:gap-12">
      <h2 class=" uppercase text-black text-left md:text-3xl text-xl ">       
    Used tools</h2>
    <p class="text-base md:text-xl font-rubik font-light md:pl-80 text-black">VS Code</p>
   </div>
    <div class="md:pt-5 w-full">
    <hr class="black">
    </div>
      </div>
    <div class="px-10 md:px-20 gap-10 md:gap-20 pb-2 md:pb-10 relative ">
                <div class="flex pb-7 md:px-14 pt-5 md:pt-5 gap-10 md:gap-12">
      <h2 class=" uppercase text-black text-left md:text-3xl text-xl ">       
    Website</h2>
    <a href="https://cobblesbros.fabiogafforelli.fr" target="_blank">
    <p class="text-base md:text-xl font-rubik font-light md:pl-80 text-black">https://cobblesbros.fabiogafforelli.fr</p>
  </a>
   </div>
    <div class="md:pt-5 w-full">
    <hr class="black">
    </div>
      </div>

    </div>
     </template>

<script>
import Header from '../../components/layouts/header.vue';

export default {
    components: { Header }
}
</script>

<style>
hr.black {
  border-top: 2px solid black;
}
</style>