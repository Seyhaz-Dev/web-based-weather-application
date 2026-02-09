import { createStore } from "vuex"

export default createStore({
  state: {
    isLoggedIn: false,

    travels: [
      {
  image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
  tag: "Desert Node",
  title: "Sahara Adventure",
  description: "Ride camels and explore golden sand dunes.",
  features: ["Camel Ride", "Desert Camp"],
  reverse: false,
},


    ],
  },

  mutations: {
    loggedIn(state) {
      state.isLoggedIn = true
    },

    loggedOut(state) {
      state.isLoggedIn = false
    },
  },

  getters: {
    getTravels(state) {
      return state.travels
    },

    isAuth(state) {
      return state.isLoggedIn
    },
  },
})
