<template>

<div class="container card-deck-mobile py-5">
    <div class="d-flex justify-content-center flex-wrap flex-lg-nowrap">

        <router-link to="/stats"><div class="stats deck-card d-flex align-items-center m-2">
        <div class="card-text text-center mx-auto">
            
            <h4>Stats</h4>
            <span>See statistics for top scorers, <br> most assists and more</span>
            
        </div>
    </div></router-link>

    <div class="history deck-card d-flex align-items-center m-2">
        <div class="card-text text-center mx-auto">
            <router-link to="/history">
            <h4>History</h4>
            <span>Read about the history <br> of the Premier League</span>
            </router-link>
        </div>
    </div>

    <div class="clubs deck-card d-flex align-items-center m-2">
        <div class="card-text text-center mx-auto">
            <router-link to="/clubs">
            <h4>Clubs</h4>
            <span>Information about all twenty clubs <br> included in the Premier League</span>
            </router-link>
        </div>
    </div>

 </div>
</div>

</template>

<script>
export default {

}
</script>

<style scoped>

.deck-card {
    height: 400px;
    width: 385px;
    background-color: var(--main-purple-theme);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
.deck-card:hover {
    transition-timing-function: ease-in;
    transition: 0.3s;
    transform: scale(1.03);
}
.deck-card:hover:active {
    transform: translateY(0%);
}

.stats {
    background: linear-gradient(to right,rgba(52, 0, 64, 0.5), rgba(52, 0, 64, 0.5)), url("../assets/stats-img.svg");
    background-size: cover;
    background-position: center top;
}

.history {
    background: linear-gradient(to right,rgba(52, 0, 64, 0.5), rgba(52, 0, 64, 0.5)), url("../assets/history-img.svg");
    background-size: cover;
    background-position: center top;
}

.clubs {
    background: linear-gradient(to right,rgba(52, 0, 64, 0.5), rgba(52, 0, 64, 0.5)), url("../assets/clubs-img.jpg");
    background-size: cover;
    background-position: center top;
}

.card-text h4 {
    font-size: 3.15rem;
    font-weight: 600;
}
.card-text span {
    font-size: 0.9rem;
    font-weight: 500;
}

a {
    color: #fff;
}
a:hover {
    color: #fff;
    text-decoration: none;
}

@media (max-width: 576px) {

.card-deck-mobile {
  padding-top: 0!important;
}

}

</style>