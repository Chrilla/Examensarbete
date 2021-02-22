<template>

<div class="footer-wrapper">
<button aria-label="Click to get back to top" title="Click to get back to top" @click="scrollToTop()" id="scrollToTopBtn"><i class="fas fa-arrow-up"></i></button>
<footer class="container-fluid d-flex justify-content-around text-sm-center text-xl-left pt-5 pb-4">
  <div class="row">
    <div class="col-6 col-sm-3 col-xl-2 contact">
      <h5>Contact us</h5>
      <ul class="list-unstyled text-small">
        <li><a href="#">info@plhub.com</a></li>
        <li><span>+46 768370550</span></li>
        <li><span>Noachsgatan 4</span></li>
        <li><span>63341 Eskilstuna</span></li>
      </ul>
    </div>
    <div class="col-6 col-sm-3 col-xl-2">
      <h5>User service</h5>
      <ul class="list-unstyled text-small">
        <li><a href="#">Resource</a></li>
        <li><a href="#">Resource name</a></li>
        <li><a href="#">Another resource</a></li>
        <li><a href="#">Final resource</a></li>
      </ul>
    </div>
    <div class="col-6 col-sm-3 col-xl-2">
      <h5>Information</h5>
      <ul class="list-unstyled text-small">
        <li><a href="#">About PL Hub</a></li>
        <li><a href="#">Work with us</a></li>
        <li><a href="#">Privacy policy</a></li>
        <li><a href="#">Terms &amp; conditions</a></li>
      </ul>
    </div>
    <div class="col-6 col-sm-3 col-xl-2">
      <h5>Social media</h5>
      <ul class="list-unstyled text-small">
          <div class="social-icons">
            <li><a href="#"><i class="fab fa-facebook"></i><span>Facebook</span></a></li>
            <li><a href="#"><i class="fab fa-twitter"></i><span>Twitter</span></a></li>
            <li><a href="#"><i class="fab fa-instagram"></i><span>Instagram</span></a></li>
          </div>
      </ul>
    </div>
    <div class="col-12 col-sm-6 col-xl-4 mx-auto">
        <h5>Subscribe to Premier League Hub</h5>
        <p>Sign up for the Premier League Hub newsletter by filling in your email below</p>
        <div class="d-flex flex-wrap flex-sm-nowrap">
            <b-form-input aria-label="Newsletter form field, enter email address" size="sm" class="mr-sm-2" placeholder="Email address..."></b-form-input>
            <b-button size="sm" class="my-2 ml-1 px-3 my-sm-0 d-sm-flex align-items-center" type="submit">Subscribe<i class="fas fa-envelope pl-2"></i></b-button>
        </div>
    </div>
  </div>
</footer>

<div class="copyright py-1">
    <span>Copyright &copy; {{currentYear}} Premier League Hub</span>
</div>

</div>

</template>

<script>

var rootElement = document.documentElement

export default {
  data() {
    return {
    currentYear: new Date().getFullYear(),
  }
},

  methods: {
      scrollToTop() {
      // Scroll to top logic
      rootElement.scrollTo({
        top: 0,
        behavior: "smooth"
      })
    }
  }
}
</script>

<style scoped>

#scrollToTopBtn {
  position: absolute;
  right: 1%;
  margin-top: 20px;
  background-color: var(--blue-theme);
  border: none;
  border-radius: 2px;
  color: white;
  cursor: pointer;
  padding: 8px 12px 8px 12px;
}
#scrollToTopBtn:hover {
    background-color: #7833d1;
    transition-timing-function: ease-in;
    transition: 0.1s;
}
#scrollToTopBtn:active {
    transform: scale(0.95);
}

.footer-wrapper {
  background: linear-gradient(to right,rgba(52, 0, 64, 0.699), rgba(52, 0, 64, 0.699)), url("../assets/footer-bg.jpg");
  background-size: cover;
  background-color: var(--main-purple-theme);
  color: #fff;
  border-top: 20px solid var(--red-theme);
}
.footer-wrapper li a {
    color: #fff;
    font-size: 0.9rem;
    font-weight: 500;
}
.footer-wrapper li a:hover {
    color: #ff2882;
    text-decoration: none;
}
.footer-wrapper .contact li span {
    color: #fff;
    font-size: 0.9rem;
    font-weight: 500;
}
.footer-wrapper h5 {
    font-weight: 600;
    padding-bottom: 5px;
    color: var(--link-theme);
}
.footer-wrapper p {
    font-weight: 500;
}

.social-icons i {
    padding-right: 10px;
    padding-bottom: 10px;
    font-size: 1.6rem;
    color: var(--link-theme);
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

.form-control:focus {
    box-shadow: none;
}
.form-control:focus::placeholder {
    color: var(--main-purple-theme);
}

.copyright {
    background-color: var(--secondary-purple-theme);
    box-shadow:0px 1px 8px black;
    text-align: center;
}
.copyright span{
    font-size: 0.8rem;
    font-weight: 500;
    word-spacing: 2px;
}

@media (max-width: 992px) {

.footer-wrapper {
  text-align: center;
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

#scrollToTopBtn {
  display: none;
}

}

</style>