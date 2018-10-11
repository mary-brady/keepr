<template>
<div id="vaultkeeps">
    <div class="header">
        <h1>Vault Name Here...</h1>
        {{vaultKeeps}}
    </div>
</div>
</template>
<script>
export default {
  name: "vaultkeeps",
  mounted() {
    return this.$store.dispatch("getVaultKeeps");
  },
  computed: {
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
