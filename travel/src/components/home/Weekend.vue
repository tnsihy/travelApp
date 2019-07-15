<template>
    <div>
        <div class="weekend-title">周末去哪儿</div>
        <!-- 列表排序 -->
        <ul>
            <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
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
  data: function () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'https://h-des-activity-fecp.qunarzz.com/h_des_activity_fe_h_des_activity_fe/973dc1ae0da73a58410186df08ff25cb.jpg',
        title: '大连圣亚海洋世界大连圣亚海洋世界',
        desc: '浪漫大连首站，浪漫的海洋主题乐园'
      }, {
        id: '0002',
        imgUrl: 'https://h-des-activity-fecp.qunarzz.com/h_des_activity_fe_h_des_activity_fe/973dc1ae0da73a58410186df08ff25cb.jpg',
        title: '大连圣亚海洋世界大连圣亚海洋世界',
        desc: '浪漫大连首站，浪漫的海洋主题乐园'
      }, {
        id: '0003',
        imgUrl: 'https://h-des-activity-fecp.qunarzz.com/h_des_activity_fe_h_des_activity_fe/973dc1ae0da73a58410186df08ff25cb.jpg',
        title: '大连圣亚海洋世界大连圣亚海洋世界',
        desc: '浪漫大连首站，浪漫的海洋主题乐园'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
.weekend-title
    line-height .8rem
    text-indent .2rem
    background-color #eee
    margin-top .1rem
.item-img-wrapper
    overflow hidden
    height 0
    padding-bottom 30.4%
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
