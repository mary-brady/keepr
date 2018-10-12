<template>
<div class="keeps container-fluid">
    <div class="row">
      <div class="col-12">
      <hr />
        <h1>Your Keeps</h1>
      <hr />
        </div>
    </div>
    <div class="row">
        <div v-for="keep in keeps" :key="keep.id" class="col-md-4">
        <p v-if="!keep.userId == user.id">You don't have any keeps!</p>
            <div class="card">
                <h3 class="card-header">{{keep.name}} <span class="clickable" @click="deleteKeep(keep)"><i class="far fa-trash-alt"></i></span></h3>
            <div class="card-body">
                <p>{{keep.description}}</p>
                <p>Private? {{keep.isPrivate}}</p>
                <select class="custom-select" v-model="vault">
                  <option v-for="vault in vaults" :key="vault.id" :value="vault">{{vault.name}}</option>
                  </select>
                <button @click="addToVault(keep)">Add To Vault</button>
            </div>
            <div class="card-footer">
              <i class="far fa-eye"></i> {{keep.views}} | <i class="far fa-save"></i> {{keep.keeps}} | <i class="fas fa-share"></i> {{keep.shares}}
            </div>
            </div>
        </div>
            
        </div>
    </div>
</template>
<script>
export default {
  name: "keeps",
  data() {
    return {
      vault: {}
    };
  },
  mounted() {
    this.$store.dispatch("getKeeps");
  },
  computed: {
    keeps() {
      return this.$store.state.keeps;
    },
    user() {
      return this.$store.state.user;
    },
    vaults() {
      return this.$store.state.vaults;
    }
  },
  methods: {
    deleteKeep(keep) {
      if (keep.userId == this.user.id) {
        this.$store.dispatch("deleteKeep", keep);
      }
    },
    addToVault(keep) {
      let keeps = keep.keeps;
      keeps++;
      this.$store.dispatch("addToVault", {
        KeepId: keep.id,
        VaultId: this.vault.id
      });
    }
  }
};
</script>
<style scoped>
.clickable:hover {
  cursor: pointer;
}
i {
  color: #555;
  font-size: small;
}
</style>
