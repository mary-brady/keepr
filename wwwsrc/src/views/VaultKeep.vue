<template>
    <div class="vaultkeep container-fluid">
        <div class="row">
            <h1>Hello?</h1>
            <div class="col-md-3" v-for="keep in keepList" :key="keep.id">
                 <p v-if="keep.length = 0">You don't have anything in here!</p>
            <div class="card">
                <h3 class="card-header">{{keep.name}} | <span class="clickable" @click="deleteKeep(keep)"><i class="far fa-trash-alt"></i></span></h3>
            <div class="card-body">
                <p>{{keep.description}}</p>
                <p>Private? {{keep.isPrivate}}</p>
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
    this.$store.dispatch("getVaultKeeps", this.vaultId);
  },
  computed: {
    keepList() {
      return this.$store.state.vaultKeeps[this.vaultId];
    }
  }
};
</script>
<style scoped>
</style>
