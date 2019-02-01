<template>
  <div class="weekend">
   <div class="weekend-title">周末去哪儿</div>
    <div class="weekend-detail" v-for="item in  weekendList" :key="item.index">
      <div class="weekend-detail-img">
        <img :src="item.imgUrl"/>
      </div>
      <div  class="weekend-detail-name">{{item.name}}</div>
      <div  class="weekend-detail-desc">{{item.desc}}</div>
    </div>
  </div>
</template>
<script>
  export default {
    name:'Homeweekend',
    data(){
      return{
        weekendList:[
          {id:'001',imgUrl:'http://img1.qunarzz.com/sight/source/1505/8a/d412db9fcd44dd.jpg_r_640x214_86f303a2.jpg',name:'山清水秀之地',desc:'钟情于山水之间，别有一番雅致'},
          {id:'002',imgUrl:'http://img1.qunarzz.com/sight/source/1505/70/b2f8425ce486ed.jpg_r_640x214_5db9de57.jpg',name:'山清水秀之地',desc:'钟情于山水之间，别有一番雅致'},
          {id:'003',imgUrl:'http://img1.qunarzz.com/sight/source/1507/ab/1c456b9cbffc31.jpg_r_640x214_1c2552de.jpg',name:'山清水秀之地',desc:'钟情于山水之间，别有一番雅致'},
          {id:'004',imgUrl:'http://img1.qunarzz.com/sight/source/1505/3e/18b666031b22e7.jpg_r_640x214_864dce2f.jpg',name:'山清水秀之地',desc:'钟情于山水之间，别有一番雅致'},
          {id:'005',imgUrl:'http://img1.qunarzz.com/sight/source/1505/d7/5acd9640ee6cb2.jpg_r_640x214_975d2c3f.jpg',name:'山清水秀之地',desc:'钟情于山水之间，别有一番雅致'},
        ]
      }
    }
  }
</script>
<style>
.weekend{
}
  .weekend-title{
    padding:0 15px 15px 15px;
    font-size: 15px;
    line-height: 16px;
  }
  .weekend-detail{
    padding-bottom: 10px;
  }
  .weekend-detail-img {
    width: 100%;
    height:0;
    padding-bottom: 37.09%;
  }
.weekend-detail-img img{
  width:100%;

}
.weekend-detail-name{
 font-size: 14px;
  padding:6px 15px;
  }
  .weekend-detail-desc{
    font-size: 12px;
    color: darkgray;
    padding:5px 15px;
  }
</style>
