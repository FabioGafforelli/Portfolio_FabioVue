<template>
<div class="flex justify-center">
  <div
    class="block max-w-sm rounded-lg bg-white shadow-lg">
    <a href="#!">
      <img
        class="rounded-t-lg"
        src="/public/images/Test.jpg"
        alt="" />
    </a>
    <div class="p-6">
      <h5
        class="mb-2 text-xl font-medium leading-tight text-neutral-800">
        Card title
      </h5>
      <p class="mb-4 text-base text-neutral-600 ">
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </p>
      <button
        type="button"
        class="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-black "
        data-te-ripple-init
        data-te-ripple-color="light">
        Button
      </button>
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

