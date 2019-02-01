<template>
  <div class="city-list">
    <div class="city-list-now" id="当前">
      <div class="city-list-now-title">当前城市</div>
      <div class="city-list-now-content">
        <div class="city-list-now-content-name">{{this.$store.state.city}}</div>
      </div>
    </div>
    <div class="city-list-hot" id="热门">
      <div class="city-list-hot-title">热门城市</div>
      <div class="city-list-hot-content">
        <ul>
          <li @click="handleCity(item.name)" v-for="item in cityList.hotCities">
            <div class="city-list-hot-content-item">{{item.name}}</div>
          </li>
        </ul>
      </div>
    </div>
    <div class="city-list-lists"  >
        <ul class="city-list-lists-names" v-for="(item,key) in cityList.cities" :key="item.id" :ref="key">
          <li class="city-list-lists-title" :id="key">{{key}}</li>
          <li v-for="item in cityList.cities[key]" @click="handleCity(item.name)">
            <div class="city-list-lists-name">{{item.name}}</div>
          </li>
        </ul>

    </div>
    <div class="city-list-index">
      <ul>
        <li><a href="#当前">当前</a></li>
        <li><a href="#热门">热门</a></li>
        <li v-for="(item,key) in cityList.cities" :key="item.id">
          <a :href="`#${key}`"><div>{{key}}</div></a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      cityList: {
        type: Object
      },
      letter:{
        type:String
      }
    },
    data(){
      return{
//          letter:''
      }
    },
      methods:{
        changeCity(e){
         this.$emit('change',e.target.innerText)
        },
        handleCity(city){
          this.$store.commit('changeCity',city)
//         alert(city)
        }
      },
    watch:{
//      letter(){
//        if(this.letter){
//          const element=this.$refs[this.letter][0]
//          this.scroll.scrollToElement(element)
//        }
//      }
    }

  }
</script>
<style scoped>
  .city-list{
    margin-top: 5px;
  }
  .city-list-now-title,
  .city-list-hot-title,
  .city-list-lists-title{
    font-size: 14px;
    line-height: 14px;
    padding:4px 10px;
    background-color:#ebebeb;
  }
  .city-list-now-content,
  .city-list-hot-content{
    padding: 10px 10px;
    border-bottom: 1px solid #c2c2c2;
  }
  .city-list-hot-content{
    padding-bottom: 0;
  }
  .city-list-now-content-name,
  .city-list-hot-content-item{
    width: 100px;
    border: 1px solid #c2c2c2;
    border-radius: 3px;
    text-align: center;
    font-size: 14px;
    line-height: 14px;
    padding:4px 0;
  }

  .city-list-hot-content li{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

  }
  .city-list-hot-content-item{
    margin-bottom: 10px;
  }
  .city-list-lists-name{
    font-size: 14px;
    line-height: 14px;
    padding: 10px ;
    border-bottom: 1px solid #c2c2c2;
  }
  .city-list-lists-names li div:last-child{
    border-bottom: none;
  }
  .city-list-index{
    position:fixed;
    top:80px;
    right: 0;
    padding: 0 6px;
    text-align: center;
  }
  .city-list-index ul li a,
  .city-list-index{
    color:#00bcd4;
  }
  .city-list-index ul li{
    margin-bottom: 4px;
  }
</style>
