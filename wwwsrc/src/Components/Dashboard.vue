<template>
    <div id="dashboard" class="container-fluid">
      <h1>Dashboard</h1>
      <p>This is your dashbuuuurd</p>
    </div>
</template>
<script>
export default {
  name: "dashboard",
  mounted() {
    this.$store.dispatch("getVaults");
  },
  computed: {
    vaults() {
      return this.$store.state.vaults;
    }
  }
};
</script>
<style scoped>
</style>
