<script>

export default {
    components:{  },
    data() {
    return {
      from_name: "",
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
}
</script>


<template>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@iconscout/unicons@3.0.6/css/line.css">


<footer class="bg-white">
    <div class="pt-2">
      <div class="md:pt-5 w-full md:w-full pl-10 pr-10 md:px-96">
    <hr class="black">
    </div>
            <div class="mt-2 text-center pb-6 md:pt-2">
                ©2023 Fabio GAFFORELLI
            </div>
          </div>
          </footer>
</template>