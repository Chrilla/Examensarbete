<template>
  <div class="mt-5 mb-3">
    <b-tabs active-nav-item-class="" active-tab-class="" content-class="mt-5">
        
        <b-tab title="Sign in" active>
            <div class="error" v-if="error">{{error.message}}</div>
            <b-form class="text-center d-flex flex-column mx-auto w-75" @submit.prevent="pressedLogin">
                <h2 class="mb-4">Sign in</h2>
                <b-form-group class="pb-2">
                    <b-form-input title="Enter your email address" type="email" placeholder="Email address..." v-model="email"></b-form-input>
                </b-form-group>
                
                <b-form-group class="password pb-4">
                    <b-form-input title="Enter your password" type="password" v-model="password" placeholder="Password..."></b-form-input>
                    <a href="#"><small class="forgot-password d-flex justify-content-end pt-2">Forgot your password?</small></a>
                </b-form-group>
                <b-button type="submit" class="sign-in-button d-flex justify-content-center align-items-center">Sign in<i class="fas fa-sign-in-alt pl-2"></i></b-button>
                <small class="py-3">or sign in with your Google account</small>
                <button @click="googleLogin" class="google-button mx-auto d-flex justify-content-center">
                    <img class="google-icon mx-auto" width="30px" alt="Google sign-in" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"/>
                </button>
            </b-form>
        </b-tab>
        
        <b-tab title="Register">
            <div v-if="error" class="error">{{error.message}}</div>
            <b-form class="text-center d-flex flex-column mx-auto w-75" @submit.prevent="pressedRegister">
                <h2 class="mb-4">Register an account</h2>
                <b-form-group class="pb-2">
                    <b-form-input title="Enter your email" type="email" v-model="email" placeholder="Email address..."></b-form-input>
                </b-form-group>

                <b-form-group class="password pb-4">
                    <b-form-input title="Enter your password" type="password" v-model="password" placeholder="Password..."></b-form-input>
                </b-form-group>
                <b-button class="register-button" type="submit">Register</b-button>
            </b-form>
        </b-tab>
        
  </b-tabs>

  </div>
</template>

<script>
import firebase from "firebase/app"
import "@firebase/auth"

export default {
    data() {
        return {
            email: '',
            password: '',
            error: '',
            loggedIn: false,
        }
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

    methods: {

    async pressedLogin() {
        try {

        const val = await firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        console.log(val)
        this.$router.replace({name: "secret"})
        } catch(err) {
            console.log(err)
        }
    },

    async pressedRegister() {
            try {

            const user = await firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
            console.log(user)
            this.$router.replace({name: "secret"});

            } catch(err) {
                console.log(err)
            }
        },

        googleLogin() {
        const provider = new firebase.auth.GoogleAuthProvider()
        firebase.auth().signInWithRedirect(provider)
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
.sign-in-button:hover, .register-button:hover {
  background-color: #c70046d7;
  color: #fff;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  transition-timing-function: ease-in;
  transition: 0.1s;
}
.sign-in-button:focus, .register-button:focus {
    background-color: #c70046d7;
    box-shadow: none;
}
.sign-in-button:active, .register-button:active {
    transform: translateY(5%);
    background-color: #c70046d7!important;
    box-shadow: none;
}

.error {
    color: red;
    font-size: 18px;
}

.google-button {
    background-color: transparent;
    width: 15%;
}
.google-icon:hover {
    cursor: pointer;
    transition-timing-function: ease-in;
    transition: 0.1s;
    transform: scale(1.1);
}
.google-icon:active {
    transform: translateY(5%);
}

.forgot-password {
    color: var(--link-theme);
}

.form-control:focus {
    box-shadow: none;
}
.form-control:focus::placeholder {
    color: var(--main-purple-theme);
}

</style>