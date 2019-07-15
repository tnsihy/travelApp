<template>
    <div>
        <div class="weekend-title">周末去哪儿</div>
        <!-- 列表排序 -->
        <ul>
            <li class="item border-bottom" v-for="item of weekendList" :key="item.id">
                <div class="item-img-wrapper">
                    <img class="item-img-content" :src="item.imgUrl">
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: ['weekendList']
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
.weekend-title
    line-height .8rem
    text-indent .2rem
    background-color #eee
.item-img-wrapper
    overflow hidden
    height 0
    padding-bottom 38%
.item-img-content
    width 100%
.item-info
    padding .1rem
    .item-title
        line-height .54rem
        font-size .30rem
        ellipsis()
    .item-desc
        line-height .4rem
        font-size .28rem
        color #ccc
        ellipsis()
</style>
