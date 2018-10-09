<template>
  <div class="home container-fluid">
    <h1>Welcome Home</h1>
    <button @click="logout()">Logout</button>
  </div>
</template>

<script>
export default {
  name: "home",
  mounted() {
    //blocks users not logged in
    if (!this.$store.state.user.id) {
      this.$router.push({ name: "login" });
    }
  },
  mutations: {},
  methods: {
    logout() {
      this.$store.dispatch("logout");
    }
  }
};
</script>