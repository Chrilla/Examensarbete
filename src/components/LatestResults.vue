<template>
  
  <div>

    <div class="news-heading pl-4 d-flex justify-content-between">Latest results
        <div v-if="loader" class="loader d-flex align-items-center justify-content-center pr-4">
            <span class="text-white pr-3">Loading results...</span>
            <b-spinner class="spinner" label="spinner"></b-spinner>
        </div>
    </div>

    <div class="fixtures-div container pt-2 pb-3">

            <div class="fixture pt-2" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="limit">
                <div v-for="result in latestResults" v-bind:key="result.latestResults">
                <div class="d-flex justify-content-between align-items-center">
                    <div class="col-5 col-sm-4"><span class="fixture-team">{{result.homeTeam.name}}</span></div>

                    <div class="d-flex">
                        <img class="d-none d-lg-block" src="@/assets/manutd-badge.svg" alt="Club crest home team">
                        <div class="text-center">
                            <div class="fixture-time mx-4">
                                <span class="pr-3">{{result.score.fullTime.homeTeam}}</span>
                                <span class="score-line"></span>
                                <span class="pl-3">{{result.score.fullTime.awayTeam}}</span>
                            </div>
                            <small class="fixture-date text-white">{{result.utcDate.charAt(0)+""+result.utcDate.charAt(1)+""+result.utcDate.charAt(2)+""+result.utcDate.charAt(3)+""+result.utcDate.charAt(4)+""+result.utcDate.charAt(5)+""+result.utcDate.charAt(6)+""+result.utcDate.charAt(7)+""+result.utcDate.charAt(8)+""+result.utcDate.charAt(9)}}</small>
                        </div>
                        <img class="d-none d-lg-block" src="@/assets/manutd-badge.svg" alt="Club crest away team">
                    </div>
                    
                    <div class="col-5 col-sm-4 text-right"><span class="fixture-team">{{result.awayTeam.name}}</span></div>
                </div>
                <hr>
            </div>
        </div>

    </div>
  </div>

</template>

<script>

import api from '../api'

export default {

    data () {
    return {
      latestResults: [],
      limit: 7,
      busy: false,
      loader: false,
    }
  },

    methods: {
        
        loadMore() {
            this.loader = true;
            this.busy = true;
        api.get('competitions/PL/matches?status=FINISHED')
        .then(response => { const append = response.data.matches.reverse().slice(
            this.latestResults.length,
            this.latestResults.length + this.limit,
        );
        setTimeout(() => {
        this.latestResults = this.latestResults.concat(append);
        this.busy = false;
        this.loader = false;
    }, 500);
    });
  }
},

created() {
    this.loadMore();
  }
}

</script>

<style scoped>

.news-heading {
    background-color: var(--secondary-purple-theme);
    border-left: 8px solid var(--red-theme);
    color: #fff;
    padding: 10px 0px 10px 0px;
    font-weight: 600;
    font-size: 1.9rem;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    position: relative;
}

.fixtures-div {
    background-color: var(--main-purple-theme);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    max-height: 512px;
    overflow: scroll;
    overflow-x: hidden;
}

h4 {
    color: var(--white);
    font-size: 1.7rem;
    font-weight: 600;
}

span {
    color: var(--white);
}

hr {
    height: 1px;
    background-color: var(--white);
    opacity: 0.2;
    margin-top: 10px;
    margin-bottom: 12px;
}

.fixture-team {
    font-weight: 600;
    font-size: 1.5rem;
}

.fixture-time {
    font-weight: 600;
    background-color: var(--red-theme);
    border-radius: 0;
    padding: 2px 15px 2px 15px;
    font-size: 1.4rem;
    min-width: 5.6rem;
}

.fixture-date {
    font-weight: 500;
    font-size: 0.7rem;
}

.fixture img {
    height: 3.5rem;
    width: 3.5rem;
}

.score-line {
    border-right: 1.5px solid rgba(255, 255, 255, 0.39);
}

.loader span {
    font-weight: 600;
    font-size: 1.3rem;
}

.loader .spinner {
    color: var(--link-theme);
}

@media (max-width: 992px) {

.fixture-team {
    font-size: 1rem;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;  
    overflow: hidden;
    text-align: center;
}

.fixture-time {
    font-size: 1rem;
    padding-left: 5px!important;
    padding-right: 5px!important;
    margin-left: 5px!important;
    margin-right: 5px!important;
    min-width: 3.75rem;
}
.fixture-time span {
    padding-left: 0px!important;
    padding-right: 0px!important;
    margin-left: 5px;
    margin-right: 5px;
}

.fixtures-div {
    padding: 5px;
}

.news-heading {
    font-size: 1.2rem;
}

}

</style>