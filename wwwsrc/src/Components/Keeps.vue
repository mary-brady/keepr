<template>
<div class="keeps container-fluid">
    <div class="title">
        <h1>Keeps</h1>
        <div v-for="keep in keeps" :key="keep._id" class="col-md-4">
            <div class="card">
                <h3 class="card-header">{{keep.name}}</h3>
            <div class="card-body">
                <p>{{keep.description}}</p>
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
    }
  }
};
</script>
<style scoped>
</style>
