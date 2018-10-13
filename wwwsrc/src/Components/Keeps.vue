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
          <div class="user-check" v-if="keep.userId != user.id">
            <!-- <div class="row">
              <div class="col-12">
                <p>You don't have any keeps! :(</p>
              </div>
            </div> -->
          </div>
            <div v-else class="card">
              <div class="card-header">
                 <h4 data-toggle="modal" :data-target="'#keep'+keep.id" @click="viewKeep(keep)">{{keep.name}}</h4>
                 <div class="icons"> 
                  <span class="clickable" @click="deleteKeep(keep)"><i class="far fa-trash-alt"></i></span> |
                  <span class="clickable" data-toggle="modal" :data-target="'#editKeep'+keep.id"><i
                  class="far fa-edit"></i></span>
                  </div>
                  </div>
                
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
<transition name="modal-fade" :id="'editKeep'+keep.id">
<div class="modal fade" :id="'editKeep'+keep.id" tabindex="-1" role="dialog" aria-labelledby="editKeepModal" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="editKeepModal">Edit {{keep.name}}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form>
          <div class="form-group">
            <label for="recipient-name" class="col-form-label">Name:</label>
            <input type="text" class="form-control" :value="keepUpdate.name">
          </div>
          <div class="form-group">
            <label for="message-text" class="col-form-label">Description:</label>
            <textarea class="form-control" id="message-text"></textarea>
          </div>
          <div class="form-check">
            <label class="form-check-label">
            <input class="form-check-input" type="checkbox" :value="keepUpdate.isPrivate = true">
              Keep Private?
            </label>
      </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save</button>
      </div>
    </div>
  </div>
</div>
</transition>
<!-- EDIT MODAL STUFF -->

            <div class="card-body">
                <p class="keep-text">{{keep.description}}</p>
                <p class="keep-text">Private? {{keep.isPrivate}}</p>
                <select class="custom-select" v-model="vault">
                  <option v-for="vault in vaults" :key="vault.id" :value="vault">{{vault.name}}</option>
                  </select>
                <button @click="addToVault(keep)">Add To Vault</button>
            </div>
            <div class="card-footer">
              <i @click="viewKeep(keep)" class="far fa-eye clickable"></i> {{keep.views}} | <i class="far fa-save"></i> {{keep.keeps}} | <i class="fas fa-share"></i> {{keep.shares}}
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
    console.log("keeps user: ", this.user);
  },
  computed: {
    keeps() {
      return this.$store.state.keeps;
    },
    user() {
      return this.$store.state.user;
      console.log("keeps user: ", user);
    },
    vaults() {
      return this.$store.state.vaults;
    }
  },
  methods: {
    showEditModal() {
      this.editKeepModalVisible = true;
    },
    closeEditModal() {
      this.editKeepModalVisible = false;
    },
    deleteKeep(keep) {
      this.$store.dispatch("deleteKeep", keep);
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
      if (keep.userId != this.user.Id) {
        keep.views += 1;
        this.$store.dispatch("viewKeep", keep);
      }
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
img {
  max-width: 200px;
  max-height: 200px;
}
</style>
