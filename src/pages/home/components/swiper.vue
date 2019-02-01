<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item in sliderList" :key="item.index">
        <img class="swiper-img" :src="item.imgUrl" />
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>

</template>
<script>
  export default {
    name:'HomeSwiper',
    props:{
      sliderList:{
        type: Array
      }
    },
    data() {
      return {
        swiperOption:{
          pagination: '.swiper-pagination',
          loop: true
        }
      }
    }
  }
</script>
<style scoped>
.swiper-pagination-bullet-active{
  background-color:white !important
  }
.wrapper{
  width:100%;
  height:0;
  padding-bottom:31%;
  overflow:hidden;
}
.swiper-img{
  width:100% !important;
}
</style>
