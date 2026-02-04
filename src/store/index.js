import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      isLoggedIn: false
    }   
  },
  mutations: {
    loggedIn(state) {
      state.isLoggedIn = true
    },
    loggedOut(state) {
      state.isLoggedIn = false
    }
  }
})
