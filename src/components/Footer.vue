<template>
  <b-row class="footer">
    <b-col class="d-flex flex-column">
      <img src="../assets/images/footer-logo.png" alt class="footer-logo" />
      <div class="footer-socials">
        <a href=""><img src="../assets/images/social-media/facebook.png" alt /></a>
        <a href=""><img src="../assets/images/social-media/instagram.png" alt /></a>
        <a href=""><img src="../assets/images/social-media/vk.png" alt /></a>
      </div>
    </b-col>
    <b-col class="footer-references">
      <router-link to class="link-reset">Catalog</router-link>
      <router-link to class="link-reset">Collection</router-link>
      <router-link to class="link-reset">Our lookbooks</router-link>
    </b-col>
    <b-col class="footer-references">
      <router-link to class="link-reset">About us</router-link>
      <router-link to class="link-reset">Contacts</router-link>
      <router-link to class="link-reset">Privacy policy</router-link>
    </b-col>
    <b-col cols="6" class="d-flex flex-column justify-content-between">
      <div class="footer-email__title">Newsletter</div>
      <div class="mt-2 mb-3">Be the first to know about new and discounts.</div>
      <form action>
        <div class="position-relative">
          <input type="text" name id placeholder="E-mail address" class="footer-email__input" />
          <button class="footer-email__button">
            <i class="icon icon-emailSendButton"></i>
          </button>
        </div>
      </form>
    </b-col>
  </b-row>
</template>