<template>
    <div id="vaults" class="container-fluid">
        <div class="row">
      <h1>Your Vaults</h1>
        </div>
        <div class="row">
      <div v-for="vault in vaults" :key="vault.id" class="col-md-4">
        <p v-if="!vault.userId == user.id">You don't have any vaults!<p>
        <div class="card">
          <div class="card-header">
            <router-link :to="{name: 'vaultkeep', query: {vaultId: vault.id}}">{{vault.name}} | <span class="clickable" @click="deleteVault(vault)"><i class="far fa-trash-alt"></i></span></router-link>
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
import VaultKeep from "@/views/VaultKeep.vue";

export default {
  name: "vaults",
  components: {
    VaultKeep
  },
  mounted() {
    this.$store.dispatch("getVaults");
  },
  computed: {
    vaults() {
      return this.$store.state.vaults;
    },
    user() {
      return this.$store.state.user;
    }
  },
  methods: {
    deleteVault(vault) {
      if (vault.userId == this.user.id) {
        this.$store.dispatch("deleteVault", vault);
      }
    }
  }
};
</script>
<style scoped>
i {
  color: #555;
  font-size: large;
}
</style>
