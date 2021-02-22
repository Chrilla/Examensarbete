<template>
  <div class="d-flex flex-wrap outline-screen-reader" tabindex="0" v-if="newsIndex <= newsToShow">

        <div class="col-12 col-sm-6 news-item" v-for="newsIndex in newsToShow" :key="newsIndex.newsToShow">
          <div class="small-news">
              <b-badge>{{smallNews[newsIndex - 1].newsPost.badge}}</b-badge>
              <div class="img-div">
                  <img alt="Media image from API" :src='smallNews[newsIndex - 1].newsPost.image'>
              </div>
              <div class="card">
                <router-link to="/"><div class="card-body">
                    <small>{{smallNews[newsIndex - 1].newsPost.date}}</small>
                    <h5 class="card-title mt-2">{{smallNews[newsIndex - 1].newsPost.title}}</h5>
                    <p class="card-text">{{smallNews[newsIndex - 1].newsPost.text}}</p>
                </div></router-link>
                <hr aria-hidden="true" class="mb-2 mt-0">
                <div aria-hidden="true" class="socials d-flex justify-content-between pr-4 pb-2">
                    <small class="pl-4 my-auto">{{smallNews[newsIndex - 1].newsPost.author}}</small>
                    <div>
                        <i class="far fa-eye pr-1"></i><span class="pr-3 ">{{smallNews[newsIndex - 1].newsPost.views}}</span>
                        <i class="far fa-heart pr-1"></i><span class="pr-3">{{smallNews[newsIndex - 1].newsPost.likes}}</span>
                        <i class="far fa-comment-alt pr-1"></i><span>{{smallNews[newsIndex - 1].newsPost.comments}}</span>
                    </div>
                </div>
            </div>
          </div>
      </div>

      <button aria-label="Click to load more news articles" title="Click to load more news articles" v-if="showMore" @click="viewMore" class="news-button mt-4 loader d-flex align-items-center justify-content-center">
        <div v-if="loader" class="d-flex align-items-center">
            <span class="pr-2">Loading more news...</span>
            <b-spinner class="spinner" label="spinner"></b-spinner>
        </div>
        <div v-else>
            <span>Load more news</span>
        </div>
      </button>
      
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    
    components: {
    },

    data() {
        return {
            newsToShow: 4,
            newsIndex: null,
            showMore: true,
            loader: false,
        }
    },

    created() {
    this.$store.dispatch("getSmallnews")
    },

    computed: {
    ...mapGetters(['smallNews'])
    },

    methods: {
        viewMore() {
            this.loader = true;
            setTimeout(() => {
            this.newsToShow += 2;
            this.showMore = this.newsToShow < this.smallNews.length;
            this.loader = false;
            }, 500);
        }
    }
}
</script>

<style scoped>

.outline-screen-reader {
    outline: lawngreen 1;
}

.spinner {
    color: var(--link-theme);
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
.news-button:hover {
    background-color: #c70046d7;
    transition-timing-function: ease-in;
    transition: 0.1s;
}
.news-button:active {
    transform: scale(0.98);
}

p {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;  
  overflow: hidden;
}

.badge {
    position: absolute;
    left: 4%;
    top: 2%;
    background-color: var(--blue-theme);
    padding: 5px;
    font-weight: 600;
    border-radius: 0;
    text-shadow: none;
}

.news-item:nth-child(odd) {
    padding-left: 0;
    padding-right: 7px;
}

.news-item:nth-child(even) {
    padding-left: 7px;
    padding-right: 0;
}

.img-div {
    height: 400px;
    overflow: hidden;
}

.img-div img {
    height: 100%;
    width: 100%;
    object-fit: cover;
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

.socials, .socials i {
    color: #666;
}

.card .socials span {
    font-size: 0.8rem;
}

.card hr {
    height: 1px;
    background-color: var(--main-purple-theme);
    opacity: 0.6
}

.card-body:hover {
    text-decoration: underline;
    background-color: #f6f6f6;
}

a {
  color: var(--main-purple-theme);
}
a:hover {
  color: var(--main-purple-theme);
}

@media (max-width: 576px) {

.news-item:nth-child(odd),
.news-item:nth-child(even) {
    padding-left: 0;
    padding-right: 0px;
}

}

</style>