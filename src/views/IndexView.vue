<template>
  <div class="home">
    <Hero />
  </div>
    <div class="container">
      <div class="row">
        <div class="col-md-3 mt-4" v-for="item in items" :key="item.id">
          <Card :item="item" />
        </div>
      </div>
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
      items: [],
    };
  },
  methods: {
    setListItems(data) {
      this.items = data;
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/detail")
      .then((response) => this.setListItems(response.data))
      .catch((error) => console.log(error))
  },
};
</script>