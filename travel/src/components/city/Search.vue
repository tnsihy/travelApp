<template>
  <div>
    <div class="search">
      <input class="search-input" type="text" placeholder="输入城市名或拼音" v-model="keyword"/>
    </div>
    <div class="search-content" ref="search" v-show="keyword">
        <ul>
            <li
                class="search-item border-bottom"
                v-for="item of list"
                :key="item.id"
                @click="handleCityClick(item.name)"
            >{{item.name}}</li>
            <li class="search-item border-bottom" v-show="hasNoData">
                没有找到匹配数据
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
import BetterScroll from 'better-scroll'
export default {
  name: 'CitySearch',
  props: ['cities'],
  data: function () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  watch: {
    keyword: function () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  mounted: function () {
    this.scroll = new BetterScroll(this.$refs.search)
  },
  computed: {
    hasNoData: function () {
      return !this.list.length
    }
  },
  methods: {
    handleCityClick: function (city) {
      this.$store.commit('changeCity', city)
      this.$router.push('/')
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'

.search
  line-height 0.72rem
  background-color $bgColor
  padding 0.05rem 0.1rem
  .search-input
    line-height 0.62rem
    height 0.62rem
    border-radius 0.06rem
    width 100%
    text-indent 0.2rem
    color #666
    box-sizing border-box
    padding 0 0.1rem
.search-content
  z-index 1
  background-color #eee
  position absolute
  left 0
  right 0
  bottom 0
  top 1.68rem
  .search-item
    line-height .62rem
    padding-left .2rem
    background-color #fff
    color #666

</style>
