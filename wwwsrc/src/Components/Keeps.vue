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
        <div v-for="keep in keeps" :key="keep._id" class="col-md-4">
        <p v-if="!keep.userId == user.id">You don't have any keeps!</p>
            <div class="card">
                <h3 class="card-header">{{keep.name}} <span class="clickable" @click="deleteKeep(keep)"><i class="far fa-trash-alt"></i></span></h3>
            <div class="card-body">
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
export default {
  name: "keeps",
  mounted() {
    this.$store.dispatch("getKeeps");
  },
  computed: {
    keeps() {
      return this.$store.state.keeps;
    },
    user() {
      console.log("user: ", this.$store.state.user);
      return this.$store.state.user;
    }
  },
  methods: {
    deleteKeep(keep) {
      if (keep.userId == this.user.id) {
        this.$store.dispatch("deleteKeep", keep);
      }
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
