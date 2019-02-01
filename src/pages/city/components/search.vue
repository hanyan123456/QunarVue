<template>
  <div class="city-search">
    <input  v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音" />
     <div class="city-search-content" >
       <ul>
         <li v-for="item in  list" :key="item.id" class="city-search-item">{{item.name}}</li>
         <!--<li v-for="item in cityList.cities" :key="item.id" @click="handleCity(item.name)">{{item.name}}</li>-->
         <li>没有找到匹配数据</li>
       </ul>
     </div>
  </div>
</template>
<script>
  import Scroll from 'better-scroll'
  import { mapMutations } from 'vuex'
  export default {
    props:{
      cityList:{
        type:Object
      }
    },
    data(){
      return{
        keyword: '',
        list:[],
        timer:null
      }
    },
    methods:{
      handleCity(city){
        this.$store.commit('changeCity',city)
      }
    },
    computed:{

    },
    watch:{
      keyword(){
        if(this.timer){
           clearTimeout(this.timer)
        }
        this.timer=setTimeout(()=>{
        const  result=[]
          for (let i in this.cityList.cities){
            this.cityList.cities[i].forEach((value)=>{
              if(value.spell.indexOf(this.keyword)>-1|| value.name.indexOf(this.keyword)>-1){
               result.push(value)
              }
            })
          }
          this.list=result
        },100)
      }
    },
    mounted(){

    }

  }
</script>
<style scoped>
.city-search{
  background-color: #00bcd4;
  padding: 0 10px 6px 10px;
}
.search-input{
  box-sizing: border-box;
  width:100%;
  font-size: 14px;
  line-height: 14px;
  padding: 5px 0;
  border-radius: 4px;
  text-align: center;
  border:none;
}
  .city-search-content{
    z-index: 1;
    overflow: hidden;
    position: absolute;
    top: 70px;
    left: 0;
    right: 0;
    bottom: 0;
    background: #eee;
  }
  .city-search-item{
    line-height: 30px;
    padding-left:10px;
    background-color: #fff;
    color: #666;
    border-bottom: 1px solid #c2c2c2;
  }
</style>
