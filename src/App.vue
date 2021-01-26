<template>

  <div id="app">
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
    Footer
  }
}
</script>

<style>

:root {
  --main-purple-theme: #340040;
  --secondary-purple-theme: #40004F;
  --red-theme: #F2055C;
  --white: #fff;
  --dark-text: #333;
  --light-blue-theme: #07F2F2;
}

#app {
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>
