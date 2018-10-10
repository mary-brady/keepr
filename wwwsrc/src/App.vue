<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <a class="navbar-brand" href="#"><strong>Keepa!</strong></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarColor01">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <router-link to="/login">Login</router-link>
      </li>
      <li class="nav-item">
        <button class="btn btn-secondary" @click="showModal()">Login</button>
        <modal v-show="isModalVisible" @close="closeModal()"> </modal>
      </li>
      <li class="nav-item">
      </li> &nbsp;&nbsp;
    <span class="clickable" @click="logout()"><i class="fas fa-sign-out-alt"></i></span>
    </ul>
  </div>
</nav>
    <router-view />
  </div>
</template>

<script>
import register from "@/Components/LoginModal.vue";

export default {
  data() {
    return {
      isModalVisible: false
    };
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    }
  },
  components: {
    LoginModal
  }
};
</script>


<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.clickable:hover {
  cursor: pointer;
}
.clickable {
  font-size: x-large;
  color: #f6f6f6;
}
</style>