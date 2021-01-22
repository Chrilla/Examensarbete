<template>

  <div class="my-5 pt-5">

      <div class="news-heading pl-4 mb-3">Featured news</div>

      <div class="big-news">
          <div class="card">
            <div class="card-body">
                <small>Januari 14th, 2021</small>
                <h5 class="card-title mt-2">Nyhets titel</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
      </div>

      <div class="d-flex mt-2">
          <div class="small-news mr-1">Small news</div>
          <div class="small-news ml-1">Small news</div>
      </div>

      <div class="d-flex mt-2">
          <div class="small-news mr-1">Small news</div>
          <div class="small-news ml-1">Small news</div>
      </div>

      <button class="news-button mt-2">Load more news...</button>

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

.big-news {
    background-color: var(--main-purple-theme);
    height: 450px;
    position: relative;
}

.small-news {
    background-color: var(--main-purple-theme);
    height: 660px;
    width: 100%;
}

.news-button {
    background-color: var(--red-theme);
    color: var(--white);
    padding: 10px 0px 10px 0px;
    font-weight: 600;
    font-size: 1.9rem;
    border: none;
    width: 100%;
}

.news-text {
    background-color: var(--white);
}

.card {
    position: absolute;
    bottom: 0;
    border-radius: 0;
}

</style>