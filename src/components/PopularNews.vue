<template>

  <div class="">
      <div class="popular-news-heading text-center px-3">Popular news</div>
      <div class="news-bg"></div>
  </div>

</template>

<script>
export default {

}
</script>

<style scoped>

.popular-news-heading {
    background-color: var(--red-theme);
    border-left: 8px solid var(--white);
    color: var(--white);
    padding: 14.2px 0px 14.2px 0px;
    font-weight: 600;
    font-size: 1.55rem;
    
}

.news-bg {
    background-color: var(--main-purple-theme);
    height: 600px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

</style>