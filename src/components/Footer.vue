<template>

<div class="footer-wrapper">

<footer class="d-flex justify-content-around py-5">
  <div class="row">
    <div class="col-2 contact">
      <h5>Contact us</h5>
      <ul class="list-unstyled text-small">
        <li><a href="#">info@plhub.com</a></li>
        <li><span>+46 768370550</span></li>
        <li><span>Noachsgatan 4</span></li>
        <li><span>63341 Eskilstuna</span></li>
      </ul>
    </div>
    <div class="col-2 ">
      <h5>Customer service</h5>
      <ul class="list-unstyled text-small">
        <li><a href="#">Resource</a></li>
        <li><a href="#">Resource name</a></li>
        <li><a href="#">Another resource</a></li>
        <li><a href="#">Final resource</a></li>
      </ul>
    </div>
    <div class="col-2 ">
      <h5>Information</h5>
      <ul class="list-unstyled text-small">
        <li><a href="#">About PL Hub</a></li>
        <li><a href="#">Work with us</a></li>
        <li><a href="#">Privacy policy</a></li>
        <li><a href="#">Terms &amp; conditions</a></li>
      </ul>
    </div>
    <div class="col-2 ">
      <h5>Social media</h5>
      <ul class="list-unstyled text-small">
          <div class="social-icons">
            <li><a href="#"><i class="fab fa-facebook"></i><span>Facebook</span></a></li>
            <li><a href="#"><i class="fab fa-twitter"></i><span>Twitter</span></a></li>
            <li><a href="#"><i class="fab fa-instagram"></i><span>Instagram</span></a></li>
          </div>
      </ul>
    </div>
    <div class="col-4">
        <h5>Subscribe to Premier League Hub</h5>
        <p>Sign up for the Premier League Hub newsletter by filling in your email below</p>
        <div class="d-flex">
            <b-form-input aria-label="Newsletter form field, enter email address" size="sm" class="mr-sm-2" placeholder="Email address..."></b-form-input>
            <b-button size="sm" class="my-2 ml-1 px-3 my-sm-0 d-flex align-items-center" type="submit">Subscribe<i class="fas fa-envelope pl-2"></i></b-button>
        </div>
    </div>
  </div>
</footer>

</div>

</template>

<script>
export default {

}
</script>

<style scoped>

.footer-wrapper {
  background: linear-gradient(to right,rgba(52, 0, 64, 0.699), rgba(52, 0, 64, 0.699)), url("../assets/footer-bg.jpg");
  background-size: cover;
  background-color: var(--main-purple-theme);
  color: var(--white);
  border-top: 20px solid var(--red-theme);
}
.footer-wrapper li a {
    color: var(--white);
    font-size: 0.9rem;
    font-weight: 500;
}
.footer-wrapper .contact li span {
    color: var(--white);
    font-size: 0.9rem;
    font-weight: 500;
}
.footer-wrapper h5 {
    font-weight: 600;
    padding-bottom: 5px;
}
.footer-wrapper p {
    font-weight: 500;
}

.social-icons i {
    padding-right: 10px;
    padding-bottom: 10px;
    font-size: 1.6rem;
    color: var(--light-blue-theme);
}
.social-icons span {
    font-size: 1.1rem;
    vertical-align: 3px;
}

.form-control-sm {
  border: none;
  border-radius: 0;
  height: 2.2rem;
  padding-left: 10px;
}

.btn-secondary {
    border: none;
    border-radius: 0;
    background-color: var(--red-theme);
    font-weight: 600;
}

</style>