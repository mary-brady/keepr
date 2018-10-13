<template>
    <div id="dashboard" class="container-fluid">
      <h4>What would you like to do?</h4>
      <hr />
      <button class="btn btn-primary" @click="showKeepModal">Add Keep</button>
      <UploadModal v-show="isUploadModalVisible" @close="closeKeepModal"></UploadModal> |
      <button class="btn btn-primary" @click="showVaultModal">Add Vault</button>
      <NewVaultModal v-show="isVaultModalVisible" @close="closeVaultModal"></NewVaultModal> |
      <router-link :to="{name: 'allkeeps'}"><button class="btn btn-primary">Peruse Keeps</button></router-link>


    </div>
</template>
<script>
import UploadModal from "@/Components/UploadModal.vue";
import NewVaultModal from "@/Components/NewVaultModal.vue";

export default {
  name: "dashboard",
  components: {
    UploadModal,
    NewVaultModal
  },
  data() {
    return {
      isUploadModalVisible: false,
      isVaultModalVisible: false
    };
  },
  mounted() {
    this.$store.dispatch("getVaults");
  },
  methods: {
    showKeepModal() {
      this.isUploadModalVisible = true;
    },
    closeKeepModal() {
      this.isUploadModalVisible = false;
    },
    showVaultModal() {
      this.isVaultModalVisible = true;
    },
    closeVaultModal() {
      this.isVaultModalVisible = false;
    }
  }
};
</script>
<style scoped>
</style>
