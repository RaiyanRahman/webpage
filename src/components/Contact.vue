<template>
    <div class="contact">
      <v-btn
        elevation="5"
        x-large
        outlined
        rounded
        style="color: #c4926b;
               display: block;
               margin: auto;"
        @click="contactMe()"
        >Contact Me</v-btn>
    </div>
</template>

<script>
export default {
  name: 'Contact',
  methods: {
    contactMe() {
      window.open('mailto:raiyan.rahman01@outlook.com', '_self');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.contact {
  padding-top: 5rem;
  padding-bottom: 3rem;
}

</style>
