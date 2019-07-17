<template>
    <div>
        <detail-banner :bannerImg="bannerImg" :sightName="sightName" :gallaryImgs="gallaryImgs"></detail-banner>
        <!-- <keep-alive> -->
          <detail-header></detail-header>
        <!-- </keep-alive> -->
        <div class="content">
          <detail-list :categoryList="categoryList"></detail-list>
        </div>
    </div>
</template>

<script>
import DetailBanner from './detail/Banner'
import DetailHeader from './detail/Header'
import DetailList from './detail/List'
import axios from 'axios'
export default {
  name: 'Detail',
  data: function () {
    return {
      bannerImg: '',
      categoryList: [],
      gallaryImgs: [],
      sightName: ''
    }
  },
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  methods: {
    getDetailInfo: function () {
      axios
        .get('/api/detail.json', {
          params: {
            id: this.$route.params.id
          }
        })
        .then(this.getDetailInfoSucc)
    },
    getDetailInfoSucc: function (res) {
      console.log(res)
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.bannerImg = data.bannerImg
        this.categoryList = data.categoryList
        this.gallaryImgs = data.gallaryImgs
        this.sightName = data.sightName
      }
    }
  },
  mounted: function () {
    this.getDetailInfo()
  }
}
</script>

<style lang="stylus" scoped>
.content
  height 50rem
</style>
