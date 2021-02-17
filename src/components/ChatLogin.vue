<template>
  <div class="login-container text-center d-flex align-items-center">
    <button class="mx-auto" @click="loginSubmit">Click here to login with your Google account to use the chat<i class="fas fa-sign-in-alt pl-2"></i></button>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import "@firebase/auth"

export default {
  methods: {
    loginSubmit() {
      const provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithRedirect(provider)
        .catch(console.log)
    }
  }
}
</script>

<style scoped>

.login-container {
  background: linear-gradient(to right,rgba(52, 0, 64, 0.5), rgba(52, 0, 64, 0.5)), url("../assets/home-bg.jpg");
  background-size: cover;
  background-color: var(--main-purple-theme);
  border-top: 4px solid var(--red-theme);
  height: 58.9vh;
}

button {
  width: 50%;
  background-color: var(--red-theme);
  color: white;
  font-weight: 600;
  font-size: 1.5rem;
  padding: 20px;
  border-radius: 4px;
  border: none;
  box-shadow: #00000040 0px 5px 10px;
  cursor: pointer;
}

button:hover {
    background-color: #b40042;
}

@media (max-width: 768px) {

button {
  width: 100%;
  margin-left: 20px!important;
  margin-right: 20px!important;
}

}

</style>