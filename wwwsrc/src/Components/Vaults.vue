<template>
    <div id="Vaults" class="container-fluid">
        <div class="row">
      <h1>Your Vaults</h1>
        </div>
        <div class="row">
      <div v-for="vault in vaults" :key="vault._id" class="col-md-3">
        <div class="card">
          <div class="card-header">
            <h3>{{vault.name}}</h3>
          </div>
          <div class="card-body">
            <h6 class="card-subtitle text-muted">{{vault.description}}</h6>
        </div>
        </div>
        </div>
      </div>
      </div>
</template>
<script>
export default {
  name: "vaults",
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
