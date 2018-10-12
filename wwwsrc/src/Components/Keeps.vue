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
                <h3 class="card-header" @click="seeKeep(keep.id)">{{keep.name}} 
                  <span class="clickable" @click="deleteKeep(keep)"><i class="far fa-trash-alt"></i></span> |
                  <span class="clickable" @click="showModal"><i
                  class="fas fa-ellipsis-h"></i></span>
                </h3>

<!-- KEEP MODAL STUFF -->
<div v-show="seeKeepModal">
<transition name="modal-fade">
  <div class="modal-backdrop">
    <div class="modal">
    <header class="modal-header">
        <slot class="header">
            <h2>{{keep.name}}</h2> &nbsp; &nbsp;
            <span class="clickable"><i class="fas fa-times icon" @click="closeModal"></i></span>
        </slot>
        </header>
        <div class="modal-body">
        <slot class="body">
            <div class="mw">
             <p>{{keep.description}}</p>
                <p>Private? {{keep.isPrivate}}</p>
                <select class="custom-select" v-model="vault">
                  <option v-for="vault in vaults" :key="vault.id" :value="vault">{{vault.name}}</option>
                  </select>
                <button @click="addToVault(keep)">Add To Vault</button>
                <button class="btn btn-primary" @click="closeKeep">Done</button>
            </div>
        </slot>
        </div>
    </div>
</div>
</transition>
</div>
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
    seeKeep() {
      this.seeKeepModal = true;
    },
    closeKeep() {
      this.seeKeepModal = false;
    },
    deleteKeep(keep) {
      if (keep.userId == this.user.id) {
        this.$store.dispatch("deleteKeep", keep);
      }
    },
    addToVault(keep) {
      keeps = keep.keeps++;
      this.$store.dispatch("addToVault", {
        KeepId: keep.id,
        VaultId: this.vault.id,
        Keeps: keeps
      });
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
.modal {
  position: relative;
  background: #f6f6f6;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
}
.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
  padding-bottom: 2px;
}
.modal-header {
  border-bottom: 1px solid #158cba;
  color: #158cba;
}
.header {
  justify-content: center;
}
.modal-footer {
  border-top: 1px solid #158cba;
  justify-content: flex-end;
}
.modal-body {
  position: relative;
  padding: 20px 10px;
}
.modal-fade-enter,
.modal-fade-leave-active {
  opacity: 0;
}
.clickable:hover {
  cursor: pointer;
}
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}
.icon {
  color: #555;
}
p {
  color: #158cba;
  font-size: small;
}
</style>
