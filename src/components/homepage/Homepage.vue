<template>
  <div>
    <hero></hero>
    <products-list-container></products-list-container>
    <div v-for="t in products">
      {{t.PRODUTO }}<br>
    </div>
  </div>
</template>

<script>
import ProductsListContainer from '../products_list/ProductsListContainer';
import HeroSection from '../hero/Hero';

export default {
  name: 'homepage-component',
  products: [],

  components: {
    'products-list-container': ProductsListContainer,
    'hero': HeroSection
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
