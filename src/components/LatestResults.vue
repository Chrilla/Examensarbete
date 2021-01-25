<template>
  
  <div class="py-5">

    <div class="news-heading pl-4">Latest results</div>

    <div class="fixtures-div container pt-2 pb-3">

        <hr class="mt-4 w-75" align="left">

        <div class="row fixture-row">

            <div class="fixture col-9 d-flex justify-content-center">
                <h4 class="my-auto pr-3">Manchester United</h4>
                <img src="@/assets/manutd-badge.svg" alt="">
                <b-badge class="time-badge my-auto mx-3">
                    <span class="pr-2">2</span>
                    <span class="results-line"></span>
                    <span class="pl-2">0</span>
                </b-badge>
                <img src="@/assets/manutd-badge.svg" alt="">
                <h4 class="my-auto pl-3">Manchester United</h4>
            </div>
            

            <div class="current-form col-3 mt-3"></div>

        </div>
        
        <div class="location text-center pt-2">
            <span><i class="fas fa-map-marker-alt pr-2"></i>Old Trafford, <span class="city">Manchester</span></span>
            <hr>
        </div>

        <div class="col-9 p-0 d-flex justify-content-between">
            <a href="#"><span><i class="fas fa-arrow-left text-light pr-2"></i>Previous results</span></a>
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
    background: linear-gradient(to right,rgba(52, 0, 64, 0.5), rgba(52, 0, 64, 0.5)), url("../assets/results-img.svg");
}
.current-form h4 {
    font-size: 1.3rem;
}

.fixture-row {
    position: relative;
}

.results-line {
    border-right: 1.5px solid rgba(255, 255, 255, 0.397);
}

</style>