<template>
  <div class="mb-5 mt-4">
    <div v-if="error" class="error">{{error.message}}</div>
    <b-form class="text-center d-flex flex-column mx-auto w-75" @submit.prevent="pressedRegister">
        <h2 class="mb-5">Register an account</h2>
        <b-form-group class="pb-2">
            <b-form-input type="email" v-model="email" placeholder="Email address..."></b-form-input>
        </b-form-group>

        <b-form-group class="password pb-4">
            <b-form-input type="password" v-model="password" placeholder="Password..."></b-form-input>
        </b-form-group>
        <b-button type="submit">Register</b-button>
    </b-form>
  </div>
</template>

<script>
import firebase from "firebase/app"
import "@firebase/auth"

export default {

    methods: {
        async pressed() {
            try {

           const user = await firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
            console.log(user)
            this.$router.replace({name: "secret"});

            } catch(err) {
                console.log(err)
            }
        }
    },

    data() {
        return {
            email: '',
            password: '',
            error: ''
        }
    }
}

</script>

<style scoped>

input {
    border-radius: 0;
}

button {
    background-color: var(--red-theme);
    border: none;
    border-radius: 0;
    font-weight: 600;
    font-size: 1.4rem;
}

.error {
    color: red;
    font-size: 18px;
}

</style>