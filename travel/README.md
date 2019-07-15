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
  - 进入travel文件夹`git status`查看本地仓库文件未上传
  - `git add .`
  - `git commit -m '***(描述)'`
  - 推送到Github上 `git push`
  - 创建分支 `git pull`把线上分支拉到本地  `git checkout ***(分支名)`切换分支
  - 合并分支
    - `git checkout master` 切换到master
    - `git merge origin/***(分支名)` 合并到master上
    - `git push`

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
