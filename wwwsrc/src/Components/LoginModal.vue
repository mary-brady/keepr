<template>
<transition name="modal-fade">
<div class="modal-backdrop">
<div class="modal">
    <header class="modal-header">
        <slot class="header">
            <h2>Login or Register</h2> &nbsp; &nbsp;
            <span class="clickable"><i class="fas fa-times icon" @click="close"></i></span>
        </slot>
        </header>
        <div class="modal-body">
        <slot class="body">
            <div class="mw">
             <form v-if="registerForm" @submit.prevent="loginUser">
                <div class="form-group">
                <input type="text" class="form-control mt-1 mb-1" v-model="creds.email" placeholder="Email"/>
                  <input type="password" class="form-control mt-1 mb-1" v-model="creds.password" placeholder="Password"/>
                  <button class="btn btn-primary mt-1 mb-1 btn-sm" type="submit" @click="close">Login</button>
               </div>
            </form>
            <form v-else @submit.prevent="register">
                <div class="form-group">
                    <input type="text" class="form-control mt-1 mb-1" v-model="newUser.username" placeholder="Username">
                    <input type="email" class="form-control mt-1 mb-1" v-model="newUser.email" placeholder="Email">
                    <input type="password" class="form-control mt-1 mb-1" v-model="newUser.password" placeholder="Password">
                    <button class="btn btn-primary mt-2" type="submit">Create Account</button>
                </div>
        </form>
            </div>
        </slot>
        <div @click="registerForm = !registerForm">
            &nbsp;
            <p v-if="registerForm" class="clickable">No account? Click to Register!</p>
            <p v-else class="clickable">Already have an account?</p>
        </div>
        </div>
    </div>

</div>
</transition>
</template>
<script>
export default {
  name: "LoginModal",
  mounted() {
    //checks for valid session
    this.$store.dispatch("authenticate");
  },
  data() {
    return {
      registerForm: true,
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
    },
    close() {
      this.$emit("close");
    }
  }
};
</script>
<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal {
  position: relative;
  background: #f6f6f6;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
}
.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
  padding-bottom: 2px;
}
.modal-header {
  border-bottom: 1px solid #158cba;
  color: #158cba;
}
.header {
  justify-content: center;
}
.modal-footer {
  border-top: 1px solid #158cba;
  justify-content: flex-end;
}
.modal-body {
  position: relative;
  padding: 20px 10px;
}
.modal-fade-enter,
.modal-fade-leave-active {
  opacity: 0;
}
.clickable:hover {
  cursor: pointer;
}
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}
.icon {
  color: #555;
}
p {
  color: #158cba;
  font-size: small;
}
</style>
