<template>
  <div class="mb-5 mt-4">
    <div v-if="error" class="error">{{error.message}}</div>
    <b-form class="text-center d-flex flex-column mx-auto w-75" @submit.prevent="pressedRegister">
        <h2 class="mb-5">Register an account</h2>
        <b-form-group class="pb-2">
            <b-form-input aria-label="Enter your email address" title="Enter your email address" type="email" v-model="email" placeholder="Email address..."></b-form-input>
        </b-form-group>

        <b-form-group class="password pb-4">
            <b-form-input aria-label="Enter your password" title="Enter your password" type="password" v-model="password" placeholder="Password..."></b-form-input>
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
        async pressedRegister() {
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
button:hover {
  background-color: #c70046d7;
  color: #fff;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  transition-timing-function: ease-in;
  transition: 0.1s;
}
button:focus {
    background-color: #c70046d7;
    box-shadow: none;
}
button:active {
    transform: translateY(5%);
    background-color: #c70046d7!important;
    box-shadow: none;
}

.form-control:focus {
    box-shadow: none;
}
.form-control:focus::placeholder {
    color: var(--main-purple-theme);
}

.error {
    color: red;
    font-size: 18px;
}

</style>