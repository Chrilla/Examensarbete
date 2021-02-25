<template>
  
  <div class="table-bg">
      <div class="table container-xl mt-5 mb-5 pb-3">
          <div class="table-logo d-flex justify-content-center align-items-center text-white py-3">
              <h1>Premier League standings 2020/2021</h1>
          </div>
        <table class="mx-auto col-12">
            <tr class="table-columns text-center">
                <th class="pl-3">Pos</th>
                <th class="pl-3">Club</th>
                <th>Pl</th>
                <th>W</th>
                <th>D</th>
                <th>L</th>
                <th>GF</th>
                <th>GA</th>
                <th>GD</th>
                <th>Pts</th>
                <th>Form</th>
            </tr>
            <tr class="table-row" v-for="stats in tableStats" v-bind:key="stats.tableStats">
                <td class="table-position">{{stats.position}}</td>
                <td class="table-club"><router-link to="/"><span class="px-2"><img class="club-img" :src='stats.team.crestUrl' alt=""></span>{{stats.team.name.slice(0, -3)}}</router-link></td>
                <td class="table-played-games">{{stats.playedGames}}</td>
                <td>{{stats.won}}</td>
                <td>{{stats.draw}}</td>
                <td>{{stats.lost}}</td>
                <td>{{stats.goalsFor}}</td>
                <td>{{stats.goalsAgainst}}</td>
                <td>{{stats.goalDifference}}</td>
                <td class="table-points">{{stats.points}}</td>
                <td>
                    <div class="team-form">
                        <b-badge>{{stats.form[0]}}</b-badge>
                        <b-badge class="mx-1">{{stats.form[2]}}</b-badge>
                        <b-badge>{{stats.form[4]}}</b-badge>
                        <b-badge class="mx-1">{{stats.form[6]}}</b-badge>
                        <b-badge>{{stats.form[8]}}</b-badge>
                    </div>
                </td>
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
    border-radius: 4px;
}


.table td {
    border-bottom: 2px solid var(--main-purple-theme);
}

th {
	color: #fff;
}

tr th {
    font-size: 1.35rem;
    font-weight: 600;
    background-color: var(--secondary-purple-theme);
    color: var(--light-blue-theme);
}

.table-columns {
    border-top: 2px solid var(--link-theme);
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

.table tr:nth-child(even) {
    background-color: #c40048;
}
.table tr:nth-child(odd) {
    background-color: var(--red-theme);
}

table tr td:nth-child(1){
	color: #fff;
    font-weight: 500;
}
table tr td:nth-child(n+4){
	border-left: 2px solid var(--main-purple-theme);
    text-align: center;
}

.club-img {
    height: 1.8rem;
}

.table-row .table-position {
    padding-left: 35px;
    font-weight: 600;
}

.table-row .table-points {
    font-weight: 600;
}

.table-row .table-played-games {
    font-weight: 600;
}

.table-logo h1 {
    font-size: 2.75rem;
    font-weight: 600;
}

.badge {
    font-size: 1rem;
    font-weight: 600;
    width: 1.8rem;
    background-color: var(--main-purple-theme);
    color: #fff;
    border-radius: 0;
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
.table-logo img {
    height: 4rem;
    margin-left: 15px!important;
    margin-right: 15px!important;
}
    
.team-form {
    display: flex;
    margin-top: 4px;
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