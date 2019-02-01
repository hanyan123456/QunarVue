<template>
  <div class="header">
    <div class="header-icon"></div>
    <div class="header-search">
      <div class="header-search-text">输入城市/景点/游玩主题</div>
    </div>

    <router-link to='/city'>
      <div class="header-city" >{{this.$store.state.city}}</div>
    </router-link>
  </div>
</template>
<script>
  import { mapState } from 'vuex'
  export default {
    name:'HomeHeader',
    computed: {
      ...mapState({
        ...mapState(['city'])
      })
    }
  }
</script>
<style lang="stylus" scoped>
  .header
    display flex
    height 42px
    line-height 42px
    padding 7px 10px
    background-color #07e9dc
    .header-icon
      width 20px
      height 20px
      margin-top 14px
      background url("../../../assets/images/left-arrow.svg") 50% / contain no-repeat
    .header-search
      flex 1
      height 28px
      background-color #fff
      margin 11px 14px
      border-radius 4px
      .header-search-text
        display inline-block
        vertical-align 10px
        font-size 14px
        line-height 28px
        text-align center
        color #c2c2c2
    .header-city
      font-size 14px
      color #fff
    &::after
      content ''
      display inline-block
      margin-top 20px
      margin-left 4px
      width 0
      height 0
      border-width 5px
      border-style solid
      border-color #fff transparent transparent

  .header-search-text::before{
    content: '';
    display: inline-block;
    width 14px
    height 14px
    background url("../../../assets/images/search-sm.svg") 50% 50%/ contain no-repeat
  }

</style>
