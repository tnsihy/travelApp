# travel

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).



-------------------------------------------------------------------------------
- Git
  - 进入travel文件夹`git status` 查看本地仓库文件未上传
  - `git add .`
  - `git commit -m '***(描述)'`
  - 推送到Github上 `git push`
  - 创建分支 `git pull` 把线上分支拉到本地  `git checkout ***(分支名)` 切换分支
  - 合并分支
    - `git checkout master` 切换到master
    - `git merge origin/***(分支名)` 合并到master上
    - `git push`
  - 删除分支
    - `git checkout master` 切换到主分支
    - `git branch -a` 查看已有的本地远程分支
    - `git push origin --delete ***(远程分支)` 删除远程分支
    - `git branch -a` 删除后查看分支情况

- 移动端网页
  - 配置页面 鼠标无法缩放 `minimum-scale=1.0,maximum-scale=1.0,user-scalable=no`
  - `assets/styles/reset.css` 不同手机初始化样式统一
    - reset.css样式中font-size为50px，即1rem = 50px
    - 设计师给的是2倍尺寸图片86px -> 43px/50px = .86rem
  - `assets/styles/border.css` 1像素边框问题
  - 引入fastclick库 解决移动端300ms点击(click事件)延迟问题 `npm install fastclick --save` 

- 首页Header部分
    - 使用stylus编写css样式 
      - `npm install stylus --save`
      - `npm install stylus-loader --save`
      - 使用时 `lang="stylus"`
    - Header.vue相当于一个组件 其余类似
    - iconfont的使用
    - 优化代码
      - 样式style相同 可通过创建`assets/styles/varibles.styl`存放一些经常会使用到的样式，如颜色等 `$bgColor = #00bcd4` 去简化代码
        - 在相应vue组件内引入`@import '../../..'` 在css内引入用@import
        - 或者`@import '~@/../..'` (是根据webpack.base.conf.js-resolve-alias设置@替换 可以自己再设置一个，重新设置后需重启服务 需要加`~`)

- 首页轮播
  - 在Github上查询vue-awesome-swiper 安装swiper3版本`npm install vue-awesome-swiper@2.6.7 --save` 根据Github上说明使用
  - 为使图片未加载时撑开一定高度 避免页面抖动 通过图片高度与宽度的比例30.1 设置`width:100% height:0 padding-bottom:30.1%`
  - 为轮播加圆点(分页导航`pagination`)
    - 圆点样式颜色更改  Swiper插件的class名且scope的缘故，采用`>>>`穿透 
   - 循环切换`loop: true`

- 图标布局
  - /*NOTICE!*/ 根据宽高比例设置
  - 解决轮播效果中 只有一个热门景点时拖拽下方无法实现轮播  `设置高度一致` 
  - 使用vue-awesome-swiper制作轮播图，手动拖动时报错 解决：`touch-action none`
  - 1个页面只能显示8个图标，第9个显示不出 使用计算属性`computed`在哪一页显示 -> 二维数组
  - 优化
    - 当描述`desc`文字过多时做的处理 希望是省略号(...)
      - 对于单行文字省略 `overflow:hidden white-space:nowrap text-overflow ellipsis`
      - 采用外部样式`mixins.styl`
  - 当希望图片不要自动轮播时 `autoplay: false`

- 推荐组件(热销区块 周末去哪儿)
  - 1像素边框解决方案  只需在class中增加`border-bottom`
  - 显示省略号`minxins.styl`失效  在`flex`布局样式中增加`min-width：0`保证内容不超出外层容器

- Ajax获取首页数据
  - 安装axios `npm install axios --save`
    - 在Home.vue中发送ajax请求 而不是在所有组件中
    - 写完`axios.get('/api/***').then(***)`报错`GET http://localhost:8080/api/index.json 404 (Not Found)` 是因为找不到
  - 在没有后端服务支持的情况下，实现数据模拟
    - 可以将`.json`文件存放在static文件夹中，通过url可以访问到静态资源 但是`/static/mock/***`只是数据模拟，不支持上线，应该是`/api/***`
    - 写回`/api/***`要通过转发机制上线才能使用  webpack提供了一个代理功能：在config/index.js中`proxyTable:{'/api':{target:'http://localhost:8080',pathRewrite:{ '^/api': '/static/mock'}`
    - 更改了配置项 需要重启服务
  - 可通过钩子函数`mounted`写一个函数 然后在`methods`写一个成功的函数去返回数据`res`，获取对应的数据

- 首页父子组件数据传递
  - 通过`props`接收
  - 发现问题 轮播图刷新默认显示最后一个页面 
    - 在`<swiper>`标签内`v-if="swiperList(传递过来的数据).length"`使有数据时swiper才被创建
    - 或者在计算属性`computed`中判断后再写入`<swiper>`标签中

-------------------------------------------------------------------------------------
- 城市选择页面 路由配置
  - 在`router/index.js`配置
  - 使用`<router-link to="">`实现页面跳转

- 城市搜索框
  - 样式设置不需要写前缀  因为`vue-cli`打包项目时自动加上

- 城市列表
  - 在某元素前后元素设置样式 `&:before  &:after`
  - `overflow:hidden`有隐藏溢出、清除浮动(父级)、解决外边距`margin`塌陷问题
  - 先固定页面不能通过鼠标滑动
  - 再使用`Better-scroll`插件 实现鼠标滑动
    - 在Github上查找`Better-scroll`
    - 安装`npm installl better-scroll --save`
    - 查找说明上元素符合的DOM结构
    - 在需要的地方引入  可以用`ref`获取DOM 例如`ref='wrapper' ` 然后通过`this.scroll = new BetterScroll(this.$refs.wrappper)`使得可以滑动  有弹性动画效果
  - 字母垂直居中且竖直排列 `display:flex flex-direction:column justfy-content:center`
  - `click`与`touchstart`事件
    - 用户触发`touchstart`事件必然会触发`click`事件，反之不是
    - 鼠标操作只能触发`click`事件
    - PC设备为触摸屏幕时可同时支持`click`和`touchstart`事件
    - 移动设备上浏览器将会在`click`事件发生时延迟300ms
  - 同时绑定两个事件时，在移动设备上会发生冲突
    - 解决：使用`preventDefault阻止元素的默认事件`
  - `touchstart`事件：当手指触摸屏幕时候触发，即使已经有一个手指放在屏幕上也会触发
  - `touchmove`事件：当手指在屏幕上滑动的时候连续地触发
  - `touchend`事件：当手指从屏幕上离开的时候触发
  - 滑动时报错`[Intervention] Unable to preventDefault inside passive event listener due to target being treated as passive. See URL` 解决 `*{touch-action:pan-y}`
  - 列表性能优化
    - 使用`updated`计算一些值，当axios获取到数据时，cities才有数据，Alphabet.vue发生变化，里边的数据也会更新即触发`updated`
    - 屏幕滑动频率很高，解决：使用`setTimeout`去延迟执行
      - 在16ms之间又做了手指滑动，会把上一次操作清除再执行本次操作

- 城市搜索框
  - `v-show`
  - 通过`stringObject.indexOf(searchvalue,fromindex) > -1`知道是否searchvalue存在
  - 监听某个值的变化可以用`watch:{ ***(被监听的值):function(){}}`
  - 尽量不要在模块中写逻辑 例如`v-show="!list.length"`

- 使用Vuex实现首页和城市搜索页面数据共享
  - Home.vue和City.vue没有父级可以传递数据 可以使用`bus`但是比较麻烦
  - 当使用复杂的数据传递时可以使用`Vuex`
  - 核心：`State` `Mutation` `Action`
    - `State`是共用数据 `Action`(异步操作、复杂同步操作) 通过`Mutation`去改变`State`的值
  - 安装Vuex  `npm installl vuex --save`
  - 创建`src/store/index.js`
  - 引入Vue引入Vuex 创建仓库并暴露出去
    - `import Vue from 'vue'`
    - `import Vuex from 'vuex'`
    - 插件使用`Vue.use(Vuex)`
    - `export default new Vuex.Store({})`
  - 在main.js引入`import store from './store'` 在Vue中注册`store`
  - 使用`{{this.$store.state.***}}`获取
  - 要改变state值 `this.$store.dispatch(***,***传递的值)`派发一个***的actions 然后在`store/index.js`写`actions` actions需要调用mutations去改变state  详情看`store/index.js`
  - 若不是异步和复杂的同步操作可以不使用`actions`

- 点击城市之后返回首页 涉及到路由的知识`Vue-router`
  - 可以查询Vue.js官网Vue-router编程式导航 在Vue实例内部可以使用`this.$router.push`访问路由
    - 声明式`<router-link :to>`
    - 编程式`router.push(...)`

-----------------------------------------------------------------------------
- 详情页面 点击热销推荐的`查看详情`可跳转页面
  - 在`<ul>`标签内写`<router-link>`时需要写成`<router-link tag="li" :to="">`
  - 各个详情页面跳转页面不同`:to="/detail/" + item.id` 可根据id不同跳转不同
  - 设置路由
  - 图片下方透明度渐变效果
    - 在`banner-info`内设置渐变`background-image:linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,.8))`

- 公用图片画廊组件拆分
  - 若很多功能页面都需要有的效果 -> 公用组件 -> 可以放在`common`
  - `position fixed`固定定位，不随滚动条移动而变化
  - 使用`swiper`实现轮番 可以查看swiper官网 `paginationType:'fraction'`可以实现分式
  - 由于`overflow:hidden`会隐藏溢出 可以通过`>>>`将组件的样式换掉
  - 轮播图出现滚动问题
    - 由于`v-show`的变化导致swiper关闭或者重启 
    - 监视器
      - `observeParents:true`
      - `observer:true` 
    - swiper插件监听到observer或者observeParents发生DOM变化时自我刷新

- 实现header渐隐渐现效果
  - 页面没有内容也可以滚动 可以通过设置`height:50rem`去撑开一个空白区域
  - `<keep-alive>`是一个抽象组件 会触发`activated`钩子函数
  - 渐隐渐现效果
    - `:style:opacityStyle`
    - `opacityStyle:{ opacity:0}`
    - 根据滑动高度去计算opacity 然后赋值给opacityStyle  详情查看`detail/Header.vue`

- 对全局事件的解绑
  - 在钩子函数`activated`中`window.addEventListener('scroll', this.handleScroll)`是对全局的绑定 全局绑定的话会对其他页面也造成影响(不过我居然不会有一直输出console.log????) 因为我只把`<keep-alive>`写在需要的组件里而不是`App.vue`
  - 钩子函数`deactivated`解除全局事件的绑定

- 使用递归组件实现详情页面列表
  - 当数据有`children`时 然后列表多级输出可以使用递归组件
    - 即在自身vue中使用自身的组件 例子是在`List.vue`中使用`<detail-list></detail-list>`
    - 判断是否存在children `v-if="item.children"`有就使用递归组件

- 使用ajax请求数据 根据id请求的URL不同
  - `axios`
    - `.get('/api/detail.json?id=' + this.$route.params.id')`
    - `.then()`
  - 获取URL上id `this.$route.params.id`

- `<keep-alive>`放在App.vue中包裹所有的组件
  - 可以使用`<keep-alive exclude="Detail">`使组件页面不被`缓存` 每次进入页面mounted都会执行

- 组件的name在什么时候会用到
  - 递归组件时 `children`
  - 取消缓存时 `<keep-alive>`
  - 浏览器控制台`Vue`方便查看组件

- 跳转页面后回到顶部
  - 查看`vue-router`官网`滚动行为`
  - 在`router/index.js`中增加一项`scrollBehavior (to, from, savedPosition) {`
    `return { x: 0, y: 0 }`
  - `}`

- 为轮播组件做渐隐渐现效果
  - `<transition><slot></slot></transition>`
  - `.v-enter .v-leave-to  opacity:0`
  - `.v-enter-active,.v-leave-active  transition opacity 0.5s`
  - 将`<transition>`包裹在需要动画效果的标签外层 里层相当于`<slot>`

- Vue项目的接口联调
  - 之前使用的是`static/mock`上的模拟数据
  - 现在要将后台的真实数据拿到
  - 创建一个`server`文件夹
    - 安装Koa `npm install koa --save`
    - 安装Koa-router `npm install koa-router --save`
    - 可以使用`fs`模块读取`json`文件返回
    - 将前端的`config/index.js`中`dev`项增加`proxyTable`的`target`换为后台端口 例如`3000` 将`pathRewrite`对应到后台的文件夹 修改`config`后前端服务需重启  其实是一种处理跨域的方式：利用代理

- 真机测试
  - 可以通过`cmd` -> `ipconfig`查找本机上网ip地址 将ip地址放到网址上 是打不开的
   - 解决 将前端的`package.json`的`scripts` -> `dev`修改为
     - `webpack-dev-server --host 0.0.0.0 --inline --progress --config build/webpack.dev.conf.js`
     - 即增加`--host 0.0.0.0` 网址就可以打开
 - 与手机在同一个局域网内时 手机可以通过ip + 端口号的形式访问到
 - 可能出现低版本手机访问为`白屏` 可以安装`npm install babel-polyfill --save`
   - 在main.js引入`import 'babel-polyfill'`
