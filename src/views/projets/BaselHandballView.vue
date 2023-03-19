<template>
    <div class="bg-gray-50">
  <Header />
  
  <div class="pt-2 md:pt-5 px-10 md:px-20 gap-10 md:gap-20 pb-5 md:pb-10 relative ">
            <div>
      <h1 class="pt-8 md:pt-32 uppercase text-black text-left md:text-6xl text-xl ">       
    Basel Handball</h1>
    <div class="md:pt-5 w-40 md:w-96">
    <hr class="black">
    </div>
    <p class="text-base md:text-xl font-rubik font-light pt-5 md:pt-16 text-black">I made posters and communication missions on social networks to increase the attractiveness and activity of the Bavans Seloncourt Audincourt Handball Club</p>
      </div>
    </div>
    <section class="h-fit md:h-fit pt-10">
        <img src="/public/images/BaselCover.png" alt="">
    </section> 
    <div class="pt-2 md:pt-5 px-10 md:px-20 gap-10 md:gap-20 pb-5 md:pb-10 relative ">
                <div class="flex pb-7 md:px-14 pt-5 md:pt-16 gap-10 md:gap-12">
      <h2 class=" uppercase text-black text-left md:text-3xl text-xl ">       
    Client</h2>
    <p class="text-base md:text-xl font-rubik font-light text-black md:pl-80">Bavans Audincourt Seloncourt Handball</p>
   </div>
    <div class="md:pt-5 w-full">
    <hr class="black">
    </div>
      </div>
    <div class="px-10 md:px-20 gap-10 md:gap-20 pb-2 md:pb-10 relative ">
                <div class="flex pb-7 md:px-14 pt-5 md:pt-5 gap-10 md:gap-12">
      <h2 class=" uppercase text-black text-left md:text-3xl text-xl ">       
    Year</h2>
    <p class="text-base md:text-xl font-rubik font-light text-black md:pl-80">2022-2023</p>
   </div>
    <div class="md:pt-5 w-full">
    <hr class="black">
    </div>
      </div>
    <div class="px-10 md:px-20 gap-10 md:gap-20 pb-2 md:pb-10 relative ">
                <div class="flex pb-7 md:px-14 pt-5 md:pt-5 gap-10 md:gap-12">
      <h2 class=" uppercase text-black text-left md:text-3xl text-xl ">       
    Used tools</h2>
    <p class="text-base md:text-xl font-rubik font-light md:pl-80 text-black">Illustrator, Photoshop, Canva, Instagram, facebook, Twitch</p>
   </div>
    <div class="md:pt-5 w-full">
    <hr class="black">
    </div>
      </div>
    <div class="px-10 md:px-20 gap-10 md:gap-20 pb-2 md:pb-10 relative ">
                <div class="flex pb-7 md:px-14 pt-5 md:pt-5 gap-10 md:gap-12">
      <h2 class=" uppercase text-black text-left md:text-3xl text-xl ">       
    Website</h2>
    <a href="https://baselhb.fr" target="_blank">
    <p class="text-base md:text-xl font-rubik font-light md:pl-80 text-black">Not made by myself :  https://baselhb.fr</p>
    </a>
   </div>
    <div class="md:pt-5 w-full">
    <hr class="black">
    </div>
      </div>

    <div class="grid grid-cols-1 md:grid-cols-2 pt-5 md:pt-10 gap-5 md:gap-10 pb-5 md:pb-10 ">
        <img src="/public/images/BaselAffiche1.png" alt="" class="w-96 md:w-[500px] pl-10 pr-10 md:pl-20">
        <img src="/public/images/BaselAffiche2.png" alt="" class="w-96 md:w-[500px] pl-10 pr-10 md:pr-20">
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