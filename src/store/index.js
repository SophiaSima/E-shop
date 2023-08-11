import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cardsData: [],
  },
  getters: {
    CARDSDATA(state) {
      return state.cardsData;
    },
  },
  mutations: {
    SET_CARDSDATA_TO_STATE: (state, cardsData) => {
      state.cardsData = cardsData;
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
  },
  modules: {},
});
