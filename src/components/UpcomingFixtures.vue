<template>
  
  <div>

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
                    <div class="col-5 col-sm-4"><span class="fixture-team">{{fixture.homeTeam.name}}</span></div>

                    <div class="d-flex">
                        <img class="d-none d-lg-block" src="@/assets/manutd-badge.svg" alt="Home team club crest">
                        <div class="text-center">
                            <div class="fixture-time mx-4">
                                <span>{{fixture.utcDate.charAt(11)+""+fixture.utcDate.charAt(12)+""+fixture.utcDate.charAt(13)+""+fixture.utcDate.charAt(14)+""+fixture.utcDate.charAt(15)}}</span>
                            </div>
                            <small class="fixture-date text-white">{{fixture.utcDate.charAt(0)+""+fixture.utcDate.charAt(1)+""+fixture.utcDate.charAt(2)+""+fixture.utcDate.charAt(3)+""+fixture.utcDate.charAt(4)+""+fixture.utcDate.charAt(5)+""+fixture.utcDate.charAt(6)+""+fixture.utcDate.charAt(7)+""+fixture.utcDate.charAt(8)+""+fixture.utcDate.charAt(9)}}</small>
                        </div>
                        <img class="d-none d-lg-block" src="@/assets/manutd-badge.svg" alt="Away team club crest">
                    </div>
                    
                    <div class="col-5 col-sm-4 text-right"><span class="fixture-team">{{fixture.awayTeam.name}}</span></div>
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

.fixture-row {
    position: relative;
}

.form-hr {
    margin-top: 35px;
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