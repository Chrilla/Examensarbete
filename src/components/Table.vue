<template>

  <div class="mt-5 pt-5">

      <div class="table-heading text-center px-3">Premier League 2020/2021</div>
      
      <div id="table">

          <div class="d-flex justify-content-between pr-4 pb-2 pt-4">
            <span class="pl-4">Club</span>
            <div>
                <span class="pr-3">P</span>
                <span class="pr-3">W</span>
                <span class="pr-3">D</span>
                <span class="pr-3">L</span>
                <span class="pr-3">GD</span>
                <span class="pr-3">Pt</span>
            </div>
        </div>
        <hr class="mt-1">

        <div class="d-flex pr-4 pb-2">
            <span class="pl-4">1</span>
            <img class="pl-3" src="@/assets/manutd-badge-mini.svg" alt="">
            <span class="pl-2">Man Utd</span>
            <div class="team-stats">
                <span class="pr-3">3</span>
                <span class="pl-1 pr-3">3</span>
                <span class="pl-1 pr-3">0</span>
                <span class="pr-3">0</span>
                <span class="pl-1 pr-3">10</span>
                <span class="pl-1">9</span>
            </div>
        </div>
        <hr class="mt-1 hr-between">

        <div class="container"></div>

        <div v-for="stat in tableStats" v-bind:key="stat.position">
            {{stat.position}}
            <img class="club-img" :src='stat.team.crestUrl' alt="">
            {{stat.team.name}}
        </div>

      </div>

  </div>

</template>

<script>

import axios from 'axios'

export default {

    data () {
    return {
      tableStats: null
    }
  },

    mounted () {
    axios.get('https://api.football-data.org/v2/competitions/PL/standings', {
        headers: {
            'X-Auth-Token': 'a9dcf362aecb43138df28fb61c6c47e3',
            "Content-Type": "application/json",
            }
    })
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
    margin-bottom: 10px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    color: var(--white);
}

hr {
    height: 1px;
    background-color: var(--white);
    opacity: 0.6;
    width: 87%;
}

.hr-between {
    opacity: 0.4;
}

.team-stats {
    padding-left: 20px;
}

.club-img {
    height: 1.8rem;
}

</style>