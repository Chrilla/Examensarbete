<template>

  <div class="">

      <div class="popular-news-heading text-center px-3">Popular news</div>

      <div class="news-bg pb-4">

          <div class="pt-4 container" v-for="item in popularNews" :key="item.popularNews">
            <div class="d-flex">
                <div class="col-5">
                    <img class="" :src='item.newsArticle.image' alt="">
                </div>
                <div class="col-7">
                    <b-badge class="mb-3">{{item.newsArticle.badge}}</b-badge>
                    <h6 class="text-light">{{item.newsArticle.title}}</h6>
                    <small class="text-light">{{item.newsArticle.date}}</small>
                </div>
            </div>
            
            <div class="container"><hr class="mt-4 mb-0"></div>
            
          </div>

      </div>

  </div>

</template>

<script>
import { mapGetters } from 'vuex'

export default {
    components: {

    },
    created() {
    this.$store.dispatch("getPopularnews")
    },

    computed: {
    ...mapGetters(['popularNews'])
    },

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
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

img {
    height: 100%;
    max-width: 100%;
    object-fit: cover;
}

hr {
    height: 1px;
    background-color: var(--white);
    opacity: 0.4;
}

.badge {
    background-color: var(--red-theme);
    border-radius: 0;
    padding: 5px;
    font-size: 0.7rem;
}

</style>