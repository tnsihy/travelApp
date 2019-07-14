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


- Git
  - 进入travel文件夹git status查看本地仓库文件未上传
  - git add .
  - git commit -m '***'
  - 推送到Github上 git push

- 移动端网页
  - 配置页面 鼠标无法缩放 `minium-scale=1.0,maxinum-scale=1.0,user-scalable=no`
  - `assets/styles/reset.css` 不同手机初始化样式统一
    - reset.css样式中font-size为50px，即1rem = 50px
    - 设计师给的是2倍尺寸图片86px -> 43px/50px = .86rem
  - `assets/styles/border.css` 1像素边框问题
  - 引入fastclick库 解决移动端300ms点击(click事件)延迟问题 `npm install fastclick --save` 

- 首页header部分
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