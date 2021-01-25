<template>

  <div class="home">

<div class="home-bg"></div>
    <div class="container d-flex">
      <div class="col-8"><News/></div>
      <div class="col-4 table p-0">
        <div class=""><Table/></div>
        <div class=""><PopularNews/></div>
      </div>
    </div>
    
  <NewsletterBanner/>

<div class="container">
  <UpcomingFixtures/>
  <LatestResults/>
</div>

  <ForumBanner/>
  <CardDeck/>

  </div>
  
</template>

<script>

import News from '@/components/News.vue'
import Table from '@/components/Table.vue'
import PopularNews from '@/components/PopularNews.vue'
import NewsletterBanner from '@/components/NewsletterBanner.vue'
import UpcomingFixtures from '@/components/UpcomingFixtures.vue'
import LatestResults from '@/components/LatestResults.vue'
import ForumBanner from '@/components/ForumBanner.vue'
import CardDeck from '@/components/CardDeck.vue'

export default {
  name: 'Home',
  components: {
    News,
    Table,
    PopularNews,
    NewsletterBanner,
    UpcomingFixtures,
    LatestResults,
    ForumBanner,
    CardDeck
  }
}
</script>

<style scoped>

.home {
  background: linear-gradient(to right,rgba(52, 0, 64, 0.5), rgba(52, 0, 64, 0.5)), url("../assets/home-bg-abstract.svg");
  background-size: contain;
  background-position: center top;
  background-color: var(--main-purple-theme);
}

.home-bg {
  background: linear-gradient(to right,rgba(52, 0, 64, 0.5), rgba(52, 0, 64, 0.5)), url("../assets/home-bg.svg");
  background-size: cover;
  background-color: var(--main-purple-theme);
  border-top: 4px solid var(--red-theme);
  border-bottom: 4px solid var(--red-theme);
  height: 100%;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
}

</style>
