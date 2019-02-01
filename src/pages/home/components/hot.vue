<template>
  <div class="hot">
    <div class="hot-title">
      <div class="hot-title-hot">本周热门榜单</div>
      <div class="hot-title-list">全部榜单></div>
    </div>
    <div class="hot-detail">
      <ul>
        <li v-for="item in  hotList">
          <div class="hot-detail-img"><img :src="item.imgUrl"/></div>
          <div class="hot-detail-name">{{item.name}}</div>
          <div class="hot-detail-price"><p>{{item.price}}</p>起</div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    name:'Hot',
    data(){
      return{
        hotList:[
          {id:'001',imgUrl:'http://img1.qunarzz.com/sight/p0/1603/85/85aa0c000578a01e90.water.jpg_150x150_21259c73.jpg',name:'拙政园',price:'￥45'},
          {id:'002',imgUrl:'http://img1.qunarzz.com/sight/p0/1409/09/cab95ab97cef71fe7256faba1ae77140.jpg_150x150_fef5d8bc.jpg',name:'狮子林',price:'￥36'},
          {id:'003',imgUrl:'http://img1.qunarzz.com/sight/p0/1707/33/33c133cf198d092aa3.water.jpg_150x150_b918cd60.jpg',name:'虎丘',price:'￥37'},
          {id:'001',imgUrl:'http://img1.qunarzz.com/sight/p0/1603/85/85aa0c000578a01e90.water.jpg_150x150_21259c73.jpg',name:'拙政园',price:'￥45'},
          {id:'002',imgUrl:'http://img1.qunarzz.com/sight/p0/1409/09/cab95ab97cef71fe7256faba1ae77140.jpg_150x150_fef5d8bc.jpg',name:'狮子林',price:'￥36'},
          {id:'003',imgUrl:'http://img1.qunarzz.com/sight/p0/1707/33/33c133cf198d092aa3.water.jpg_150x150_b918cd60.jpg',name:'拙政园',price:'￥45'},
          {id:'001',imgUrl:'http://img1.qunarzz.com/sight/p0/1603/85/85aa0c000578a01e90.water.jpg_150x150_21259c73.jpg',name:'狮子林',price:'￥36'},
          {id:'002',imgUrl:'http://img1.qunarzz.com/sight/p0/1409/09/cab95ab97cef71fe7256faba1ae77140.jpg_150x150_fef5d8bc.jpg',name:'拙政园',price:'￥45'},
          {id:'003',imgUrl:'http://img1.qunarzz.com/sight/p0/1707/33/33c133cf198d092aa3.water.jpg_150x150_b918cd60.jpg',name:'虎丘',price:'￥37'}
        ]
      }
    }
  }
</script>
<style>
  .hot-title{
    display: flex;
    justify-content: space-between;
    padding: 10px 10px;
  }
  .hot-title-hot{
    font-size: 16px;
  }
  .hot-title-list{
    font-size: 14px;
    color: darkgray;
  }
  .hot-detail{
  padding:0 10px ;
  }
  .hot-detail ul{
    display: flex;
    overflow-x:scroll;
    white-space: nowrap;
    text-align: center;
  }
  .hot-detail ul li{
    margin-right: 5px;
  }
  .hot-detail-img img{
    width: 100px;
    height:100px;
  }
  .hot-detail-name{
    font-size: 13px;
  }
  .hot-detail-price {
    font-size: 12px;
    margin-top: 4px;
  }
  .hot-detail-price p{
    color: coral;
   display: inline-block;
  }
</style>
