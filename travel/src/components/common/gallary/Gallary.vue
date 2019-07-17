<template>
  <div class="container" @click="handleGallaryClick">
    <div class="wrapper">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item,index) of gallaryImgs" :key="index">
          <img class="swiper-image" :src="item" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonGallary',
  props: ['gallaryImgs'],
  data: function () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observeParents: true,
        // 实时更新
        observer: true
      }
    }
  },
  methods: {
    handleGallaryClick: function () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="stylus" scoped>
.container >>> .swiper-container
  overflow inherit

.container
  display flex
  flex-direction column
  justify-content center
  z-index 99
  position fixed
  top 0
  left 0
  right 0
  bottom 0
  background-color #000
  .wrapper
    width 100%
    height 0
    padding-bottom 100%
    .swiper-image
      width 100%
    .swiper-pagination
      color #fff
      position absolute
      bottom -1rem
</style>
