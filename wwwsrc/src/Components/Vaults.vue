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
            <h4><router-link :to="{name: 'vaultkeep', params: {vaultId: vault.id}}">{{vault.name}}</router-link></h4> 
            <div class="icons"> 
              <span class="clickable" @click="deleteVault(vault)"><i class="far fa-trash-alt"></i></span> |
              <span class="clickable" data-toggle="modal" :data-target="'#editVault'+vault.id"><i
                  class="far fa-edit"></i></span>
            </div>
          </div>
        <div class="card-body">
            <h6 class="card-subtitle text-muted">{{vault.description}}</h6>
            </div>
<!-- EDIT VAULT STUFF -->
<transition name="modal-fade" :id="'editVaule'+vault.id">
<div class="modal fade" :id="'editVault'+vault.id" tabindex="-1" role="dialog" aria-labelledby="editKeepModal" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="editKeepModal">Edit {{vault.name}}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form>
          <div class="form-group">
            <label for="recipient-name" class="col-form-label">Name:</label>
            <input type="text" class="form-control" v-model="editVault.name">
          </div>
          <div class="form-group">
            <label for="message-text" class="col-form-label">Description:</label>
            <textarea class="form-control" v-model="editVault.desc"></textarea>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" @click="vaultEdit(vault)" data-dismiss="modal">Save</button>
      </div>
    </div>
  </div>
</div>
</transition>
</div>
<!-- EDIT VAULT STUFF -->
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
  data() {
    return {
      editVault: {
        name: "",
        desc: ""
      }
    };
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
    },
    vaultEdit(vault) {
      this.$store.dispatch("editVault", {
        name: this.editVault.name,
        id: vault.id,
        description: this.editVault.desc,
        userId: this.user.id
      });
      this.editVault = {
        name: "",
        desc: ""
      };
    }
  }
};
</script>
<style scoped>
i {
  color: #555;
  font-size: x-small;
}
</style>
