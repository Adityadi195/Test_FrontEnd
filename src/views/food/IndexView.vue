<template>
  <div class="home">
    <Hero />
  </div>
  <div class="row col-md-12 col-md-6 mt-2">
    <div class="list-group-item" v-for="date in items" :key="date.id"></div>
    <div class="col-md-3 mt-2" v-for="(item, date) in items" :key="date.id">
      <Card :item="item" />
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
    setPostItems(data) {
      this.items = data;
    }
  },
  mounted() {
    axios
      .get("http://localhost:3000/detail")
      .then((response) => this.setListItems(response.data))
      .catch((error) => console.log(error))
  },
  computed: {
    showList: function () {
      return this.dataPengeluaran.length > 0;
    },
    totalPengeluaran: function () {
      return this.dataPengeluaran.reduce((acc, item) => acc + parseInt(item.nominal), 0);
    }
  },
};
</script>