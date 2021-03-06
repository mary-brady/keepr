import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import router from './router'

Vue.use(Vuex)

var production = !window.location.host.includes('localhost');
var baseUrl = production ? '/' : '//localhost:5000/';

let auth = Axios.create({
  baseURL: baseUrl + "account/",
  timeout: 3000,
  withCredentials: true
})

let api = Axios.create({
  baseURL: baseUrl + "api/",
  timeout: 3000,
  withCredentials: true
})

export default new Vuex.Store({
  state: {
    user: {},
    keeps: [],
    vaults: [],
    activeVault: {},
    vaultKeeps: []

  },
  mutations: {
    setUser(state, user) {
      state.user = user
      console.log("user: ", user)
    },
    clearUser(state) {
      state.user = {},
        state.keeps = [],
        state.vaults = []
    },
    setKeeps(state, keeps) {
      state.keeps = keeps
      console.log("all keeps: ", keeps)
    },
    setVaults(state, vaults) {
      state.vaults = vaults
    },
    setVaultKeeps(state, vaultKeeps) {
      state.vaultKeeps = vaultKeeps
    },
    setActiveVault(state, vaultId) {
      state.activeVault = state.vaults.find(vault => vault.id == vaultId)
      console.log('activeVault = ', state.activeVault)
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
    updateKeep({ dispatch }, keepData) {
      debugger
      api.put('keeps', keepData)
        .then(res => {
          console.log(res)
          dispatch('getKeeps')
        })
    },

    updateKeepCounts({ dispatch }, keep) {
      api.put('keeps', keep)
        .then(res => {
          dispatch('getKeeps')
        })
    },
    viewKeep({ dispatch }, keep) {
      api.put('keeps', keep)
        .then(res => {
          dispatch('getKeeps')
        })
    },
    //Vaults Stuff
    getVaults({ commit }) {
      api.get('vaults')
        .then(vaults => {
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
    editVault({ dispatch }, vaultData) {
      debugger;
      api.put('vaults', vaultData)
        .then(res => {
          dispatch("getVaults")
        })
    },
    activeVault({ commit, dispatch }, vaultId) {
      commit('setActiveVault', vaultId)
      dispatch('getVaultKeeps', vaultId)
    },
    getVaultKeeps({ commit }, vaultId) {
      api.get('vaultkeeps/' + vaultId)
        .then(res => {
          console.log('vk: ', res.data)
          commit("setVaultKeeps", res.data)
        })
    },
    addToVault({ dispatch }, keep) {
      api.post('vaultkeeps', keep)
        .then(res => {
          dispatch("getVaultKeeps", res.data.id)
        })
    },
    removeFromVault({ dispatch }, { keep, vaultId }) {
      debugger;
      api.delete('vaultkeeps/' + vaultId + '/' + keep.id)
        .then(res => {
          dispatch('getVaultKeeps', vaultId)
        })
    }
  }
})