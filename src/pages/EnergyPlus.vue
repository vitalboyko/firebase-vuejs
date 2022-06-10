<template>
  <div class="energy-plus">
    <HomePage :websiteInfo="websiteInfo" :services="services"></HomePage>
    <ContactLinks :websiteInfo="websiteInfo"></ContactLinks>
    <OurServices :services="services"></OurServices>
    <ImgGallery :images="images"></ImgGallery>
    <FindUs></FindUs>
    <SocialNetworks :websiteInfo="websiteInfo"></SocialNetworks>
    <PageFooter></PageFooter>
  </div>
</template>
<script>
import { ref, child, get } from "firebase/database";
import database from "@/config/firebase";
import HomePage from "../components/HomePage.vue";
import ContactLinks from "../components/ContactLinks.vue";
import ImgGallery from "../components/Carousel.vue";
import OurServices from "../components/OurServices.vue";
import FindUs from "../components/FindUs.vue";
import SocialNetworks from "../components/SocialNetworks.vue";
import PageFooter from "../components/PageFooter.vue";

export default {
  name: "EnergyPlus",
  data() {
    return {
      websiteInfo: {},
      services: [],
      images: [],
    };
  },
  components: {
    HomePage,
    ContactLinks,
    OurServices,
    ImgGallery,
    FindUs,
    SocialNetworks,
    PageFooter,
  },
  methods: {
    init() {
      get(child(ref(database), "websiteInfo"))
        .then((snapshot) => {
          if (snapshot.exists()) {
            Object.values(snapshot.val()).forEach((info) => {
              this.websiteInfo = { ...info };
            });
          } else {
            console.log("No websiteinfo data");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    },
    initServices() {
      get(child(ref(database), "services"))
        .then((snapshot) => {
          if (snapshot.exists()) {
            Object.values(snapshot.val()).forEach((info) => {
              this.services.push({ ...info, id: info.id });
            });
          } else {
            console.log("No service data");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    },
    initCarousel() {
      get(child(ref(database), "carousel"))
        .then((snapshot) => {
          if (snapshot.exists()) {
            Object.values(snapshot.val()).forEach((info) => {
              this.images.push({ ...info, id: info.id });
            });
          } else {
            console.log("No carousel img");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
  created() {
    this.init();
    this.initServices();
    this.initCarousel();
  },
};
</script>
<style lang="scss" scoped>
.energy-plus {
  position: relative;
  background-color: rgba(211, 211, 211, 0.318);
}
</style>