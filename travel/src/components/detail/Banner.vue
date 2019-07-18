<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img
        class="banner-img"
        :src="bannerImg"
      />
      <div class="banner-info">
        <div class="banner-title">{{this.sightName}}</div>
        <div class="banner-number">
          <i class="iconfont icontupian banner-icon"></i>
          {{this.gallaryImgs.length}}
        </div>
      </div>
    </div>
    <common-animation>
      <common-gallary
        :gallaryImgs="gallaryImgs"
        v-show="showGallary"
        @close="handleGallaryClick"
      ></common-gallary>
    </common-animation>
  </div>
</template>

<script>
import CommonGallary from '$common/gallary/Gallary'
import CommonAnimation from '$common/fade/Animation'
export default {
  name: 'DetailBanner',
  props: ['bannerImg', 'sightName', 'gallaryImgs'],
  data: function () {
    return {
      showGallary: false
    }
  },
  components: {
    CommonGallary,
    CommonAnimation
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
