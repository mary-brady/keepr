import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import router from './router'

Vue.use(Vuex)

let auth = Axios.create({
  baseURL: "//localhost:5000/account/",
  timeout: 3000,
  withCredentials: true
})

let api = Axios.create({
  baseURL: "//localhost:5000/api/",
  timeout: 3000,
  withCredentials: true
})

export default new Vuex.Store({
  state: {
    user: {},
    keeps: {},
    vaults: {},

  },
  mutations: {
    setUser(state, user) {
      state.user = user
    },
    clearUser(state) {
      state.user = {},
        state.keeps = {},
        state.vaults = {}
    },
    setKeeps(state, data) {
      state.keeps = data
    },
    setVaults(state, vaults) {
      state.vaults = vaults
    }
  },
  actions: {
    register({ commit, dispatch }, newUser) {
      auth.post('register', newUser)
        .then(res => {
          commit('setUser', res.data)
          router.push({ name: 'home' })
        })
        .catch(e => {
          console.log('[registration failed] :', e)
        })
    },
    authenticate({ commit, dispatch }) {
      auth.get('authenticate')
        .then(res => {
          commit('setUser', res.data)
          router.push({ name: 'home' })
        })
        .catch(e => {
          console.log('not authenticated')
        })
    },
    login({ commit }, creds) {
      auth.post('login', creds)
        .then(res => {
          commit('setUser', res.data)
          router.push({ name: 'home' })
        })
        .catch(e => {
          console.log('Login Failed')
        })
    },
    logout({ commit }) {
      auth.delete("Logout").then(() => {
        commit("clearUser");
        router.push({ name: 'login' })
      })
    },
    //Keeps Stuff
    getKeeps({ commit }) {
      api.get('keeps')
        .then(keeps => {
          console.log('Keeps: ', keeps.data)
          commit("setKeeps", keeps.data)
        })
    },
    getVaults({ commit }) {
      api.get('vaults')
        .then(vaults => {
          console.log('Vaults: ', vaults.data)
          commit("setVaults", vaults.data)
        })
    }
  }
})