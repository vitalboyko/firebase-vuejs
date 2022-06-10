<template>
  <div class="our-services container mb-5 mt-5" :services="services">
    <h2 class="title text-center mb-5">Nos Services</h2>
    <div class="box-container border-2">
      <div class="box" v-for="(service, index) in services" :key="index">
        <div class="row">
          <div class="col-md-9">
            <div class="row">
              <div class="col-md-9 name-description col-sm-6">
                <p class="pl-5 pt-3 pb-0 mb-0 name ml-2">{{ service.name }}</p>
                <p class="service-description pl-5 pb-3 pt-2 word-wrap ml-2">
                  {{ service.description }}
                </p>
              </div>
              <div class="col-md-3 pt-3 col-sm-6 price-duration">
                <div class="price">
                  <p>à partir de {{ service.price }} €</p>
                </div>
                <div class="duration">
                  <p class="mb-0">{{ service.duration }}min</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-3 pl-5 picking">
            <button class="btn btn-white border-dark m-3 ml-5">Choior</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "OurServices",
  props: ["services"],
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.our-services {
  margin-bottom: 5%;
  .title {
    font-size: 3em;
    font-weight: 700;
    color: #1b2127;
  }
}
.box-container {
  border-radius: 4px;
  background-color: white;
  overflow: hidden;
  box-shadow: rgb(60 66 87 / 4%) 0px 0px 5px 0px,
    rgb(0 0 0 / 4%) 0px 0px 10px 0px;
  .box {
    width: 100%;
    font-size: 14px;
    line-height: 1.29;
    border-bottom: 2px solid rgb(229, 229, 229);
    cursor: pointer;
    .service-description {
      font-size: 16px;
      margin-bottom: 0;
      text-overflow: ellipsis;
      max-width: 95%;
      overflow: hidden;
      white-space: nowrap;
    }
    .name-description {
      .name {
        font-size: 18px;
      }
    }
    .price-duration {
      font-size: 16px;
      text-align: right;
    }
    .price {
      color: rgb(13, 13, 13);
    }
  }
}

// MEDIA QUERIES//

@media screen and (max-width: 576px) {
  .our-services {
    .box-container {
      flex-wrap: wrap;
      .name-description {
        padding-left: 0;
        .name {
          margin-left: 20px;
          padding-left: 0;
        }
      }
      .price-duration {
        margin-right: 25px;
      }
      .picking {
        text-align: right;
      }
    }
  }
}

@media (min-width: 576px) and (max-width: 768px) {
  .our-services {
    .box-container {
      flex-wrap: wrap;
      .name-description {
        padding-left: 0;
        .name {
          margin-left: 20px;
          padding-left: 0;
        }
      }
      .price-duration {
        padding-right: 10;
        text-align: center;
        .price,
        .duration {
          padding-right: 15px;
          margin-left: 5px;
          text-align: right;
        }
      }
      .picking {
        text-align: right;
      }
    }
  }
}
@media (min-width: 768px) and (max-width: 1024px) {
  .our-services {
    .box-container {
      flex-wrap: wrap;
      .picking {
        padding-left: 0 !important;
        border: 1px solid red;
        margin-left: 0;
      }
    }
  }
}
</style>