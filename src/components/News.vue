<template>

  <div class="my-5 pt-5">

      <div class="news-heading pl-4 mb-3">Featured news</div>

      <FeaturedNewsCarousel/>
      <SmallNews/>

  </div>

</template>

<script>

import SmallNews from '@/components/SmallNews.vue'
import FeaturedNewsCarousel from '@/components/FeaturedNewsCarousel.vue'

export default {
name: 'News',
  components: {
    SmallNews,
    FeaturedNewsCarousel
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

</style>