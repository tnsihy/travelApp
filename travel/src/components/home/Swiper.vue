<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for='item of swiperList' :key="item.id">
        <img
          class="swiper-image"
          :src="item.imgUrl"
        />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data: function () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [
        {
          id: '0001',
          imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/a685001bbf5e77a203ff8815e953efbe.jpg_945x288_52b6ec01.jpg'
        },
        {
          id: '0002',
          imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20196/ebf7306335a5e060dbbfe42b8e8ede9f.jpg_945x288_da043916.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active
  background-color #fff
.wrapper
  overflow hidden
  width 100%
  height 0
  padding-bottom 30.1%
  .swiper-image
    width 100%
    background #ccc
</style>
