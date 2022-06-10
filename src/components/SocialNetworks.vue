<template>
  <div class="social-networks container mt-5 pt-5" v-if="websiteInfo">
    <h2 class="social-title text-center">Nos reseaux sociaux:</h2>
    <div class="flex">
      <div class="box">
        <h6 class="title">{{ websiteInfo.website_title }}</h6>
        <p class="label">{{ websiteInfo.description_services }}</p>
      </div>
      <div class="box">
        <h6 class="title">MENU</h6>
        <p class="label">Accueil</p>
        <p class="label">Nos Services</p>
        <p class="label">Prendre RDV</p>
        <p class="label">Nos horaires</p>
      </div>
      <div class="box">
        <h6 class="title">LIENS</h6>
        <p class="label">Mentions Legales</p>
        <p class="label">Politique de confidentialite</p>
        <p class="label">Notre page Facebook</p>
      </div>
      <div class="box">
        <h6 class="title">CONTACT</h6>
        <p class="label">
          {{ websiteInfo.postal_address }}
        </p>
        <p class="label">{{ websiteInfo.email_addess }}</p>
        <p class="label">{{ websiteInfo.phone_number }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "SocialNetworks",
  props: ["websiteInfo"],
};
</script>
<style lang="scss" scoped>
.social-networks {
  background-color: #f8f9fa;
  .label {
    color: #6c757d;
    padding: 24px;
    border-bottom: 1px solid #dee2e6;
    margin-top: 0;
  }
  .flex {
    color: #6c757d;
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
    margin-top: 3rem;
    padding: 15px 9%;
    padding-bottom: 100px;
    .box {
      width: 20%;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;

      .social-title {
        margin-top: 20px;
        font-size: 3em;
        font-weight: 700;
        color: #1b2127;
      }
      .label {
        padding: 0;
        border-bottom: none;
        margin-bottom: 16px;
      }
    }
  }
}

// MEDIA QUERIES//

@media screen and (max-width: 768px) {
  .social-networks {
    .flex {
      flex-direction: column;
      align-items: center;
      .box {
        width: 70%;
      }
    }
  }
}
</style>