<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont iconfanhui i-left"></div>
    </div>
    <div class="header-input">
      <i class="iconfont iconsousuo"></i>输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{this.city}}
        <i class="iconfont iconjiantou i-right"></i>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  props: ['city']
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'

.header
  line-height $headerHeight
  display flex
  background-color $bgColor
  color #fff
  .header-left
    width 0.64rem
    float left
    .i-left
      font-size 0.4rem
      text-align center
  .header-input
    flex 1
    background #ffffff
    border-radius 0.05rem
    margin-top 0.10rem
    height 0.64rem
    line-height 0.64rem
    margin-left 0.2rem
    color #ccc
    padding-left 0.2rem
  .header-right
    width 1.24rem
    float right
    text-align center
    color #fff
    .i-right
      font-size 0.2rem
</style>
