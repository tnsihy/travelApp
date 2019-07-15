<template>
    <div class="header">
        城市选择
        <router-link to="/">
            <div class="iconfont iconfanhui i-left"></div>
        </router-link>
    </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.header
    height $headerHeight
    line-height $headerHeight
    background-color $bgColor
    text-align center
    color #fff
    font-size .3rem
    position relative
    .i-left
        color #fff
        font-size 0.4rem
        position absolute
        top 0
        margin-left .2rem
</style>
