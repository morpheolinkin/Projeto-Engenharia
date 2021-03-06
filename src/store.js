import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    userInfo: {
      isLoggedIn: false,
      isSignedUp: false,
      hasSearched: false,
      name: '',
      productTitleSearched: ''
    },
    cart: [
      {
      ID_PRODUTO: '',
      CNPJ:'',
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
    }
  ],
    userInfo: {
      isLoggedIn: false, 
      isSignedUp: false,
      hasSearched: false,
      name: '',
      productTitleSearched: ''
    },
    systemInfo: {
      openLoginModal: false,
      openSignupModal: false,
      openCheckoutModal: false
    }
  },
  
  getters: {
    productsAdded: state => {
      return state.products.filter(el => {
       
      });
    },
    productsAddedToFavourite: state => {
      return state.products.filter(el => {
        return el.ID_PRODUTO;
      });
    },
    getProductById: state => id => {
      return state.products.find(product => product.ID_PRODUTO == id);
    },
    isUserLoggedIn: state => {
      return state.userInfo.isLoggedIn;
    },
    isUserSignedUp: state => {
      return state.userInfo.isSignedUp;
    },
    getUserName: state => {
      return state.userInfo.name;
    },
    isLoginModalOpen: state => {
      return state.systemInfo.openLoginModal;
    },
    isSignupModalOpen: state => {
      return state.systemInfo.openSignupModal;
    },
    isCheckoutModalOpen: state => {
      return state.systemInfo.openCheckoutModal;
    },
    quantity: state => {
      return state.products.ESTOQUE;
    }
  },
  
  mutations: {
    addToCart: (state, id) => {
      state.products.forEach(el => {
        if (ID_PRODUTO === el.ID_PRODUTO) {
          el.state.cart.isAddedToCart = true;
        }
      });

    },
    setAddedBtn: (state, data) => {
      state.products.forEach(el => {
        if (data.ID_PRODUTO === el.ID_PRODUTO) {
          el.state.cart.isAddedBtn = data.status;
        }
      });
    },
    removeFromCart: (state, id) => {
      state.products.forEach(el => {
        if (ID_PRODUTO === el.ID_PRODUTO) {
          el.state.cart.isAddedToCart = false;
        }
      });
    },
    removeProductsFromFavourite: state => {
      state.products.filter(el => {
        el.state.cart.isFavourite = false;
      });
    },
    isUserLoggedIn: (state, isUserLoggedIn) => {
      state.userInfo.isLoggedIn = isUserLoggedIn;
    },
    isUserSignedUp: (state, isSignedUp) => {
      state.userInfo.isSignedUp = isSignedUp;
    },
    setHasUserSearched: (state, hasSearched) => {
      state.userInfo.hasSearched = hasSearched;
    },
    setUserName: (state, name) => {
      state.userInfo.name = name;
    },
    setProductTitleSearched: (state, titleSearched) => {
      state.userInfo.productTitleSearched = titleSearched;
    },
    showLoginModal: (state, show) => {
      state.systemInfo.openLoginModal = show;
    },
    showSignupModal: (state, show) => {
      state.systemInfo.openSignupModal = show;
    },
    showCheckoutModal: (state, show) => {
      state.systemInfo.openCheckoutModal = show;
    },
    addToFavourite: (state, id) => {
      state.products.forEach(el => {
        if (ID_PRODUTO === el.ID_PRODUTO) {
          el.state.cart.isFavourite = true;
        }
      });
    },
    removeFromFavourite: (state, id) => {
      state.products.forEach(el => {
        if (id === el.id) {
          el.isFavourite = false;
        }
      });
    },
    quantity: (state, data) => {
      state.products.forEach(el => {
        if (data.ID_PRODUTO === el.ID_PRODUTO) {
          el.ESTOQUE = data.ESTOQUE;
        }
      });
    }
  },
  
  actions: {
    getProducts() {
      //axios aqui
      axios
        .get("http://191.252.103.186/api/produtos")
        .then(response => {
          let list = [];
          console.log(response.data)

          this.state.products = response.data;

          // list = response.data.map(elemento => {
          //   elemento.quantidade = 0;
          //   return elemento;
          //   //list.push(elemento);

          // })
          // this.state.products = list//response.data;
          // this.state.products = this.state.products.slice(0, 10);

        })
        .catch(error => {
          console.log(error);
        });
    },
    addToCart({}, payload){

      console.log(payload)
      axios.post("http://191.252.103.186/api/addToCart")
      .then(response => {
        console.log(response);
      }).catch(
        console.log("Deu merda!!")
      )

    }
  }
});
