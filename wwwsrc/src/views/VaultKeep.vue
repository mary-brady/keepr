<template>
    <div class="vaultkeep container-fluid">
        <div class="row">
            <div class="col-12">
                <hr />
            <h1>{{activeVault.name}}</h1>
                <hr />
            </div>
        </div>
        <div class="row">
            <div class="col-12">
            <h6 class="text-muted">{{activeVault.description}}</h6>
            </div>
            </div>
        <div class="row">
            <div class="col-md-4" v-for="keep in keepList" :key="keep.id">
                 <p v-if="keep.length = 0">You don't have anything in here!</p>
            <div class="card">
                <h3 class="card-header">{{keep.name}} | <span class="clickable" @click="removeKeep(keep)"><i class="far fa-trash-alt"></i></span></h3>
            <div class="card-body">
            <img style="height: 200px; width: 100%; display: block;" :src="keep.img" alt="Card image">
                <p>{{keep.description}}</p>
                <p>Private? {{keep.isPrivate}}</p>
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

export default {
  name: "vaultkeeps",
  props: ["vaultId"],

  mounted() {
    let vaultId = this.$route.params.vaultId;
    this.$store.dispatch("activeVault", this.vaultId);
  },
  computed: {
    keepList() {
      return this.$store.state.vaultKeeps;
    },
    activeVault() {
      return this.$store.state.activeVault;
    }
  },
  methods: {
    removeKeep(keep) {
      let vaultId = this.$route.params.vaultId;
      this.$store.dispatch("removeFromVault", { keep, vaultId });
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
