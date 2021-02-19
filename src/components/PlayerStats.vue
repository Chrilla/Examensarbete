<template>

  <div class="table-bg">
      <div class="table container-xl mt-5 mb-5 pb-3">
          <div class="table-logo d-flex justify-content-center align-items-center text-white py-3">
              <h1>Premier League top scorers 2020/2021</h1>
          </div>
        <table class="mx-auto col-12">
            <tr class="table-columns text-center">
                <th class="text-left pl-3">Player<i class="fas fa-running pl-2"></i></th>
                <th class="text-left pl-3">Club<i class="fas fa-users pl-2"></i></th>
                <th>Nationality<i class="far fa-flag pl-2"></i></th>
                <th class="text-center">Goals<i class="fas fa-futbol pl-2"></i></th>
            </tr>
            <tr class="table-row" v-for="stats in playerStats" v-bind:key="stats.playerStats">
                <td class="table-player pl-3">{{stats.player.name}}</td>
                <td class="table-club"><router-link to="/"><span class="px-1"></span>{{stats.team.name}}</router-link></td>
                <td class="table-nationality">{{stats.player.nationality}}</td>
                <td class="table-goals">{{stats.numberOfGoals}}</td>
            </tr>
        </table>
    </div>
  </div>

</template>

<script>
import api from '../api'

export default {
    data () {
    return {
      playerStats: []
    }
  },
    mounted () {
    api.get('competitions/PL/scorers')
      .then(response => (this.playerStats = response.data.scorers))
  }
}
</script>

<style scoped>

.table-bg {
  background: linear-gradient(to right,rgba(52, 0, 64, 0.5), rgba(52, 0, 64, 0.5)), url("../assets/home-bg.jpg");
  background-size: cover;
  background-position: center top;
  background-color: var(--main-purple-theme);
  border-top: 4px solid var(--red-theme);
  border-bottom: 4px solid var(--red-theme);
  height: 100%;
}

.table {
	border-collapse: collapse;
    overflow-x:auto;
    background-color: var(--main-purple-theme);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    padding-top: 15px;
    font-weight: 500;
    border-radius: 4px;
}

.table-columns {
    border-top: 2px solid var(--link-theme);
}

.table tr:nth-child(even) {
    background-color: #c40048;
}
.table tr:nth-child(odd) {
    background-color: var(--red-theme);
}

.table td {
    border-bottom: 2px solid var(--main-purple-theme);
}

th {
	color: #fff;
}

tr th {
    font-size: 1.5rem;
    font-weight: 500;
    background-color: var(--secondary-purple-theme);
    color: var(--light-blue-theme);
}

.table-row{
    font-size: 1.2rem;
}

.table-row td{
	color: #fff;
}
.table-row:hover td{
	color: #fff;
    background-color: var(--blue-theme);
}

.table-row .table-player{
	color: #fff;
    font-weight: 500;
}

.table-club {
    border-left: 2px solid var(--main-purple-theme);
    font-weight: 400;
}

.table-nationality {
    border-left: 2px solid var(--main-purple-theme);
    text-align: center;
    font-weight: 400;
}

.table-row .table-goals {
    font-weight: 600;
    border-left: 2px solid var(--main-purple-theme);
    text-align: center;
}

.table-logo h1 {
    font-size: 2.5rem;
    font-weight: 600;
}

a {
    color: #fff;
}
a:hover {
    color: var(--main-purple-theme);
    text-decoration: none;
}

@media (max-width: 1200px) {

.table-logo {
    padding-bottom: 0!important;
}
.table-logo h1 {
    font-size: 1.7rem;
}

.table-club a {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;  
    overflow: hidden;
    width: 340px;
}

}

</style>