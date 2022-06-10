<template>
  <div :images="images" class="container mb-5 mt-5" id="carousel">
    <hooper :itemsToShow="2" :centerMode="false" id="hooper"  :keysControl="true">
      <slide v-for="(image, indx) in images" :key="indx" :index="indx">
        <img :src="image.src" class="current-img" />
      </slide>
    </hooper>
  </div>
</template>

<script>
import { Hooper, Slide } from "hooper";
import "hooper/dist/hooper.css";

export default {
  name: "CarouselImg",
  props: ["images"],
  components: {
    Hooper,
    Slide,
  },
};
</script>
<style lang="scss" scoped>
#hooper {
  height: 400px;
}
.is-current {
  border-right: 2px solid red !important;
  z-index: 50;
  img {
    border-right: 2px solid white !important;
  }
}
</style>