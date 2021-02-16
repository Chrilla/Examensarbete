<template>

<div class="container card-deck-mobile py-5">
    <div class="d-flex justify-content-center flex-wrap flex-lg-nowrap">

        <div class="stats d-flex align-items-center m-2">
        <div class="card-text text-center mx-auto">
            <a href="#">
            <h4>Stats</h4>
            <span>See statistics for top scorers, <br> most assists and more</span>
            </a>
        </div>
    </div>

    <div class="history d-flex align-items-center m-2">
        <div class="card-text text-center mx-auto">
            <a href="#">
            <h4>History</h4>
            <span>Read about the history <br> of the Premier League</span>
            </a>
        </div>
    </div>

    <div class="clubs d-flex align-items-center m-2">
        <div class="card-text text-center mx-auto">
            <a href="#">
            <h4>Clubs</h4>
            <span>Information about all twenty clubs <br> included in the Premier League</span>
            </a>
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

.stats {
    height: 400px;
    width: 385px;
    background: linear-gradient(to right,rgba(52, 0, 64, 0.5), rgba(52, 0, 64, 0.5)), url("../assets/stats-img.svg");
    background-size: cover;
    background-position: center top;
    background-color: var(--main-purple-theme);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
.history {
    height: 400px;
    width: 385px;
    background: linear-gradient(to right,rgba(52, 0, 64, 0.5), rgba(52, 0, 64, 0.5)), url("../assets/history-img.svg");
    background-size: cover;
    background-position: center top;
    background-color: var(--main-purple-theme);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
.clubs {
    height: 400px;
    width: 385px;
    background: linear-gradient(to right,rgba(52, 0, 64, 0.5), rgba(52, 0, 64, 0.5)), url("../assets/clubs-img.jpg");
    background-size: cover;
    background-position: center top;
    background-color: var(--main-purple-theme);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.card-text a {
    color: #fff;
}
.card-text h4 {
    font-size: 3.15rem;
    font-weight: 600;
}
.card-text span {
    font-size: 0.9rem;
    font-weight: 500;
}

@media (max-width: 576px) {

.card-deck-mobile {
  padding-top: 0!important;
}

}

</style>