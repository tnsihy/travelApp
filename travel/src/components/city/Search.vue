<template>
    <div class="search">
        <input class="search-input" type="text" placeholder="输入城市名或拼音">
    </div>
</template>

<script>
export default {
  name: 'CitySearch'
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.search
    line-height .72rem
    background-color $bgColor
    padding .05rem .1rem
    .search-input
        line-height .62rem
        height .62rem
        border-radius .06rem
        width 100%
        text-indent .2rem
        color #666
        box-sizing border-box
        padding 0 .1rem
</style>
