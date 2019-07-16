<template>
    <ul class="list">
        <li class="item">A</li>
        <li class="item">A</li>
        <li class="item">A</li>
        <li class="item">A</li>
        <li class="item">A</li>
        <li class="item">A</li>
        <li class="item">A</li>
        <li class="item">A</li>
    </ul>
</template>

<script>
export default {
  name: 'CityAlphabet'
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
