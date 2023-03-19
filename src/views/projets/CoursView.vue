<template>
    <div class="bg-gray-50">
  <Header />
  
  <div class="pt-2 md:pt-5 px-10 md:px-20 gap-10 md:gap-20 pb-5 md:pb-10 relative ">
            <div>
      <h1 class="pt-8 md:pt-32 uppercase text-black text-left md:text-6xl text-xl ">       
    Cours Vue JS</h1>
    <div class="md:pt-5 w-40 md:w-96">
    <hr class="black">
    </div>
    <p class="text-base md:text-xl font-rubik font-light pt-5 md:pt-16 text-black">"I made a tutorial explaining better and in more detail the course of creating a product configurator using vue.js and supabase</p>
      </div>
    </div>
    <section class="h-fit md:h-fit pt-10">
      <div class="flex justify-center">
        <img src="/public/images/Tp_Vue_Chaussure.png" alt="">
    </div>
      </section> 
    <div class="pt-2 md:pt-5 px-10 md:px-20 gap-10 md:gap-20 pb-5 md:pb-10 relative ">
                <div class="flex pb-7 md:px-14 pt-5 md:pt-16 gap-10 md:gap-12">
      <h2 class=" uppercase text-black text-left md:text-3xl text-xl ">       
    Client</h2>
    <p class="text-base md:text-xl font-rubik font-light text-black md:pl-80">MMI Students</p>
   </div>
    <div class="md:pt-5 w-full">
    <hr class="black">
    </div>
      </div>
    <div class="px-10 md:px-20 gap-10 md:gap-20 pb-2 md:pb-10 relative ">
                <div class="flex pb-7 md:px-14 pt-5 md:pt-5 gap-10 md:gap-10">
      <h2 class=" uppercase text-black text-left md:text-3xl text-xl ">       
    Year</h2>
    <p class="text-base md:text-xl font-rubik font-light text-black md:pl-80">2023</p>
   </div>
    <div class="md:pt-5 w-full">
    <hr class="black">
    </div>
      </div>
    <div class="px-10 md:px-20 gap-10 md:gap-20 pb-2 md:pb-10 relative ">
                <div class="flex pb-7 md:px-10 pt-5 md:pt-5 gap-10 md:gap-4">
      <h2 class=" uppercase text-black text-left md:text-3xl text-xl ">       
    Used tools</h2>
    <p class="text-base md:text-xl font-rubik font-light md:pl-60 text-black">VS Code, Tailwind CSS, Google Slides</p>
   </div>
    <div class="md:pt-5 w-full">
    <hr class="black">
    </div>
      </div>
    <div class="px-10 md:px-20 gap-10 md:gap-20 pb-2 md:pb-10 relative ">
                <div class="flex pb-7 md:px-14 pt-5 md:pt-5 gap-10 md:gap-12">
      <h2 class=" uppercase text-black text-left md:text-3xl text-xl ">       
    Link of the course</h2>
    <a href="https://docs.google.com/presentation/d/1aXT58TAsEKaxch7854bEXZWiD1KfIgphbgDytwhU-cE/edit?usp=sharing" target="_blank">
    <p class="text-base md:text-xl font-rubik font-light md:pl-40 text-black">VUE JS TP CONFIGURATOR PDF</p>
  </a>
   </div>
    <div class="md:pt-5 w-full">
    <hr class="black">
    </div>
      </div>
    </div>
    <Footer />
     </template>

<script>
import Footer from '../../components/layouts/footer.vue';
import Header from '../../components/layouts/header.vue';

export default {
    components: { Header, Footer }
}
</script>

<style>
hr.black {
  border-top: 2px solid black;
}
</style>