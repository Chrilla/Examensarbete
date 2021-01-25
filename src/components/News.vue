<template>

  <div class="my-5 pt-5">

      <div class="news-heading pl-4 mb-3">Featured news</div>

      <BigNews/>
      <SmallNews/>

      <button class="news-button mt-3">Load more news...</button>

  </div>

</template>

<script>

import BigNews from '@/components/BigNews.vue'
import SmallNews from '@/components/SmallNews.vue'

export default {
name: 'News',
  components: {
    BigNews,
    SmallNews
  }
}
</script>

<style scoped>

.news-heading {
    background-color: var(--red-theme);
    border-left: 8px solid var(--white);
    color: var(--white);
    padding: 10px 0px 10px 0px;
    font-weight: 600;
    font-size: 1.9rem;
}

.news-button {
    background-color: var(--red-theme);
    color: var(--white);
    padding: 10px 0px 10px 0px;
    font-weight: 600;
    font-size: 1.9rem;
    border: none;
    width: 100%;
}

</style>