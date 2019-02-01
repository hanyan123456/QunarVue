<template>
  <div class="recommend">
   <div class="recommend-title">猜你喜欢</div>
    <div class="recommend-detail">
      <ul>
        <li v-for="item in recommendList" :key="item.index">
          <div class="recommend-detail-wrapper">
            <div class="recommend-detail-avatar"><img :src="item.imgUrl"/></div>
            <div class="recommend-detail-content">
              <div class="recommend-detail-content-title">{{item.name}}</div>
              <div class="recommend-detail-content-comment">
                <div class="recommend-detail-content-comment-star">
                  <all-star></all-star>
                </div>
                <div class="recommend-detail-content-comment-count">2583条评论</div>
              </div>
              <div class="recommend-detail-content-price">{{item.price}}起</div>
            </div>
            <div class="recommend-detail-address">{{item.address}}</div>
          </div>
        </li>

      </ul>
    </div>
  </div>
</template>
<script>
  import AllStar from './start'
  export default {
    name:'Homerecommend',
    components:{
      AllStar
    },
    data(){
      return{
        recommendList:[
          {id:'001',imgUrl:'http://img1.qunarzz.com/sight/p0/1505/d6/d6a19edb95615a3f.water.jpg_200x200_3254a1b8.jpg',name:'周庄',price:'35元',address:'吴中区'},
          {id:'002',imgUrl:'http://img1.qunarzz.com/sight/p0/1507/27/6640b07ce9a3dd7d9e37743ff58c1c3f.water.jpg_200x200_d7cd9982.jpg',name:'周庄',price:'35元',address:'吴中区'},
          {id:'003',imgUrl:'http://img1.qunarzz.com/sight/p0/1412/10/e980cba87b79a92f54c511a393749b8d.water.jpg_200x200_d8ceaa65.jpg',name:'周庄',price:'35元',address:'吴中区'},
          {id:'004',imgUrl:'http://img1.qunarzz.com/sight/p0/1807/e9/e9b02e3ea1db23e2a3.img.jpg_200x200_440d028e.jpg',name:'周庄',price:'35元',address:'吴中区'},
          {id:'005',imgUrl:'http://img1.qunarzz.com/sight/p0/1505/d6/d6a19edb95615a3f.water.jpg_200x200_3254a1b8.jpg',name:'周庄',price:'35元',address:'吴中区'},
          {id:'006',imgUrl:'http://img1.qunarzz.com/sight/p0/1507/27/6640b07ce9a3dd7d9e37743ff58c1c3f.water.jpg_200x200_d7cd9982.jpg',name:'周庄',price:'35元',address:'吴中区'},
          {id:'007',imgUrl:'http://img1.qunarzz.com/sight/p0/1412/10/e980cba87b79a92f54c511a393749b8d.water.jpg_200x200_d8ceaa65.jpg',name:'周庄',price:'35元',address:'吴中区'},
          {id:'008',imgUrl:'http://img1.qunarzz.com/sight/p0/1807/e9/e9b02e3ea1db23e2a3.img.jpg_200x200_440d028e.jpg',name:'周庄',price:'35元',address:'吴中区'},
          {id:'009',imgUrl:'http://img1.qunarzz.com/sight/p0/1505/d6/d6a19edb95615a3f.water.jpg_200x200_3254a1b8.jpg',name:'周庄',price:'35元',address:'吴中区'},
          {id:'010',imgUrl:'http://img1.qunarzz.com/sight/p0/1507/27/6640b07ce9a3dd7d9e37743ff58c1c3f.water.jpg_200x200_d7cd9982.jpg',name:'周庄',price:'35元',address:'吴中区'},
          {id:'011',imgUrl:'http://img1.qunarzz.com/sight/p0/1412/10/e980cba87b79a92f54c511a393749b8d.water.jpg_200x200_d8ceaa65.jpg',name:'周庄',price:'35元',address:'吴中区'},
          {id:'012',imgUrl:'http://img1.qunarzz.com/sight/p0/1807/e9/e9b02e3ea1db23e2a3.img.jpg_200x200_440d028e.jpg',name:'周庄',price:'35元',address:'吴中区'},
          {id:'013',imgUrl:'http://img1.qunarzz.com/sight/p0/1507/27/6640b07ce9a3dd7d9e37743ff58c1c3f.water.jpg_200x200_d7cd9982.jpg',name:'周庄',price:'35元',address:'吴中区'},
          {id:'014',imgUrl:'http://img1.qunarzz.com/sight/p0/1412/10/e980cba87b79a92f54c511a393749b8d.water.jpg_200x200_d8ceaa65.jpg',name:'周庄',price:'35元',address:'吴中区'},
          {id:'015',imgUrl:'http://img1.qunarzz.com/sight/p0/1807/e9/e9b02e3ea1db23e2a3.img.jpg_200x200_440d028e.jpg',name:'周庄',price:'35元',address:'吴中区'},
        ]
      }
    }
  }
</script>
<style>
  .recommend{
    padding: 0 10px;
  }
  .recommend-title{
    font-size: 16px;
  }
  .recommend-detail ul{
  }
  .recommend-detail ul li{
    border-bottom: 1px solid #c2c2c2;
    padding-bottom: 10px;
    padding-top: 20px;
  }
  .recommend-detail{
   padding: 15px 0 15px 0;
  }
  .recommend-detail-wrapper{
    display: flex;
  }
.recommend-detail-avatar img{
  width:100px;
  height:100px;
}
  .recommend-detail-content{
    flex: 1;
    margin-left: 8px;
  }
  .recommend-detail-address{
    margin-top: 60px;
    font-size: 12px;
    color: darkgray;
  }
  .recommend-detail-content-comment{
    display: flex;
  }
</style>
