<template>
  <div>
   <carousel></carousel>
    <products-list-container></products-list-container>
    <div v-for="t in products">
      {{t.PRODUTO}}<br>
    </div>
  </div>
</template>

<script>
import ProductsListContainer from '../products_list/ProductsListContainer';

import Carousel from '../hero/carousel';

export default {
  name: 'homepage-component',
  products: [],

  components: {
    'products-list-container': ProductsListContainer,
   
    'carousel':Carousel
  },
  computed(){
   this.products = this.$store.state.products
  },
  mounted () {
    this.$store.dispatch("getProducts");
    console.log(this.$store.state.products)
  }
};
</script>
