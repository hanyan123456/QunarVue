<template>
  <div id="home">
    <v-header></v-header>
    <v-swiper :sliderList="sliderList"></v-swiper>
    <v-icons></v-icons>
    <v-hot class="home-hot"></v-hot>
    <v-recommend class="home-recommend"></v-recommend>
    <v-weekend></v-weekend>
  </div>
</template>
<script>
  import HomeHeader from './components/header'
  import  HomeSwiper from './components/swiper'
  import  Homeicons from './components/icons'
  import  Homehot from './components/hot'
  import Homerecommend from './components/recommend'
  import Homeweekend from './components/weekend'
  import axios from 'axios'
  import { mapState } from 'vuex'
  export default {
   name:'Home',
    data(){
     return{
       sliderList:[]
     }
    },
    components:{
      'v-header':HomeHeader,
      'v-swiper':HomeSwiper,
      'v-icons':Homeicons,
      'v-hot': Homehot,
      'v-recommend': Homerecommend,
      'v-weekend':Homeweekend
    },
    created () {
      axios.get('/home/sliderList').then(res => {
//        console.log(res)
        if(res.data.code===0){
          this.sliderList=res.data.data
//          console.log(this.sliderList)
        }
      })
    },
    computed:{
      ...mapState(['city'])
    }
  }
</script>
<style>
.home-hot,
.home-recommend{
  margin-top: 15px;
}
</style>
