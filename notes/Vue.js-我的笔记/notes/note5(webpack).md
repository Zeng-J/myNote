2019/4/10 16:15:22 

## webpack

### 在网页中会引用很多静态资源

- js
	- .js  .jsx  .coffee .ts
- css
	- .css  .less .sass  .scss
- images
	- .jpg  .png  .gif  .bmp  .svg
- 字体文件（Fonts）
	- .svg  .ttf  .eot  .woff  .woff2
- 模板文件
	- .ejs  .jade  .vue
- ......

### 网页中引入的静态资源多了以后有什么问题？

1. 网页加载速度慢，因为我们要发起很多的二次请求
2. 要处理错综复杂的依赖关系

### 如何解决上述问题

1. 合并、压缩、精灵图、图片的Base64编码
2. requireJS、webpack


### 什么是webpack

webpack是前端的一个项目构建工具，它是基于Node.js开发出来的一个前端工具

### 如何完美实现上述的2钟解决方案

1. 使用Gulp，是基于 task 任务的
2. 使用Webpack，是基于整个项目进行构建的