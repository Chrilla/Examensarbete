<template>
  
  <div class=" py-5">
      <div class="newsletter-banner">
        <div class="container d-flex">
            <div class="row justify-content-between">

            <div class="col-10">
                <img src="@/assets/rainy-football.jpg" alt="">
            </div>

        </div>

        <div class="col-6 my-auto">
            <h4>Sign up for the Premier League Hub newsletter by filling in your email below</h4>
            <div class="d-flex mt-4 col-10 pl-0">
                <b-form-input size="sm" class="mr-sm-2" placeholder="Email address..."></b-form-input>
                <b-button size="sm" class="my-2 ml-1 px-3 my-sm-0" type="submit">Subscribe</b-button>
            </div>
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

.newsletter-banner {
    background: linear-gradient(to right,rgba(52, 0, 64, 0.699), rgba(52, 0, 64, 0.699)), url("../assets/newsletter-banner-bg.jpg");
    background-size: cover;
    color: var(--white);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.form-control-sm {
  border: none;
  border-radius: 0;
  height: 2.2rem;
  padding-left: 10px;
}

h4 {
    font-weight: 600;
    font-size: 1.6rem;
    line-height: 2.2rem;
}

.btn-secondary {
    border: none;
    border-radius: 0;
    background-color: var(--red-theme);
    font-weight: 600;
}

img {
    width: 100%;
}

</style>