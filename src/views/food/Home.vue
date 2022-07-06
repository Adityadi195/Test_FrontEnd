<template>
  <div class="home">
    <Hero />
  </div>
  <div>
    <card :item="item"/>
  </div>

</template>
<script>
import Hero from '@/components/Hero.vue'
import Card from '@/components/Card.vue'
import axios from "axios";

export default {
  name: 'App',
  components: {
    Hero,
    Card
  },
  data() {
    return {
      items: []
    }
  },
  method: {
    setItems(data) {
      this.items = data;
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/detail")
      .then(function (response) {
        // handle success
        console.log("Berhasil : ", response.data);
      })
      .catch(function (error) {
        // handle error
        console.log("Gagal : ", error);
      })
  },
};
</script>