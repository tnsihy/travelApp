<template>
<div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>

      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item of hotCities" :key="item.id">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>

      <div class="area" v-for="(item,key) of cities" :key="key" :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list" v-for="innerItem of item" :key="innerItem.id">
          <div class="item border-bottom">{{innerItem.name}}</div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import BetterScroll from 'better-scroll'
export default {
  name: 'CityList',
  props: ['cities', 'hotCities', 'letter'],
  mounted: function () {
    this.scroll = new BetterScroll(this.$refs.wrapper)
  },
  watch: {
    letter: function () {
      if (this.letter.length) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.border-topbottom
  &:before
    border-color #ccc
  &:after
    border-color #ccc
.border-bottom
  &:before
    border-color #ccc
.list
  position absolute
  top 1.67rem
  left 0
  right 0
  bottom 0
  overflow hidden
  .title
    line-height 0.44rem
    padding-left 0.2rem
    background-color #eee
    color #666
    font-size 0.26rem
  .button-list
    overflow hidden
    padding 0.1rem 0.6rem 0.1rem 0.1rem
    .button-wrapper
      float left
      width 33.33%
      .button
        margin 0.1rem
        text-align center
        border 0.02rem solid #ccc
        padding 0.1rem 0
  .item-list
    .item
      line-height 0.76rem
      padding-left 0.2rem
</style>
