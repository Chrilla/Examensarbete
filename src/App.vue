<template>

  <div id="app">
    <!-- <router-link to="/secret">Secret</router-link> -->
    <Navbar/>
    <router-view/>
    <Footer/>
  </div>
  
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Navbar,
    Footer,
  }
}
</script>

<style>

:root {
  --main-purple-theme: #38003c;
  --secondary-purple-theme: #40004F;
  --red-theme: #e90052;
  --light-blue-theme: #04f5ff;
  --link-theme: #7FC4FD;
}

#app {
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>
