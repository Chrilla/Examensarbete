<template>

  <div class="">

      <div class="popular-news-heading text-center px-3">Popular news</div>

      <div class="news-bg">

          <div class="d-flex pt-4 pl-4 pr-4">
            <div>
                <img class="pr-4 mt-1" src="@/assets/harry-kane-small.svg" alt="">
            </div>
            <div>
                <b-badge class="mb-3">TRANSFERS</b-badge>
                <h6 class="text-light">HARRY KANE IS ON MANCHESTER UNITED'S RADAR...</h6>
                <small class="text-light">Januari 14th, 2021</small>
            </div>
          </div>

          <hr class="mt-2 mb-0">

      </div>

  </div>

</template>

<script>
export default {

}
</script>

<style scoped>

.popular-news-heading {
    background-color: var(--red-theme);
    border-left: 8px solid var(--white);
    color: var(--white);
    padding: 14.2px 0px 14.2px 0px;
    font-weight: 600;
    font-size: 1.55rem;
    
}

.news-bg {
    background-color: var(--main-purple-theme);
    height: 600px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

img {
    height: 135px;
}

hr {
    height: 1px;
    background-color: var(--white);
    opacity: 0.4;
    width: 87%;
}

.badge {
    background-color: var(--red-theme);
    border-radius: 0;
    padding: 5px;
}

</style>