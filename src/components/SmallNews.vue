<template>
  <div class="d-flex flex-wrap">

      <div class="col-6 news-item" v-for="item in smallNews" :key="item.id">
          <div class="small-news">
              <img :src='item.smallnew.image'>
              <div class="card">
                <div class="card-body">
                    <small>Januari 14th, 2021</small>
                    <h5 class="card-title mt-2">TITEL</h5>
                    <p class="card-text">{{item.smallnew.text}}</p>
                </div>
                <hr class="mb-2 mt-0">
                <div class="socials d-flex justify-content-between pr-4 pb-2">
                    <small class="pl-4 my-auto">John Doe</small>
                    <div>
                        <i class="far fa-eye pr-1"></i><span class="pr-3 ">3247</span>
                        <i class="far fa-heart pr-1"></i><span class="pr-3">689</span>
                        <i class="far fa-comment-alt pr-1"></i><span>23</span>
                    </div>
                </div>
            </div>
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
    this.$store.dispatch("getSmallnews")
    },

    computed: {
    ...mapGetters(['smallNews'])
    },

}
</script>

<style scoped>

.news-item:nth-child(odd) {
    padding-left: 0;
    padding-right: 7px;
}

.news-item:nth-child(even) {
    padding-left: 7px;
    padding-right: 0;
}

img {
    object-fit: cover;
    width: 100%;
    min-height: 450px;
}

.small-news {
    background-color: var(--main-purple-theme);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    margin-top: 15px;
    position: relative;
}

.small-news .card {
    bottom: 0;
    border-radius: 0;
}

.card .socials span {
    font-size: 0.8rem;
}
.card .socials i {
    color: var(--main-purple-theme);
}

.card hr {
    height: 1px;
    background-color: var(--main-purple-theme);
    opacity: 0.6
}

</style>