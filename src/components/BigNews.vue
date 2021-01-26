<template>

      <div  class="big-news">
          <div v-for="newscontent in news" v-bind:key="newscontent.title" class="card">
            <div class="card-body">

                <small>{{ newscontent.date }}</small>
                <h5 class="mt-2">{{ newscontent.title }}</h5>
                <p class="card-text">{{ newscontent.text }}</p>
            </div>
            <span class="socials text-right pr-4 pb-2">
                <i class="far fa-eye pr-1"></i><span class="pr-3 ">3247</span>
                <i class="far fa-heart pr-1"></i><span class="pr-3">689</span>
                <i class="far fa-comment-alt pr-1"></i><span>23</span>
            </span>
        </div>
      </div>

</template>

<script>
import { db } from '../firebase';

export default {
    data() {
        return {
            news: []
        };
    },

    created () {
        db.collection('news').get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
                this.news.push(doc.data())
            })
        })
    },
};
</script>

<style scoped>

.big-news {
    background: url("../assets/home-bg.svg");
    background-size: contain;
    background-color: var(--main-purple-theme);
    height: 450px;
    position: relative;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.card {
    position: absolute;
    bottom: 0;
    border-radius: 0;
}

.card-body {
    padding: 10px 20px 0px 20px;
}

.card .socials span {
    font-size: 0.8rem;
}
.card .socials i {
    color: var(--main-purple-theme);
}

</style>