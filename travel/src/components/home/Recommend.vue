<template>
    <div>
        <div class="recommend-title">热销推荐</div>
        <!-- 列表排序 -->
        <ul>
            <router-link
                tag="li"
                class="item border-bottom"
                v-for="item of recommendList"
                :key="item.id"
                :to="'/detail/' + item.id"
            >
                <img class="item-img-content" :src="item.imgUrl">
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-button">查看详情</button>
                </div>
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: ['recommendList']
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
.recommend-title
    line-height .8rem
    text-indent .2rem
    background-color #eee
    margin-top .1rem
.item
    overflow hidden
    display flex
    height 1.9rem;
    // background-color yellow
    .item-img-content
        width 2.5rem
        height 1.7rem
        padding .1rem
    .item-info
        flex 1
        padding .1rem
        min-width 0
        .item-title
            line-height .54rem
            font-size .30rem
            ellipsis()
        .item-desc
            line-height .4rem
            font-size .28rem
            color #ccc
            ellipsis()
        .item-button
            background-color #ff9300
            line-height .46rem
            padding 0 .2rem
            border-radius .06rem
            margin-top .2rem
            color #fff
</style>
