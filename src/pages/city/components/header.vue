<template>
    <div class="city-header">
      <div class="city-header-title">
        <router-link to="/"> <i class="city-header-break"></i></router-link>
        <div class="city-header-content"> 城市选择</div>
      </div>

    </div>
</template>
<script>
  export default {
   methods:{
     handleCity(city){
       this.$store.commit('changeCity',city)
//         alert(city)
     }
   }
  }
</script>
<style scoped>
.city-header{
  background-color: #00bcd4;
  color: white;
  padding: 15px 10px 0 10px;
}
.city-header-title{
  display: flex;
  padding-bottom: 8px;
}
.city-header-break{
  display: inline-block;
  width:16px;
  height:16px;
  vertical-align: -2px;
  background: url("../../../assets/images/left-arrow.svg") 50% / contain no-repeat;
}
.city-header-content{
  flex: 1;
  color: white;
  font-size: 16px;
  line-height: 16px;
  text-align: center;
}

</style>
