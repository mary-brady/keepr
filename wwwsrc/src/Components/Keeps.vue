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
                <h3 class="card-header" data-toggle="modal" :data-target="'#keep'+keep.id">{{keep.name}} 
                  <span class="clickable" @click="deleteKeep(keep)"><i class="far fa-trash-alt"></i></span> |
                  <span class="clickable" @click="viewKeep(keep)"><i
                  class="fas fa-ellipsis-h"></i></span>
                </h3>
<!-- KEEP MODAL STUFF -->
<transition name="modal-fade" :id="'keep'+keep.id">
<div class="modal fade" :id="'keep'+keep.id" tabindex="-1" role="dialog" aria-labelledby="keepModal" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="keepTitle">{{keep.name}}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>{{keep.description}}</p>
        <img :src="keep.img"/>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
</transition>
<!-- KEEP MODAL STUFF -->

<!-- EDIT MODAL STUFF -->
<div v-show="editKeepModalVisible">
<transition name="modal-fade">
  <div class="modal-backdrop">
    <div class="modal">
    <header class="modal-header">
        <slot class="header">
            <h2>Edit Keep</h2> &nbsp; &nbsp;
            <span class="clickable"><i class="fas fa-times icon" @click="closeModal"></i></span>
        </slot>
        </header>
        <div class="modal-body">
        <slot class="body">
            <div class="mw">
             <form @submit.prevent="editKeep(keep)">
                <div class="form-group">
                <input type="text" class="form-control mt-1 mb-1" v-model="keepUpdate.name" placeholder="Keep Name"/>
                  <input type="text" class="form-control mt-1 mb-1" v-model="keepUpdate.description" placeholder="Describe it!"/>
                   <br>
                  <input type="text" class="form-control mt-1 mb-1" v-model="keepUpdate.isPrivate" placeholder="Describe it!"/>
                  <input type="text" class="form-control mt-1 mb-1" v-model="keepUpdate.img" placeholder="Image URL?"/>
                  <button class="btn btn-primary mt-1 mb-1 btn-sm" type="submit" @click="closeModal">Save Changes</button>
               </div>
            </form>
            </div>
        </slot>
        </div>
    </div>
</div>
</transition>
</div>
<!-- EDIT MODAL STUFF -->

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
        isPrivate: false
      },
      editKeepModalVisible: false,
      seeKeepModal: false
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
    showModal() {
      this.editKeepModalVisible = true;
    },
    closeModal() {
      this.editKeepModalVisible = false;
    },
    deleteKeep(keep) {
      if (keep.userId == this.user.id) {
        this.$store.dispatch("deleteKeep", keep);
      }
    },
    addToVault(keep) {
      keep.keeps += 1;
      this.$store.dispatch("addToVault", {
        KeepId: keep.id,
        VaultId: this.vault.id
      });
      this.$store.dispatch("updateKeepCounts", keep);
    },
    viewKeep(keep) {
      keep.views += 1;
      this.$store.dispatch("viewKeep", keep);
    },
    editKeep(keep) {
      this.$store.dispatch("updateKeep", {
        Name: this.keepUpdate.name,
        KeepId: keep.id,
        Description: this.keepUpdate.description,
        isPrivate: this.keepUpdate.isPrivate,
        Img: this.keepUpdate.img
      });
      this.keepUpdate = {
        name: "",
        description: "",
        img: "",
        isPrivate: false
      };
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
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}
.icon {
  color: #555;
}
p {
  color: #158cba;
  font-size: small;
}
img {
  max-width: 200px;
  max-height: 200px;
}
</style>
