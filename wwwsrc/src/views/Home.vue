<template>
  <div class="home container-fluid">
    <h1>Welcome Home</h1>
    <Keeps />
    <Dashboard />
    
  </div>
</template>

<script>
import Keeps from "@/Components/Keeps.vue";
import Dashboard from "@/Components/Dashboard.vue";

export default {
  name: "home",
  components: {
    Keeps,
    Dashboard
  },
  mounted() {
    //blocks users not logged in
    if (!this.$store.state.user.id) {
      this.$router.push({ name: "login" });
    }
  },
  mutations: {},
  methods: {}
};
</script>