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
                <h3 class="card-header">{{keep.name}} 
                  <span class="clickable" @click="deleteKeep(keep)"><i class="far fa-trash-alt"></i></span> | 
                  <span class="clickable" @click="nameFormVisible = !nameFormVisible"><i
                  class="fa fa-edit"></i></span>
                </h3>
      <form v-if="nameFormVisible" @submit.prevent="updateKeepName(keep)" class="form-inline">
        <input type="text" name="name" v-model="keepUpdate.name" placeholder="New Keep Name" />
        <button class="btn btn-primary btn-sm">Submit</button>
      </form>
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
      vault: {},
      keepUpdate: {
        name: "",
        description: "",
        img: "",
        isPrivate: boolean
      },
      nameFormVisible: false,
      descFormVisible: false,
      imgFormVisible: false,
      isPrivate: false
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
      keep.keeps++;
      this.$store.dispatch("addToVault", {
        KeepId: keep.id,
        VaultId: this.vault.id
      });
    },
    updateKeepName(keep) {
      this.$store.dispatch("updateKeepName", {
        Name: this.keepUpdate.name,
        KeepId: keep.id,
        Description: keep.description
      });
      this.nameFormVisible = false;
      this.keepUpdate.name = "";
    },
    updateKeepDesc(keep) {
      this.$store.dispatch("updateKeepDesc", {
        Name: this.keepUpdate.name,
        KeepId: keep.id,
        Description: keep.description
      });
      this.nameFormVisible = false;
      this.keepUpdate.name = "";
    },
    updateKeepImg(keep) {
      this.$store.dispatch("updateKeepImg", {
        Name: this.keepUpdate.name,
        KeepId: keep.id,
        Description: keep.description,
        Img: keep.img
      });
      this.nameFormVisible = false;
      this.keepUpdate.name = "";
    },
    updateKeepPrivate(keep) {
      this.$store.dispatch("updateKeepPrivate", {
        Name: this.keepUpdate.name,
        KeepId: keep.id,
        Description: keep.description,
        IsPrivate: keep.isPrivate
      });
      this.nameFormVisible = false;
      this.keepUpdate.name = "";
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
