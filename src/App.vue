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
  --blue-theme: #933FFF;
  --link-theme: #7FC4FD;
}

#app {
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

* {
  scrollbar-width: thin;
  scrollbar-color: rgb(165, 165, 165) #333;
}

/* Works on Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: 12px;
}

*::-webkit-scrollbar-track {
  background: #333;
}

*::-webkit-scrollbar-thumb {
  background-color: gray;
  border-radius: 20px;
}

</style>
