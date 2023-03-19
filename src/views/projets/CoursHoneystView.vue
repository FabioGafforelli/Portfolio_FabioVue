<template>
    <div class="bg-gray-50">
  <Header />
  
  <div class="pt-2 md:pt-5 px-10 md:px-20 gap-10 md:gap-20 pb-5 md:pb-10 relative ">
            <div>
      <h1 class="pt-8 md:pt-32 uppercase text-black text-left md:text-6xl text-xl ">       
    Wordpress Avada Woocommerce course</h1>
    <div class="md:pt-5 w-40 md:w-96">
    <hr class="black">
    </div>
    <p class="text-base md:text-xl font-rubik font-light pt-5 md:pt-16 text-black">"I made a course explaining simply how to create a e-commerce website with wordpress and woo commerce for MMMI 2nd year student</p>
      </div>
    </div>
    <section class="h-fit md:h-fit pt-10">
        <img src="/public/images/HoneystCover.png" alt="">
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
    <p class="text-base md:text-xl font-rubik font-light md:pl-80 text-black">WordPress, Avada theme, Google slide, OBS</p>
   </div>
    <div class="md:pt-5 w-full">
    <hr class="black">
    </div>
      </div>
      <div class="px-10 md:px-20 gap-10 md:gap-20 pb-2 md:pb-10 relative ">
                <div class="flex pb-7 md:px-14 pt-5 md:pt-5 gap-10 md:gap-12">
      <h2 class=" uppercase text-black text-left md:text-3xl text-xl ">       
    Link of the course</h2>
    <a href="https://docs.google.com/presentation/d/1MxjHYPY702JiZV-I9KiM3VdvQl9FaU_Y7c_asB_p7PI/edit?usp=sharing" target="_blank">
    <p class="text-base md:text-xl font-rubik font-light md:pl-40 text-black">TP Honeyst PDF</p>
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