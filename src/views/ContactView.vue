<script>
import Header from '../components/layouts/header.vue';
import Footer from '../components/layouts/footer.vue';

export default {
    name:"App",
    components: { Header, Footer },
    data() {
    return {
      from_name: "",
      from_firstname: "",
      email_id: "",
      message: "",
    };
  },
  methods: {
    sendMail() {
      const params = {
        from_name: this.from_name,
        from_firstname: this.from_firstname,
        email_id: this.email_id,
        message: this.message,
      };
      emailjs
      .send("service_430dq2r", "template_15d9h0l", params)
        .then(res => {
          alert(`Success! ${res.status}`);
        })
        .catch(err => {
          alert(`Error: ${err}`);
        });
    },
  },
};
</script>

<template>
    <div class="bg-gray-50">
            <Header />
        <div class="pt-5 px-5 gap-20 relative">
            <div class="bg-gray-100 p-4 rounded-lg">
    <form class="space-y-4" @submit.prevent="submitForm">
      <div>
        <label for="name" class="block text-gray-700 font-bold mb-2">Name</label>
        <input type="text" id="name" v-model="from_name" placeholder="Your name"
          class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-black">
      </div>
      <div>
        <label for="email" class="block text-gray-700 font-bold mb-2">Email</label>
        <input type="email" id="email" v-model="email_id" placeholder="Your email"
          class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-black">
      </div>
      <div>
        <label for="message" class="block text-gray-700 font-bold mb-2">Message</label>
        <textarea id="message" v-model="message" placeholder="Your message"
          class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-black"></textarea>
      </div>
      <div>
        <button type="submit" @click.prevent="sendMail" class="bg-black text-white font-bold py-2 px-4 rounded-lg">Submit</button>
      </div>
    </form>
  </div>
        </div>
        </div>
        <Footer />
</template>