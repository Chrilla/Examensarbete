<template>

  <div class="mt-5 pt-5">

      <div class="table-heading text-center px-3">Premier League 2020/2021</div>
      
      <div id="table" class="pb-2 mb-3">

          <div class="table-stats d-flex justify-content-between pr-4 pb-2 pt-4">
                <span class="pl-4 pr-2">Pos</span>
                <span class="pr-5 mr-5">Club</span>
            <div>
                <span class="pr-2">Pts</span>
            </div>
        </div>
        <hr class="mt-1">

        <div v-for="stats in tableStats" v-bind:key="stats.tableStats">
            <div class="pl-4">
                <span class="table-stats">{{stats.position}}</span>
                <span class="px-2"><img class="club-img" :src='stats.team.crestUrl' alt=""></span>
                <span class="table-stats team-name">{{stats.team.name}}</span>
                <span class="table-stats float-right pr-4">{{stats.points}}</span>
            </div>
            <hr class="hr-between">
        </div>

        <div class="text-center pt-1 pb-1">
            <router-link to="/table"><span>View full table with all statistics<i class="fas fa-arrow-right fa-xs pl-2"></i></span></router-link>
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
    padding: 18.4px 0px 18.4px 0px;
    font-weight: 600;
    font-size: 1.2rem;
}

#table {
    background-color: var(--main-purple-theme);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    color: var(--white);
}

hr {
    height: 1px;
    background-color: var(--white);
    opacity: 0.6;
    width: 88%;
}

.hr-between {
    opacity: 0.4;
    margin-bottom: 10px;
    margin-top: 10px;
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

a span {
color: #7FC4FD;
}

</style>