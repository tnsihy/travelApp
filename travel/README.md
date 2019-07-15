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
  - 配置页面 鼠标无法缩放 `minium-scale=1.0,maxinum-scale=1.0,user-scalable=no`
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
        - 在相应vue组件内引入`@import '../../..'`
        - 或者`@import '@/../..'` (是根据webpack.base.conf.js-resolve-alias设置@替换 可以自己再设置一个，重新设置后需重启服务)
        - /*NOTICE!*/ 在一个css中引入样式  需要加`~`例如`@import '~@/../..'`

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

- 首页父子组件数据传递
  - 通过`props`接收
  - 发现问题 轮播图刷新默认显示最后一个页面 
    - 在`<swiper>`标签内`v-if="swiperList(传递过来的数据).length"`使有数据时swiper才被创建
    - 或者在计算属性`computed`中判断后再写入`<swiper>`标签中

----
- 城市选择页面 路由配置
  - 在`router/index.js`配置
  - 使用`<router-link to="">`实现页面跳转

- 城市搜索框
  - 样式设置不需要写前缀  因为`vue-cli`打包项目时自动加上
