<template>

  <div class="mt-5 pt-5">

      <div class="table-heading text-center px-3">Premier League 2020/2021</div>
      
      <div id="table" class="pb-2 mb-3 px-4">

          <div class="table-stats d-flex justify-content-between pb-2 pt-4">
            <span class="">Pos</span>
            <span class="mr-5 pr-5">Club</span>
            <span>Pts</span>
        </div>
        <hr class="mt-1 mb-2">

        <div v-for="stats in tableStats" v-bind:key="stats.tableStats">
            <router-link to="/"><div class="table-row">
                <span class="table-stats">{{stats.position}}</span>
                <span class="px-2"><img class="club-img" :src='stats.team.crestUrl' alt="Club crest"></span>
                <span class="table-stats team-name">{{stats.team.name}}</span>
                <span class="table-stats table-points float-right">{{stats.points}}</span>
            </div></router-link>
            <hr class="hr-between">
        </div>

        <div class="text-center pt-3 pb-1">
            <router-link to="/table"><span class="table-link">View full table with all statistics<i class="fas fa-arrow-right fa-xs pl-2"></i></span></router-link>
        </div>

        <!-- <div v-for="stats in tableStats" v-bind:key="stats.tableStats">
            <span>{{stats.position}}</span>
            <span><img class="club-img" :src='stats.team.crestUrl' alt=""></span>
            <span>{{stats.team.name}}</span>
            <span>{{stats.playedGames}}</span>
            <span>{{stats.won}}</span>
            <span>{{stats.draw}}</span>
            <span>{{stats.lost}}</span>
            <span>{{stats.goalDifference}}</span>
            <span>{{stats.points}}</span>
            <hr class="mt-1 hr-between">
        </div> -->
        
      </div>
  </div>

</template>

<script>

import api from '../api'

export default {

    data () {
    return {
      tableStats: []
    }
  },

    mounted () {
    api.get('competitions/PL/standings')
      .then(response => (this.tableStats = response.data.standings[0].table))
  }
}

</script>

<style scoped>

.table-heading {
    background-color: var(--red-theme);
    border-left: 8px solid var(--white);
    color: var(--white);
    padding: 16px 0px 16px 0px;
    font-weight: 600;
    font-size: 1.4rem;
}

#table {
    background-color: var(--main-purple-theme);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    color: var(--white);
}

.table-row {
    padding-top: 10px;
    padding-bottom: 10px;
}

hr {
    height: 1px;
    background-color: var(--white);
    opacity: 0.6;
}

.hr-between {
    opacity: 0.4;
    margin-bottom: 0px;
    margin-top: 0px;
}

.team-stats {
    padding-left: 20px;
}

.club-img {
    height: 1.8rem;
}

.team-name {
    font-size: 0.9rem;
}

.table-stats {
    font-weight: 500;
}

.table-points {
    margin-top: 2px;
}

a {
color: #fff;
}
a:hover {
color: var(--link-theme);
text-decoration: none;
}

.table-link {
    color: var(--link-theme);
}
.table-link:hover {
    color: #ff2882;
}

</style>