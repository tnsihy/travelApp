<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img
        class="banner-img"
        src="http://img1.qunarzz.com/sight/p0/1507/64/34362835b4a219af8b36803d31a6380f.water.jpg_600x330_4ae7abf5.jpg"
      />
      <div class="banner-info">
        <div class="banner-title">大连圣亚海洋世界(AAAA景区)</div>
        <div class="banner-number">
          <i class="iconfont icontupian banner-icon"></i>
          39
        </div>
      </div>
    </div>
    <common-gallary :imgs="imgs" v-show="showGallary" @close="handleGallaryClick"></common-gallary>
  </div>
</template>

<script>
import CommonGallary from '$common/gallary/Gallary'
export default {
  name: 'DetailBanner',
  data: function () {
    return {
      imgs: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1507/64/34362835b4a219af8b36803d31a6380f.water.jpg_600x330_4ae7abf5.jpg'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1507/64/34362835b4a219af8b36803d31a6380f.water.jpg_600x330_4ae7abf5.jpg'
      }],
      showGallary: false
    }
  },
  components: {
    CommonGallary
  },
  methods: {
    handleBannerClick: function () {
      this.showGallary = true
    },
    handleGallaryClick: function () {
      this.showGallary = false
    }
  }
}
</script>

<style lang="stylus" scoped>
.banner
  position relative
  overflow hidden
  height 0
  padding-bottom 55%
  .banner-img
    width 100%
  .banner-info
    display flex
    position absolute
    left 0
    right 0
    bottom 0
    line-height 0.6rem
    color #fff
    background-image linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
    // background-image:linear-gradient(top,red,blue)
    .banner-title
      flex 1
      font-size 0.3rem
      padding 0 0.2rem
    .banner-number
      padding 0 0.3rem
      height 0.4rem
      line-height 0.4rem
      border-radius 0.2rem
      background rgba(0, 0, 0, 0.8)
      font-size 0.24rem
      margin-top 0.1rem
      .banner-icon
        font-size 0.24rem
</style>
