# 使用Docsify做文档网站的详细配置教程

> 作者：xhemj

没错，它叫Docsify。</br>
![logo](https://docsify.js.org/_media/icon.svg)</br>
[xhemj的文档中心](https://xhemj.gitee.io/books)就是用这个写的</br>
> 开源地址：[https://github.com/docsifyjs/docsify/](https://github.com/docsifyjs/docsify/)</br>
> 官方Demo：[https://docsify.js.org/](https://docsify.js.org/)</br>
## 目录
- [官方说明](#官方说明)
- [安装](#安装)
- [如何写文章](#如何写文章)
- [个性化](#个性化)
- [插件](#插件)
- [结尾](#结尾)
## 官方说明
```text
Docsify
A magical documentation site generator.
Simple and lightweight (~21kB gzipped)
No statically built html files
Multiple themes
```
Docsify</br>
一个神奇的文档站点生成器。</br>
简单轻巧（~21kB）</br>
没有生成静态的html文件</br>
主题丰富</br>
## 安装
### 本地搭建
如果你想在本地搭建：</br>
npm安装：</br>
```bash
npm i docsify-cli -g
```
初始化：</br>
```bash
docsify init ./docs
```
本地预览：</br>
```bash
docsify serve docs
```
进入`http://localhost:3000`就能看到效果咯！</br>
### 托管在网上
如果你想在托管在网上：</br>
新建一个`index.html`内容为：</br>
```html
<!DOCTYPE html>
<html>
<head>
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta charset="UTF-8">
  <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/docsify/themes/vue.css">
</head>
<body>
  <div id="app"></div>
  <script>
    window.$docsify = {
      //...
    }
  </script>
  <script src="//cdn.jsdelivr.net/npm/docsify/lib/docsify.min.js"></script>
</body>
</html>
```
### CDN的选择
CDN可以选择：</br>
```html
<script src="//cdn.jsdelivr.net/npm/docsify/lib/docsify.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/docsify/4.11.2/docsify.min.js"></script>
<script src="//unpkg.com/docsify/lib/docsify.min.js"></script>
```
这样就可以看到一个最基本的网页啦！</br>
## 如何写文章
只需用Markdown语法写好一个`.md`的文章放在根目录或子目录后就会自动识别了。</br>
我自己测试好像用html的也可以，直接把后缀名改成`.md`，但效果可能不太好。</br>
文章链接对应：</br>
```text
/README.md  =>  domain.com/#/
/hello.md  =>  domain.com/#/hello
/hello/hi.md  =>  domain.com/#/hello/hi
```
如本教程文章Markdown文件为：[https://gitee.com/xhemj/books/raw/master/p/how-to-use-Docsify.md](https://gitee.com/xhemj/books/raw/master/p/how-to-use-Docsify.md)</br>
渲染成：[https://xhemj.gitee.io/books/#/p/how-to-use-Docsify.md](https://xhemj.gitee.io/books/#/p/how-to-use-Docsify)</br>