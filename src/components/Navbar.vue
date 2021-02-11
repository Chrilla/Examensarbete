<template>
  <div>

    <div class="topbar py-2 d-flex justify-content-between align-items-center">
      <div class="social-icons">
        <a href="#" title="Link to Facebook"><i class="fab fa-facebook"></i></a>
        <a href="#" title="Link to Twitter"><i class="fab fa-twitter"></i></a>
        <a href="#" title="Link to Instagram"><i class="fab fa-instagram"></i></a>
      </div>

      <div class="sign-in">
        <span><NavAccount/></span>
      </div>
    </div>

  <b-navbar role="navigation" class="navbar" toggleable="lg">
  <a href="/">
    <b-navbar-brand class="navbar-brand"><img src="@/assets/brandlogo.svg" alt="brand logo" aria-label="Brand logo, click to go to startpage"></b-navbar-brand>
    <span>Premier League Hub</span>
  </a>

    <b-navbar-toggle tabindex="0" target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item><router-link to="/">Home</router-link></b-nav-item>
        <b-nav-item><router-link to="/news">News</router-link></b-nav-item>
        <b-nav-item><router-link to="/fixtures">Fixtures</router-link></b-nav-item>
        <b-nav-item><router-link to="/table">Table</router-link></b-nav-item>
        <b-nav-item><router-link to="/clubs">Clubs</router-link></b-nav-item>
        <b-nav-item><router-link to="/players">Players</router-link></b-nav-item>
        <b-nav-item><router-link to="/stats">Stats</router-link></b-nav-item>
        <b-nav-item><router-link to="/chat">Chat</router-link></b-nav-item>
        <b-nav-item><router-link to="/history">History</router-link></b-nav-item>
        <b-nav-item><router-link to="/about">About</router-link></b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <form class="ml-auto">
        <div class="input-wrapper">
          <b-form-input aria-label="Enter your search in the searchfield" size="sm" id="searchfield" type="search" placeholder="Enter your search here..."></b-form-input>
          <b-button title="Searchfield submit button" for="searchfield" class="fas fa-search input-icon" type="submit"></b-button>
        </div>

      </form>
    </b-collapse>
  </b-navbar>

</div>
</template>

<script>
import NavAccount from "./NavAccount.vue"

export default {
  name: 'Navbar',
    components: {
      NavAccount,
  }
}
</script>

<style scoped>

.topbar {
  background: var(--secondary-purple-theme);
  color: var(--white);
  box-shadow:0px 1px 8px black;
  position: relative;
  z-index: 2;
}

.social-icons {
  padding-left: 15px;
}
.social-icons i {
  padding-left: 5px;
  padding-right: 5px;
  font-size: 1.25rem;
  color: var(--light-blue-theme);
}

.sign-in {
  padding-right: 20px;
  color: var(--light-blue-theme);
}

.navbar {
  background: linear-gradient(to right,rgba(52, 0, 64, 0.301), rgba(52, 0, 64, 0.301)), url("../assets/navbar-bg.jpg");
  background-size: cover;
  background-color: var(--main-purple-theme);
  color: var(--light-blue-theme);
  position: relative;
  z-index: 1;
}

.navbar span {
  font-weight: 600;
  font-size: 1.5rem;
}

.navbar-light .navbar-nav .nav-link {
  color: var(--light-blue-theme);
  font-size: 1.1rem;
  font-weight: 500;
  padding: 20px;
}
.navbar-light .navbar-nav .nav-link:hover, .nav-link a:hover {
  color: var(--red-theme);
  text-decoration: none;
}

.navbar-brand {
  padding-left: 10px;
}

.form-control-sm {
  background-color: var(--secondary-purple-theme);
  border: none;
  border-radius: 0;
  height: 2.5rem;
}
.form-control-sm::placeholder {
  color: var(--light-blue-theme);
  opacity: 0.7;
}
.form-control-sm:focus::placeholder {
  background-color: var(--secondary-purple-theme);
  color: #fff;
  opacity: 1;
}
.form-control-sm:focus {
  background-color: var(--main-purple-theme);
  color: #fff;
  box-shadow: none;
}

.input-icon{
  position: absolute;
  right: 3px;
  top: calc(50% - 0.9em); /* Keep icon in center of input, regardless of the input height */
  border: none;
  background: none;
  opacity: 0.4;
}
input{
  padding-left: 15px;
}
.input-wrapper{
  position: relative;
}

a {
  color: var(--light-blue-theme);
}
a:hover {
  text-decoration: none;
  color: #fff;
}

a.router-link-exact-active {
  color: #fff;
  background-color: transparent;
  padding: 3px 6px 3px 6px;
  border-left: 3px solid var(--red-theme);
  border-right: 3px solid var(--red-theme);
  border-top: 3px solid var(--red-theme);
}

</style>
