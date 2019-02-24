<template>
  <div>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <router-link :to="{ path: '/', name: 'homepage-component' }" class="navbar-item">
          <div class="marca">
            <h1>Zap-Compras</h1>
          </div>
        </router-link>
        

        <a
          role="button"
          class="navbar-burger burger"
          @click="isMenuOpen = !isMenuOpen"
          aria-label="menu"
          aria-expanded="false"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
 <b-navbar-nav>
    <b-nav-item href="#">Promoções</b-nav-item>
                    </b-navbar-nav>
                    <b-nav-item-dropdown >
                        <template slot="button-content">
                            <em>Produtos</em>
                        </template>
                      <b-dropdown-item href="#"> >Produtos de Limpenza</b-dropdown-item>
                      <b-dropdown-item href="#">  >Produtos n/Per..</b-dropdown-item>
                    </b-nav-item-dropdown>

                    <b-nav-item-dropdown >
                        <template slot="button-content">
                            <em>Mercados</em>
                        </template>
                      <b-dropdown-item href="#"> >Pague Mais</b-dropdown-item>
                      <b-dropdown-item href="#"> >Baratino</b-dropdown-item>
                    </b-nav-item-dropdown>
              </b-navbar-nav>                    
      <div class="navbar-menu is-active">
        <div class="navbar-start">
          <div class="navbar-item field">
            <search-component></search-component>
          </div>
        </div>

        <div class="navbar-end">
          <div class="navbar-item social">
            <a href="#" class="icon" :title="facebookTooltip">
              <i class="fab fa-facebook"></i>
            </a>
            <a href="#" class="icon" :title="twitterTooltip">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#" class="icon" :title="instagramTooltip">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="#" class="icon" :title="linkedinTooltip">
              <i class="fab fa-linkedin"></i>
            </a>
          </div>
          <div class="navbar-item shopping-cart" @click="showCheckoutModal">
            <span class="icon">
              <i class="fa fa-shopping-cart"></i>
            </span>
            <span :class="[numProductsAdded > 0 ? 'tag is-info' : '']">{{ numProductsAdded }}</span>
          </div>
        </div>
      </div>

      <!-- For mobile and tablet -->
      <div v-show="isMenuOpen" class="navbar-end">
        <menu-component></menu-component>
      </div>

      <!-- For desktop -->
      <div class="navbar-end is-hidden-mobile">
        <menu-component></menu-component>
      </div>
    </nav>
  </div>
</template>

<script>
import Menu from "../menu/Menu";
import Search from "../search/Search";

export default {
  name: "header-component",

  data() {
    return {
      linkedinTooltip: "Follow us on Linkedin",
      facebookTooltip: "Follow us on Facebook",
      twitterTooltip: "Follow us on Twitter",
      instagramTooltip: "Follow us on Instagram",
      isCheckoutActive: false,
      isMenuOpen: false
    };
  },

  computed: {
    numProductsAdded() {
      return this.$store.getters.productsAdded.length;
    }
  },

  components: {
    "search-component": Search,
    "menu-component": Menu
  },

  methods: {
    showCheckoutModal() {
      this.$store.commit("showCheckoutModal", true);
    }
  }
};
</script>

<style lang="scss" scoped>
.title {
  background-position: 50% ;
  background-size: 100px;
  width: 300px;
  height: 35px;
}
.shopping-cart {
  cursor: pointer;
}
a {
  color: grey;
}
.marca {
   color: red;
}
  .navbar{
    position: fixed;
    z-index: 99;
    margin-top: 0%;
    width: 100%;
    height: 10%;
    border-bottom: solid 3px #ff4000;
  }
</style>
