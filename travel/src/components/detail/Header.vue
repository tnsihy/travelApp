<template>
  <div>
    <router-link tag="div" class="header-abs" to="/" v-show="showAbs">
      <i class="iconfont iconfanhui header-abs-back"></i>
    </router-link>

    <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
      <router-link to="/">
        <i class="iconfont iconfanhui i-left"></i>
      </router-link>景点详情
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data: function () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll: function () {
      const top = document.documentElement.scrollTop
      if (top > 60) {
        //  渐变效果
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = {opacity}

        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  activated: function () {
    // 滚动监听
    // console.log('scroll')
    window.addEventListener('scroll', this.handleScroll, {passive: true})
  },
  deactivated: function () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'

.header-abs
  background rgba(0, 0, 0, 0.8)
  padding 0.15rem
  border-radius 50%
  position absolute
  top 0.15rem
  left 0.1rem
  text-align center
  .header-abs-back
    color #fff
    font-size 0.4rem
.header-fixed
  z-index 2
  position fixed
  top 0
  left 0
  right 0
  height $headerHeight
  line-height $headerHeight
  background-color $bgColor
  text-align center
  color #fff
  font-size 0.3rem
  .i-left
    color #fff
    font-size 0.4rem
    position absolute
    top 0
    left 0
    margin-left 0.2rem
</style>
