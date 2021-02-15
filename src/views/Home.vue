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

  <b-tabs justified content-class="" class="container pb-5">
    <b-tab>
      <template slot="title">Latest results<i class="fas fa-running pl-2"></i></template>
      <LatestResults/>
    </b-tab>
    <b-tab lazy>
      <template slot="title">Upcoming fixtures<i class="fas fa-stopwatch pl-2"></i></template>
      <UpcomingFixtures/>
    </b-tab>
  </b-tabs>

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
  background: linear-gradient(to right,rgba(52, 0, 64, 0.5), rgba(52, 0, 64, 0.5)), url("../assets/home-bg.jpg");
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

::v-deep .nav-tabs {
  border-radius: none;
  text-align: center;
  margin: auto;
  border-bottom: 1px solid var(--light-blue-theme);
  font-size: 1.2rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

::v-deep .nav-tabs .nav-link {
  margin-bottom: 0;
  border: none;
  font-weight: 500;
  background-color: #c70046a8;
  color: rgba(255, 255, 255, 0.705);
}
::v-deep .nav-tabs .nav-link:hover {
  color: #fff;
  background-color: #c70046d7;
}
::v-deep .nav-tabs .nav-link.active {
  background-color: var(--red-theme);
  color: #fff;
  margin-right: 4px;
  border-bottom: none;
}
::v-deep .nav-tabs .nav-link.active:hover {
  background-color: var(--red-theme);
  color: #fff;
}

</style>
