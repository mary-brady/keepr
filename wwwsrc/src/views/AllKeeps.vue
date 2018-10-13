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
        <div v-for="keep in keeps" :key="keep.id" class="col-md-4">
            <div class="card">
                    <h3 class="card-header" data-toggle="modal" :data-target="'#keep'+keep.id">{{keep.name}}
                  <span class="clickable"><i class="far fa-trash-alt"></i></span> |
                  <span class="clickable"><i
                  class="far fa-edit"></i></span></h3>

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
                  <option v-for="vault in vaults" :key="vault.id" :value="vault" v-if="vault.userId == user.id">
                    {{vault.name}}
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
      vault: {}
    };
  },
  mounted() {
    this.$store.dispatch("getKeeps");
    this.$store.dispatch("getVaults");
    console.log("AK vaults:", this.vaults);
  },
  computed: {
    keeps() {
      return this.$store.state.keeps;
    },
    vaults() {
      return this.$store.state.vaults;
    },
    user() {
      return this.$store.state.vaults;
    }
  }
};
</script>
<style scoped>
</style>
