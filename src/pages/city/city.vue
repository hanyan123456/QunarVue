<template>
  <div class="city">
    <city-header></city-header>
    <city-search :cityList=" cityList"></city-search>
    <city-list :cityList=" cityList" @change="handleChange" ></city-list>
  </div>
</template>
<script>
  import CityHeader from './components/header'
  import CitySearch from './components/search'
  import CityList  from './components/list'
  import axios from 'axios'
  export default {
    name: 'City',
    components: {
      CityHeader,
      CitySearch,
      CityList
    },
    data() {
      return {
        cityList:{},
        letter:''
      }
    },
    created () {
      axios.get('/city/cityList').then(res => {
        console.log(res)
        if(res.data.code===0){
          this.cityList=res.data.data
          console.log(this.cityList)
        }
      })
    },
    methods:{
      handleChange(letter){
        this.letter=letter;
//       console.log(letter)
      }
    },
    watch:{
      letter(){
        console.log(this.letter)
      }
    }

  }
</script>
