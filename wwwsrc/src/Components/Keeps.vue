<template>
<div class="keeps container-fluid">
    <div class="row">
        <h1>Your Keeps</h1>
    </div>
    <div class="row">
        <div v-for="keep in keeps" :key="keep._id" class="col-md-4">
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
  name: "keeps",
  mounted() {
    this.$store.dispatch("getKeeps");
  },
  computed: {
    keeps() {
      return this.$store.state.keeps;
    },
    users() {
      return this.$store.state.user;
    }
  },
  methods: {
    deleteKeep(keep) {
      debugger;
      if (keep.userId == this.userId) {
      }
      this.$store.dispatch("deleteKeep");
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
  font-size: large;
}
</style>
