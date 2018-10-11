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
    keeps: [],
    vaults: [],
    vaultKeeps: []

  },
  mutations: {
    setUser(state, user) {
      state.user = user
    },
    clearUser(state) {
      state.user = {},
        state.keeps = [],
        state.vaults = []
    },
    setKeeps(state, data) {
      state.keeps = data
    },
    setVaults(state, vaults) {
      state.vaults = vaults
    },
    setVaultKeeps(state, vaultKeeps) {
      state.vaultKeeps = vaultKeeps
    }
  },
  actions: {
    register({ commit }, newUser) {
      auth.post('register', newUser)
        .then(res => {
          commit('setUser', res.data)
          router.push({ name: 'home' })
        })
        .catch(e => {
          console.log('[registration failed] :', e)
        })
    },
    authenticate({ commit }) {
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
    addKeep({ dispatch }, keepData) {
      api.post('keeps', keepData.keepData)
        .then(keeps => {
          dispatch("getKeeps")
        })
    },
    deleteKeep({ dispatch }, keepData) {
      api.delete('keeps/' + keepData.id)
        .then(res => {
          dispatch('getKeeps')
        })
    },
    //Vaults Stuff
    getVaults({ commit }) {
      api.get('vaults')
        .then(vaults => {
          console.log('Vaults: ', vaults.data)
          commit("setVaults", vaults.data)
        })
    },
    addVault({ dispatch }, vaultData) {
      api.post('vaults', vaultData.vaultData)
        .then(vaults => {
          dispatch("getVaults")
        })
    },
    deleteVault({ dispatch }, vaultData) {
      api.delete('vaults/' + vaultData.id)
        .then(res => {
          dispatch('getVaults')
        })
    },
    getVaultKeeps({ commit }, vault) {
      debugger
      api.get('vaultkeeps/' + vault.id)
        .then(vk => {
          console.log('vk: ', vk.data)
          commit("setVaultKeeps", vk.data)
        })
    },
    moveVK({ dispatch }, vk) {
      api.put('vaultkeeps/' + vk.id)
        .then(res => {
          dispatch("setVaultKeeps", res.data)
        })
    },
    removeVK({ dispatch }, vk) {
      api.delete('vaultkeeps/' + vk.id)
        .then(res => {
          dispatch("setVaultKeeps", res.data)
        })
    }
  }
})