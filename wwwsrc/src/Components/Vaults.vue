<template>
    <div id="vaults" class="container-fluid">
        <div class="row">
          <div class="col-12">
            <hr />
      <h1>Your Vaults</h1>
      <hr />
      </div>
        </div>
        <div class="row">
      <div v-for="vault in vaults" :key="vault.id" class="col-md-4">
          <div class="user-check" v-if="vault.userId != user.id">
            </div>
        <div v-else class="card">
          <div class="card-header">
            <h4><router-link :to="{name: 'vaultkeep', params: {vaultId: vault.id}}">{{vault.name}}</router-link> | <span class="clickable" @click="deleteVault(vault)"><i class="far fa-trash-alt"></i></span></h4>
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
  props: ["id"],
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
    },
    getVaultKeeps(vault) {
      this.$store.dispatch("getVaultKeeps", vault);
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
