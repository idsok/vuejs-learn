import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    restaurantName: "Café avec vue",
    totalPanier: 0,
    simpleMenu: [
      {
        name: "Croissant",
        image: {
          source: "images/croissant.jpg",
          alt: "Un croissant",
        },
        inStock: true,
        quantity: 1,
        price: 2.99
      },
      {
        name: "Baguette de pain",
        image: {
          source: "images/french-baguette.jpeg",
          alt: "Quatre baguettes de pain",
        },
        inStock: true,
        quantity: 1,
        price: 3.99
      },
      {
        name: "Éclair",
        image: {
          source: "images/eclair.jpg",
          alt: "Éclair au chocolat",
        },
        inStock: false,
        quantity: 1,
        price: 4.99
      },
    ]
  },
  getters: {
    copyright: function (state) {
      const currentYear = new Date().getFullYear();
      return `Copyright ${state.restaurantName} ${currentYear}`;
    }
  },
  mutations: {
    ADD_TO_SHOPPING_CART: function (state, quantity) {
      state.totalPanier += quantity;
    }
  },
  actions: {
    updateShoppingCart: function ({ commit }, quantity) {
      commit('ADD_TO_SHOPPING_CART', quantity)
    }
  },
  modules: {
  }
})
