<template>
    <div class="vaultkeep container-fluid">
        <div class="row">
                <h1 class="font">{{vaults.name}}</h1>
                <h4 class="font">{{vaults.description}}</h4>
            <div class="col-md-3" v-for="vk in vaultkeeps" :key="vk.id">
                 <p v-if="!keep.userId == user.id">You don't have anything in here!</p>
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
export default {
  name: "vaultkeeps",
  mounted() {
    this.$store.dispatch("getKeeps");
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
  }
};
</script>
<style scoped>
</style>
