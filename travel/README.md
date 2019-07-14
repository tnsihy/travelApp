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
  - `assets/styles/border.css` 1像素边框问题
  - 引入fastclick库 解决移动端300ms点击(click事件)延迟问题 `npm install fastclick --save` 
