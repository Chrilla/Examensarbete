<template>
  <div class="d-flex">
      
      <!-- <div class="d-flex mr-5">
        <span class="pr-2">Logged in:</span>
        <span v-if="loggedIn">Yes</span>
        <span v-else>No</span>
      </div> -->

    <span v-if="loggedIn"></span>
    <span class="pr-3" v-else v-b-modal.modal-register>Register account</span>
    <b-modal v-if="showModal" id="modal-register" title="Register an account" hide-footer centered>
        <RegisterModal/>
    </b-modal>

    <span v-if="loggedIn" @click="signOut">Sign out<i class="fas fa-user ml-2"></i></span>
    <span v-else v-b-modal.modal-login>Sign in<i class="fas fa-user ml-2"></i></span>
    <b-modal modal-class="modal-bg" v-if="showModal" id="modal-login" title="Login or register an account" hide-footer centered>
        <LoginModal/>
    </b-modal>

  </div>
</template>

<script>
import firebase from "firebase/app"
import "@firebase/auth"
import LoginModal from './LoginModal.vue'
import RegisterModal from './RegisterModal.vue'

export default {

    components: {
        LoginModal,
        RegisterModal
    },

    data() {
        return {
            loggedIn: false,
            showModal: true
        }
    },

    created() {
        firebase.auth().onAuthStateChanged(user => {
            if(user){
                this.loggedIn = true;
                this.showModal = false;
            } else {
                this.loggedIn = false;
                this.showModal = true;
            }
        })
    },
    methods: {
        async signOut(){
            try {

                const data = await firebase.auth().signOut();
                console.log(data);
                this.$router.replace({name: "Home"})
            } catch(err) {
                console.log(err)
            }
        }
    }
}
</script>

<style scoped>

::v-deep .modal-body {
  background-color: var(--main-purple-theme);
  color: white;
  font-family: 'Poppins', sans-serif;
}

::v-deep .modal-header {
  background-color: var(--red-theme);
  color: white;
  font-family: 'Poppins', sans-serif;
  border: none;
  border-radius: 0;
}

::v-deep .modal-header .close {
  color: black;
  text-shadow: none;
  font-size: 2rem;
  padding: 0;
  margin: 0;
}

::v-deep .nav-tabs {
  width: 75%;
  border-radius: none;
  text-align: center;
  margin: auto;
  border-bottom: 2px solid #fff;
}

::v-deep .nav-tabs li {
  width: 50%;
}

::v-deep .nav-tabs .nav-link {
  color: #fff;
  margin-bottom: 0;
  border: none;
  border-radius: 0;
}

::v-deep .nav-tabs .nav-link:hover {
  color: #fff;
  background-color: var(--red-theme);
  border: none;
}

::v-deep #modal-login {
  padding-right: 0!important;
}

</style>