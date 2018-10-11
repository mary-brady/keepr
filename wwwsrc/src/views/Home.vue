<template>
  <div class="home container-fluid">
    <h1>Welcome, {{user.username}}!</h1>
    <Dashboard />
    <Keeps />
    <br>
    <Vaults />
    
  </div>
</template>

<script>
import Keeps from "@/Components/Keeps.vue";
import Dashboard from "@/Components/Dashboard.vue";
import Vaults from "@/Components/Vaults.vue";

export default {
  name: "home",
  components: {
    Keeps,
    Vaults,
    Dashboard
  },
  mounted() {
    //blocks users not logged in
    if (!this.$store.state.user.id) {
      this.$router.push({ name: "login" });
    }
  },
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  mutations: {},
  methods: {}
};
</script>