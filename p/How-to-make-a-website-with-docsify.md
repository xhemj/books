# 如何用Docsify做一个文档阅读网站？
没错，它叫Docsify。</br>
![logo](https://docsify.js.org/_media/icon.svg)</br>
[xhemj的文档中心](https://xhemj.gitee.io/books)就是用这个写的</br>
> 开源地址：[https://github.com/docsifyjs/docsify/](https://github.com/docsifyjs/docsify/)</br>
> 官方Demo：[https://docsify.js.org/](https://docsify.js.org/)</br>
## 官方说明：
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
## 教程：
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
这里以码云Gitee为例</br>
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
只需用Markdown语法写好一个`.md`的文章放在根目录后就会自动识别了</br>。
文章链接对应：</br>
```text
/README.md  =>  domain.com/#/
/hello.md  =>  domain.com/#/hello
/hello/hi.md  =>  domain.com/#/hello/hi
```
## 个性化
### 自定义加载文字
只需在`index.html`中新增：</br>
```html
<div id="app">Please wait...</div>
```
### 自定义侧边栏
只需在`index.html`中新增：</br>
```html
<script>
  window.$docsify = {
    loadSidebar: true
  }
</script>
```
后创建一个文件叫做`_sidebar.md`，将你的文件输入进去：</br>
例如：</br>
```markdown
* [Home](/)
* [Guide](guide.md)
```

!> 注意，如果是托管在网上，请在文件根目录新增名叫`.nojekyll`的空文件。

为了更好地SEO，您可以在每个文件后面自定义标题：</br>
```markdown
* [Home](/)
* [Guide](guide.md "The greatest guide in the world")
```
默认情况下会自动根据文章标题生成目录，如果不想要，可以再`index.html`中新增：</br>
```html
<script>
  window.$docsify = {
    loadSidebar: true,
    subMaxLevel: 2
  }
</script>
```
`2`表示只显示`h1~h2`的标题，对应`#`和`##`。</br>
如果你想忽略某个标题，则可以在文章中新增`{docsify-ignore}`：</br>
```markdown
# Getting Started
## Header {docsify-ignore}
```
如果想忽略全部的标题，则可以新增`{docsify-ignore-all}`：</br>
```markdown
# Getting Started {docsify-ignore-all}
## Header
```
表示忽略`{docsify-ignore-all}`下的全部标题</br>

!> `{docsify-ignore-all}`和`{docsify-ignore}`在正文中都不会显示

### 自定义导航栏</br>
写法一：</br>
在`index.html`中新增：</br>
```html
<body>
  <nav>
    <a href="#/">EN</a>
    <a href="#/zh-cn/">中文</a>
  </nav>
  <div id="app"></div>
</body>
```

!> 所有路径都必须用`#/`来书写

写法二：</br>
在根目录新增`_navbar.md`文件：</br>
写法同`_sidebar.md`</br>
```markdown
* [En](/)
* [chinese](/zh-cn/)
```
你也可以按照如下来写多级导航栏：
```markdown
* Getting started
  * [Quick start](quickstart.md)
  * [Writing more pages](more-pages.md)
  * [Custom navbar](custom-navbar.md)
  * [Cover page](cover.md)

* Configuration
  * [Configuration](configuration.md)
  * [Themes](themes.md)
  * [Using plugins](plugins.md)
  * [Markdown configuration](markdown.md)
  * [Language highlight](language-highlight.md)
```