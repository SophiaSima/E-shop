import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cardsData: [],
    cart: [],
  },
  getters: {
    CARDSDATA(state) {
      return state.cardsData;
    },
    CART(state) {
      return state.cart;
    },
  },
  mutations: {
    SET_CARDSDATA_TO_STATE: (state, cardsData) => {
      state.cardsData = cardsData;
    },
    SET_CART: (state, cardsData) => {
      if (state.cart.length) {
        let isCardsDataInCart = false;
        state.cart.map(function (item) {
          if (item.article === cardsData.article) {
            isCardsDataInCart = true;
            item.quantity++;
          }
        });
        if (!isCardsDataInCart) {
          state.cart.push(cardsData);
        }
      } else {
        state.cart.push(cardsData);
      }
    },
    REMOVE_FROM_CART: (state, index) => {
      state.cart.splice(index, 1);
    },
  },
  actions: {
    GET_CARDSDATA_FROM_API({ commit }) {
      // npm install axios
      // npm install -g json-server
      // json-server --watch db.json
      return axios("http://localhost:3000/cardsData", {
        method: "GET",
      })
        .then((cardsData) => {
          commit("SET_CARDSDATA_TO_STATE", cardsData.data);
          return cardsData;
        })
        .catch((error) => {
          console.log(error);
          return error;
        });
    },

    ADD_TO_CART({ commit }, cardsData) {
      commit("SET_CART", cardsData);
    },

    DELETE_FROM_CART({ commit }, index) {
      commit("REMOVE_FROM_CART", index);
    },
  },
  modules: {},
});
