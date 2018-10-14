<template>
<div class="allkeeps container-fluid">
    <div class="row">
      <div class="col-12">
      <hr />
        <h1>Look At All These Keeps</h1>
      <hr />
        </div>
    </div>
    <div class="row">
        <div v-for="keep in keeps" :key="keep.id" class="col-md-4" v-if="!keep.isPrivate">
            <div class="card mb-2" style="width: 18rem;">
              <div class="card-header">
                    <h4 data-toggle="modal" :data-target="'#keep'+keep.id" @click="viewKeep(keep)">{{keep.name}}</h4>
                    <div v-if="keep.userId == user.id" class="icons">
                  <span class="clickable"><i class="far fa-trash-alt"></i></span> |
                  <span v-if="keep.userId == user.id" class="clickable"><i
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

           <div class="card-body">
                <p>{{keep.description}}</p>
                <p>Private? {{keep.isPrivate}}</p>
                <select class="custom-select" v-model="vault">
                  <option v-for="vault in vaults" :key="vault.id" :value="vault">
                    <template v-if="vault.userId === user.id">
                    {{vault.name}}
                    </template>
                  </option>
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
import Keeps from "@/Components/Keeps.vue";
import Vaults from "@/Components/Vaults.vue";

export default {
  name: "allkeeps",
  components: {
    Keeps,
    Vaults
  },
  data() {
    return {
      vault: {},
      keepUpdate: {
        name: "",
        description: "",
        img: "",
        isPrivate: false
      }
    };
  },
  mounted() {
    this.$store.dispatch("getKeeps");
    this.$store.dispatch("getVaults");
    console.log("AK vaults:", this.vaults);
    console.log("AK user", this.user);
  },
  computed: {
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
    },
    viewKeep(keep) {
      if (keep.userId != this.user.id) {
        keep.views += 1;
        this.$store.dispatch("viewKeep", keep);
      }
    },
    addToVault(keep) {
      keep.keeps += 1;
      this.$store.dispatch("addToVault", {
        KeepId: keep.id,
        VaultId: this.vault.id
      });
      this.$store.dispatch("updateKeepCounts", keep);
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
