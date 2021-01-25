<template>
  
  <div class="pt-5">

    <div class="news-heading pl-4">Upcoming fixtures</div>

    <div class="fixtures-div container pt-2 pb-3">

        <hr class="mt-4 w-75" align="left">

        <div class="row fixture-row">

            <div class="fixture col-9 d-flex justify-content-center">
                <h4 class="my-auto pr-3">Manchester United</h4>
                <img src="@/assets/manutd-badge.svg" alt="">
                <b-badge class="time-badge my-auto mx-3">16:00</b-badge>
                <img src="@/assets/manutd-badge.svg" alt="">
                <h4 class="my-auto pl-3">Manchester United</h4>
            </div>

            <div class="current-form col-3">
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
            </div>
        </div>
        
        <div class="location text-center pt-2">
            <span><i class="fas fa-map-marker-alt pr-2"></i>Old Trafford, <span class="city">Manchester</span></span>
            <hr>
        </div>

        <div class="col-9 p-0 d-flex justify-content-between">
            <a href="#"><span><i class="fas fa-arrow-left text-light pr-2"></i>Previous fixtures</span></a>
            <a href="#"><span>Upcoming fixtures<i class="fas fa-arrow-right text-light pl-2"></i></span></a>
        </div>

    </div>

  </div>

</template>

<script>
export default {

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
}

.fixture {
    width: 75%;
}

.location {
    width: 75%;
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

</style>