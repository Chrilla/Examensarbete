<template>
  <div>
    Logged in:
    <span v-if="loggedIn">Yes</span>
    <span v-else>No</span>
    <div>
      <button @click="signOut">Sign out</button>
  </div>

    <b-button v-b-modal.modal-login>Login</b-button>
    <b-modal id="modal-login" title="BootstrapVue">
        <LoginModal/>
    </b-modal>

    <b-button v-b-modal.modal-register>Register</b-button>
    <b-modal id="modal-register" title="BootstrapVue">
        <RegisterModal/>
    </b-modal>

    <router-link to="/secret">Secret</router-link>
  </div>
</template>

<script>
import firebase from "firebase/app"
import "@firebase/auth"
import LoginModal from '@/components/LoginModal.vue'
import RegisterModal from './RegisterModal.vue'

export default {

components: {
    LoginModal,
    RegisterModal
},

    created() {
        firebase.auth().onAuthStateChanged(user => {
            if(user){
                this.loggedIn = true;
            } else {
                this.loggedIn = false;
            }
        })
    },
    data() {
        return {
            loggedIn: false
        }
    },
    methods: {
        async signOut(){
            try {

                const data = await firebase.auth().signOut();
                console.log(data);
                this.$router.replace({name: "login"})
            } catch(err) {
                console.log(err)
            }
        }
    }
}
</script>

<style scoped>

</style>