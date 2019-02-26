<template>
  <div>
    <div class="card-image">
      <figure class="image is-4by3">
        <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4">{{ product.PRODUTO.slice(0,13)}}...</p>
        </div>
      </div>
      <div class="content is-clearfix">
        <p>{{ product.PRODUTO }} </p>
        <div class="is-pulled-left">
          <i v-if="product.ratings === 1" class="fa fa-star"></i>
          <i v-if="product.ratings === 2" class="fa fa-star"></i>
          <i v-if="product.ratings === 2" class="fa fa-star"></i>
          <i v-if="product.ratings === 3" class="fa fa-star"></i>
          <i v-if="product.ratings === 3" class="fa fa-star"></i>
          <i v-if="product.ratings === 3" class="fa fa-star"></i>
          <i v-if="product.ratings === 4" class="fa fa-star"></i>
          <i v-if="product.ratings === 4" class="fa fa-star"></i>
          <i v-if="product.ratings === 4" class="fa fa-star"></i>
          <i v-if="product.ratings === 4" class="fa fa-star"></i>
          <i v-if="product.ratings === 5" class="fa fa-star"></i>
          <i v-if="product.ratings === 5" class="fa fa-star"></i>
          <i v-if="product.ratings === 5" class="fa fa-star"></i>
          <i v-if="product.ratings === 5" class="fa fa-star"></i>
          <i v-if="product.ratings === 5" class="fa fa-star"></i>
          <p>{{ product.reviews > 0 ? `${product.reviews} Reviews` : 'No reviews' }}</p>
        </div>
        <p class="is-pulled-right">
          <span class="title is-4" v-money="'R$'">{{ product.PRECO}}</span>
        </p>
      </div>
      <div class="card-footer btn-actions">
        <div class="card-footer-item field is-grouped">
          <div class="buttons">
            <button class="button is-primary" v-if="!product.isAddedToCart" @click="addToCart(product.ID_PRODUTO)">{{ addToCartLabel }}</button>
            <button class="button is-text" v-if="product.isAddedToCart" @click="removeFromCart(product.ID_PRODUTO, false)">{{ removeFromCartLabel }}</button>
            <div>
              <button class="button is-small" :title="removeFromFavouriteLabel" v-show="product.isFavourite" @click="removeFromFavourite(product.ID_PRODUTO)">
                <span class="icon is-small">
                  <i class="fas fa-heart"></i>
                </span>
              </button>
              <button class="button is-small" :title="addToFavouriteLabel" v-show="!product.isFavourite" @click="saveToFavorite(product.ID_PRODUTO)">
                <span class="icon is-small">
                  <i class="far fa-heart"></i>
                </span>
              </button>
              <div class="select is-rounded is-small">
                <select @change="onSelectQuantity(product.ID_PRODUTO)" v-model="selected">
                  <option v-for="quantity in quantityArray" :value="quantity">{{ product.ESTOQUE }}</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <router-link
      class="details"
      :to="{
        path: '/product-detail',
        name: 'product-detail-component',
        params: {
          id: product.ID_PRODUTO,
          title: product.PRODUTO,
          price: product.PRECO,
          rating: product.ratings,
          reviews: product.reviews,
          isAddedBtn: product.isAddedBtn
        }
      }"
    >
    </router-link>
  </div>
</template>

<script>


export default {
  name: 'products-component',
  props: ['product'],
  products: [],
  
  data () {
    return {
      addToCartLabel: 'Add ao carrinho',
      viewDetailsLabel: 'Detalhes',
      removeFromCartLabel: 'Remover produto',
      addToFavouriteLabel: 'Add to favourite',
      removeFromFavouriteLabel: 'Remove from favourite',
      selected: 1,
      quantityArray: []
    }
  },

  mounted () {
    console.log('never ends');
   //this.$store.dispatch(getProducts);
    
  },

  computed: {
    isUserLogged () {
      return this.$store.getters.isUserLoggedIn;
    }
  },

  methods: {
     
    addToCart (id) {
      let data = {
        id: ID_PRODUTO,
        status: true
      }
      this.$store.commit('addToCart', ID_PRODUTO);
      this.$store.commit('setAddedBtn', data);
    },
    removeFromCart (id) {
      let data = {
        id: id,
        status: false
      }
      this.$store.commit('removeFromCart', id);
      this.$store.commit('setAddedBtn', data);
    },
    saveToFavorite (id) {
      let isUserLogged = this.$store.state.userInfo.isLoggedIn;

      if (isUserLogged) {
        this.$store.commit('addToFavourite', id);
      } else {
        this.$store.commit('showLoginModal', true);
      }
    },
    removeFromFavourite (id) {
      this.$store.commit('removeFromFavourite', id);
    },
    onSelectQuantity (id) {
      let data = {
        id: this.$store.state.products.ID_PRODUTO,
        quantity: this.selected
      }
      this.$store.commit('quantity', data);
    }
  }
}
</script>

<style lang="scss" scoped>
 .details {
    cursor: pointer;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;

    &:hover {
      border: 1px solid #51bafc;
    }
 }
 .button,
 .select {
   z-index: 2;
 }
 .select {
   position: absolute;
   right: 15px;
 }
</style>


