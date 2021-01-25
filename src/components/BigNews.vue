<template>

      <div class="big-news">
          <div class="card">
            <div class="card-body">
                <small>Januari 14th, 2021</small>
                <h5 class="card-title mt-2">Titel</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
      </div>

</template>

<script>
export default {

}
</script>

<style scoped>

.big-news {
    background-color: var(--main-purple-theme);
    height: 450px;
    position: relative;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.card {
    position: absolute;
    bottom: 0;
    border-radius: 0;
}

</style>