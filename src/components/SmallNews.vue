<template>
  
  <div>

      <div class="d-flex">
          <div class="small-news mr-1">
              <div class="card">
                <div class="card-body">
                    <small>Januari 14th, 2021</small>
                    <h5 class="card-title mt-2">TITEL</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <hr class="mb-2 mt-0">
                <div class="socials d-flex justify-content-between pr-4 pb-2">
                    <small class="pl-4 my-auto">John Doe</small>
                    <div>
                        <i class="far fa-eye pr-1"></i><span class="pr-3 ">3247</span>
                        <i class="far fa-heart pr-1"></i><span class="pr-3">689</span>
                        <i class="far fa-comment-alt pr-1"></i><span>23</span>
                    </div>
                </div>
            </div>
          </div>

          <div class="small-news ml-2">Small news</div>

      </div>

      <div class="d-flex">
          <div class="small-news mr-1">Small news</div>
          <div class="small-news ml-2">Small news</div>
      </div>
      
  </div>

</template>

<script>
export default {

}
</script>

<style>

/* .card {
    BILD/BAKGRUND HÄR
} */

.small-news {
    background-color: var(--main-purple-theme);
    height: 660px;
    width: 100%;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    margin-top: 15px;
    position: relative;
}

.small-news .card {
    position: absolute;
    bottom: 0;
    border-radius: 0;
}

.card .socials span {
    font-size: 0.8rem;
}
.card .socials i {
    color: var(--main-purple-theme);
}

.card hr {
    height: 1px;
    background-color: var(--main-purple-theme);
    opacity: 0.6
}

</style>