<template>
    <div class="login container-fluid">
        <div class="row">
            <div class="col-md-3  mt-3 text-left">
        <form v-if="loginForm" @submit.prevent="loginUser">
            <h3 class="underline">Login to Keepa!</h3>
            <input type="email" v-model="creds.email" placeholder="email">
            <input type="password" v-model="creds.password" placeholder="password">
            <div class="col-md-3">
            <button class="btn btn-primary mt-3" type="submit">Login</button>
            </div>
        </form>
        <form v-else @submit.prevent="register">
            <h3 class="underline">Register for Keepa!</h3>
            <input type="text" v-model="newUser.username" placeholder="name">
            <input type="email" v-model="newUser.email" placeholder="email">
            <input type="password" v-model="newUser.password" placeholder="password">
            <button class="btn btn-primary mt-2" type="submit">Create Account</button>
        </form>
        <div @click="loginForm = !loginForm">
            &nbsp;
            <p v-if="loginForm">No account? Click to Register!</p>
            <p v-else>Already have an account? Click to Login!</p>
        </div>
        </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "login",
  mounted() {
    //checks for valid session
    this.$store.dispatch("authenticate");
  },
  data() {
    return {
      loginForm: true,
      creds: {
        email: "",
        password: ""
      },
      newUser: {
        email: "",
        password: "",
        username: ""
      }
    };
  },
  methods: {
    register() {
      this.$store.dispatch("register", this.newUser);
    },
    loginUser() {
      this.$store.dispatch("login", this.creds);
    }
  }
};
</script>

<style scoped>
.underline {
  border-bottom: 2px solid black;
  width: 250px;
}
</style>
