<template>
  <div class="pl-3 login-container d-flex justify-content-center align-items-center">
      <h1 class="text-center">You are now logged in. Welcome to Premier League Hub!</h1>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.login-container {
  background: linear-gradient(to right,rgba(52, 0, 64, 0.705), rgba(52, 0, 64, 0.705)), url("../assets/home-bg.jpg");
  background-size: cover;
  background-color: var(--main-purple-theme);
  border-top: 4px solid var(--red-theme);
  height: 58.9vh;
}

h1 {
  color: white;
  font-weight: 600;
  font-size: 2.5rem;
  padding: 20px;
  border-radius: 4px;
}

</style>