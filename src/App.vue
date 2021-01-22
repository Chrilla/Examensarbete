<template>
  <div id="app">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    <router-view/>
  </div>
</template>

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
