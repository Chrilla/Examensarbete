<template>
  
  <div class="py-5" tabindex="0">
      <div class="newsletter-banner">
        <div class="container d-flex flex-wrap flex-md-nowrap">
            <div class="row justify-content-between">

            <div class="col-11">
                <img class="d-none d-lg-block" src="@/assets/home-bg.jpg" alt="Forum banner image">
            </div>

        </div>

        <div class="my-auto newsletter-form text-center mx-auto col-lg-6">
            <h4>Have you visited our forum yet? <br class="d-none d-lg-block"> Discuss football with other fans!</h4>
            <div class="mt-4 pl-0">
                <router-link to="/chat"><b-button size="sm" class="my-2 ml-1 px-3 py-2 my-sm-0" type="submit">Take me there!</b-button></router-link>
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
    font-size: 1.1rem;
}
.btn-secondary:hover {
    background-color: #c70046d7;
    transition-timing-function: ease-in;
    transition: 0.1s;
}
.btn-secondary:active {
    background-color: #c70046d7!important;
    transform: scale(0.98);
}
.btn-secondary:focus {
    background-color: #c70046d7!important;
    box-shadow: none;
}

img {
    width: 100%;
}

@media (max-width: 992px) {

img {
  padding-bottom: 15px;
}

.btn-secondary {
  width: 100%;
  padding: 6px;
  font-weight: 2rem;
  margin-left: 0!important;
}

.btn-sm {
  font-size: 1rem;
}

.newsletter-form {
    padding: 0;
}

.newsletter-input {
    padding-right: 0;
    margin-top: 10px!important;
}

.newsletter-banner {
    padding-top: 20px;
    padding-bottom: 20px;
}

h4 {
    font-size: 1.5rem;
    text-align: center;
}

}

@media (min-width: 992px) {
.newsletter-form {
    padding-top: 20px;
    padding-bottom: 20px;
}
img {
    height: 100%;
}

}

</style>