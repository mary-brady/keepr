<template>
    <div id="dashboard">
      <p>
      <p>This is where you will see your vaults</p>
    </div>
</template>
<script>
export default {
  name: "dashboard",
  mounted() {
    this.$store.dispatch("getVaults");
  }
};
</script>
<style scoped>
</style>
