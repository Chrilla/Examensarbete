<template>
  
  <div class="pt-5 pb-5">

    <div class="news-heading pl-4 d-flex justify-content-between">Upcoming fixtures
        <div v-if="loader" class="loader d-flex align-items-center justify-content-center pr-4">
            <span class="text-white pr-3">Loading fixtures...</span>
            <b-spinner class="spinner" label="spinner"></b-spinner>
        </div>
    </div>

    <div class="fixtures-div container pt-2 pb-3">

            <div class="fixture pt-2" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="limit">
                <div v-for="fixture in upcomingFixtures" v-bind:key="fixture.upcomingFixtures">
                <div class="d-flex justify-content-between align-items-center">
                    <div class="col-4"><span class="fixture-team">{{fixture.homeTeam.name}}</span></div>

                    <div class="d-flex">
                        <img src="@/assets/manutd-badge.svg" alt="Home team club crest">
                        <div class="text-center">
                            <div class="fixture-time mx-4">
                                <span>{{fixture.utcDate.charAt(11)+""+fixture.utcDate.charAt(12)+""+fixture.utcDate.charAt(13)+""+fixture.utcDate.charAt(14)+""+fixture.utcDate.charAt(15)}}</span>
                            </div>
                            <small class="fixture-date text-white">{{fixture.utcDate.charAt(0)+""+fixture.utcDate.charAt(1)+""+fixture.utcDate.charAt(2)+""+fixture.utcDate.charAt(3)+""+fixture.utcDate.charAt(4)+""+fixture.utcDate.charAt(5)+""+fixture.utcDate.charAt(6)+""+fixture.utcDate.charAt(7)+""+fixture.utcDate.charAt(8)+""+fixture.utcDate.charAt(9)}}</small>
                        </div>
                        <img src="@/assets/manutd-badge.svg" alt="Away team club crest">
                    </div>
                    
                    <div class="col-4 text-right"><span class="fixture-team">{{fixture.awayTeam.name}}</span></div>
                </div>
                <hr>
            </div>
        </div>
        
    </div>
  </div>

</template>

<!-- TEAM FORM -->

<!-- <div class="current-form col-3">
    <h4 class="text-center">Current form</h4>

    <img class="pr-2" src="@/assets/manutd-badge-small.svg" alt="">
    <span class="last-five">Last five:
        <b-badge class="win-badge ml-1 mr-1">W</b-badge>
        <b-badge class="win-badge mr-1">W</b-badge>
        <b-badge class="loss-badge mr-1">L</b-badge>
        <b-badge class="draw-badge mr-1">D</b-badge>
        <b-badge class="loss-badge">L</b-badge>
    </span>

    <br class="mb-2">

    <img class="pr-2" src="@/assets/manutd-badge-small.svg" alt="">
    <span class="last-five">Last five:
        <b-badge class="win-badge ml-1 mr-1">W</b-badge>
        <b-badge class="win-badge mr-1">W</b-badge>
        <b-badge class="loss-badge mr-1">L</b-badge>
        <b-badge class="draw-badge mr-1">D</b-badge>
        <b-badge class="loss-badge">L</b-badge>
    </span>

    <hr class="form-hr">
</div> -->

<script>

import api from '../api'

export default {

    data () {
    return {
      upcomingFixtures: [],
      limit: 7,
      busy: false,
      loader: false,
    }
  },

    methods: {

    loadMore() {
        this.loader = true;
        this.busy = true;
    api.get('competitions/PL/matches?status=SCHEDULED')
    .then(response => { const append = response.data.matches.slice(
        this.upcomingFixtures.length,
        this.upcomingFixtures.length + this.limit
    );
    setTimeout(() => {
        this.upcomingFixtures = this.upcomingFixtures.concat(append);
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
    background-color: var(--red-theme);
    border-left: 8px solid var(--white);
    color: var(--white);
    padding: 10px 0px 10px 0px;
    font-weight: 600;
    font-size: 1.9rem;
}

.fixtures-div {
    background-color: var(--main-purple-theme);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    max-height: 522px;
    overflow: scroll;
    overflow-x: hidden;
}

h4 {
    color: var(--white);
    font-size: 1.7rem;
    font-weight: 600;
}

.time-badge {
    background-color: var(--red-theme);
    border-radius: 0;
    padding: 8px 15px 8px 15px;
    font-size: 1.40rem;
}

span {
    color: var(--white);
}
span i {
    color: var(--red-theme);
}

.city {
    font-weight: 500;
}

hr {
    height: 1px;
    background-color: var(--white);
    opacity: 0.2;
    margin-top: 10px;
    margin-bottom: 12px;
}

.current-form {
    position: absolute;
    right: 0;
    top: -68%;
    left: 75%;
    bottom: 0;
}
.current-form h4 {
    font-size: 1.3rem;
}

.fixture-row {
    position: relative;
}

.form-hr {
    margin-top: 35px;
}

.win-badge {
    background-color: #05F26C;
    color: var(--main-purple-theme);
    border-radius: 0;
}
.loss-badge {
    background-color: var(--red-theme);
    border-radius: 0;
    padding-right: 6px;
    padding-left: 6px;
}
.draw-badge {
    background-color: var(--light-blue-theme);
    color: var(--main-purple-theme);
    border-radius: 0;
}

.last-five {
    font-weight: 500;
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
}

.fixture-date {
    font-weight: 500;
    font-size: 0.7rem;
}

.fixture img {
    height: 3.5rem;
    width: 3.5rem;
}

.loader span {
    font-weight: 600;
    font-size: 1.3rem;
}

.loader .spinner {
    color: var(--link-theme);
}

</style>