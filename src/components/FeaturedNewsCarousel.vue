<template>
  <div class="news-carousel" tabindex="0" aria-label="Featured news carousel" >
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
      v-for="newscontent in news" v-bind:key="newscontent.news"
    >
      <router-link to="/"><b-carousel-slide>
        <template #img>
          <div class="img-div">
                <b-badge>{{newscontent.category[0]}}</b-badge>
                <img class="d-block img-fluid w-100" width="1024" height="480" :src='newscontent.image[0]' alt="Photo of Luka Modric">
            </div>
            <div class="card-body">
                <small>{{ newscontent.date[0] }}</small>
                <h5 class="mt-2">{{ newscontent.title[0] }}</h5>
                <p class="mb-0">{{ newscontent.text }}</p>
                <span class="socials d-flex justify-content-end pr-4 pb-2">
                    <i class="far fa-eye pr-1 my-auto"></i><span class="pr-3 ">{{newscontent.views[0]}}</span>
                    <i class="far fa-heart pr-1 my-auto"></i><span class="pr-3">{{newscontent.likes[0]}}</span>
                    <i class="far fa-comment-alt pr-1 my-auto"></i><span>{{newscontent.comments[0]}}</span>
                </span>
            </div>
        </template>
      </b-carousel-slide></router-link>

      <router-link to="/"><b-carousel-slide>
        <template #img>
          <div class="img-div">
                <b-badge>{{newscontent.category[0]}}</b-badge>
                <img class="d-block img-fluid w-100" width="1024" height="480" :src='newscontent.image[1]' alt="Photo of Harry Kane">
            </div>
            <div class="card-body">
                <small class="no-hover">{{ newscontent.date[1] }}</small>
                <h5 class="mt-2">{{ newscontent.title[1] }}</h5>
                <p class="mb-0">{{ newscontent.text }}</p>
                <span class="socials d-flex justify-content-end pr-4 pb-2">
                    <i class="far fa-eye pr-1 my-auto"></i><span class="pr-3 ">{{newscontent.views[1]}}</span>
                    <i class="far fa-heart pr-1 my-auto"></i><span class="pr-3">{{newscontent.likes[1]}}</span>
                    <i class="far fa-comment-alt pr-1 my-auto"></i><span>{{newscontent.comments[1]}}</span>
                </span>
            </div>
        </template>
      </b-carousel-slide></router-link>

      <router-link to="/"><b-carousel-slide>
        <template #img>
          <div class="img-div">
                <b-badge>{{newscontent.category[1]}}</b-badge>
                <img class="d-block img-fluid w-100" width="1024" height="480" :src='newscontent.image[2]' alt="Photo of Virgil van Dijk">
            </div>
            <div class="card-body">
                <small>{{ newscontent.date[2] }}</small>
                <h5 class="mt-2">{{ newscontent.title[2] }}</h5>
                <p class="mb-0">{{ newscontent.text }}</p>
                <span aria-hidden="true" class="socials d-flex justify-content-end pr-4 pb-2">
                    <i class="far fa-eye pr-1 my-auto"></i><span class="pr-3">{{newscontent.views[2]}}</span>
                    <i class="far fa-heart pr-1 my-auto"></i><span class="pr-3">{{newscontent.likes[2]}}</span>
                    <i class="far fa-comment-alt pr-1 my-auto"></i><span>{{newscontent.comments[2]}}</span>
                </span>
            </div>
        </template>
      </b-carousel-slide></router-link>

    </b-carousel>
  </div>
</template>

<script>
import { db } from '../firebase';

  export default {
    data() {
      return {
        slide: 0,
        sliding: null,
        news: []
      }
    },
    methods: {
      onSlideStart() {
        this.sliding = true
      },
      onSlideEnd() {
        this.sliding = false
      }
    },
    created () {
        db.collection('news').get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
                this.news.push(doc.data())
            })
        })
    },
  }
</script>

<style scoped>

::v-deep .carousel-indicators {
    display: none;
}

::v-deep .carousel-control-next-icon:focus {
  outline: 1px dotted;
}

.news-carousel {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    background-color: var(--main-purple-theme);
}
.news-carousel:focus {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    background-color: var(--main-purple-theme);
    outline: 1px dotted #fff;
}

.news-carousel img {
    object-fit: cover;
    width: 100%;
    min-height: 250px;
    max-height: 400px;
}
.news-carousel img:hover {
    cursor: pointer;
}

.img-div {
    position: relative;
}

.badge {
    position: absolute;
    left: 2%;
    top: 3%;
    background-color: var(--blue-theme);
    padding: 5px;
    font-weight: 600;
    border-radius: 0;
    text-shadow: none;
}
.card {
    border-radius: 0;
    border: none;
}

.card-body {
    background-color: #fff;
    padding: 10px 20px 0px 20px;
    bottom: 0;
    text-shadow: none;
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

.card .socials span {
    font-size: 0.8rem;
}
.card .socials i {
    color: var(--main-purple-theme);
}

</style>