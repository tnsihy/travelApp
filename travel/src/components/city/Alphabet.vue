<template>
    <ul class="list">
        <li
            class="item"
            v-for="item of letters"
            :key="item"
            :ref="item"
            @touchstart.prevent="handleTouchStart"
            @touchmove="handleTouchMove"
            @touchend="handleTouchEnd"
            @click="handleLetterClick"
        >
            {{item}}
        </li>
    </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: ['cities'],
  data: function () {
    return {
      touchStatus: false,
      timer: null,
      startY: 0
    }
  },
  computed: {
    letters: function () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  updated () {
    // 获取A所在DOM的offsetTop值
    this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {
    handleLetterClick: function (e) {
      // 传递点击的字母
      this.$emit('change', e.target.innerHTML)
    },
    handleTouchStart: function () {
      this.touchStatus = true
    },
    handleTouchMove: function (e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 79
          const index = Math.floor((touchY - this.startY) / 20)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 16)
      }
    },
    handleTouchEnd: function () {
      this.touchStatus = false
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.list
    position absolute
    top 1.67rem
    right 0
    bottom 0
    width .4rem
    // background red
    display flex
    flex-direction column
    justify-content center
    .item
        line-height .44rem
        text-align center
        color $bgColor
</style>
