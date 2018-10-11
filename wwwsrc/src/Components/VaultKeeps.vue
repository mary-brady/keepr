<template>
    
</template>
<script>
export default {
  name: "vaultkeeps",
  mounted: {
    vaultKeeps() {
      return this.$store.state.vaultKeeps;
    },
    user() {
      return this.$store.state.user;
    },
    keeps() {
      return this.$store.state.keeps;
    },
    vaults() {
      return this.$store.state.vaults;
    }
  },
  methods: {
    removeVK(vk) {
      this.$store.dispatch("removeVK", vk);
    },
    moveVK(vk) {
      this.$store.dispatch("moveVK", vk);
    }
  }
};
</script>
<style scoped>
</style>
