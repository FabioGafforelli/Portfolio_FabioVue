<script>
import Header from '../components/layouts/header.vue';
export default {
    name:"App",
    components: { Header },
}

</script>

<template>
<Header />

<div class="grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-5  ">

<div>
      <section class="md:h-screen h-fit bg-white">
         <div class="grid ">
          <div class="col-span-2 md:text-[190px] text-center text-6xl text-[#252C35] uppercase">Fabio</div>
          <div class="col-span-2 md:text-[190px] text-center text-6xl text-[#252C35] uppercase">Gafforelli</div>

        </div>

      </section>
      </div>
      </div>
</template>

<style>

</style>
