# 使用Docsify做文档网站的详细配置教程

> 作者：xhemj

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
```markdown
* [Home](/)
* [Guide](guide.md)
```
`_sidebar.md`的加载逻辑是从每层目录下获取文件，如果当前目录不存在该文件则回退到上一级目录。</br>
例如当前路径为`/zh-cn/more-pages`则从`/zh-cn/_sidebar.md`获取文件，如果不存在则从`/_sidebar.md`获取。</br>

!> 注意，如果是托管在网上，请在文件根目录新增名叫`.nojekyll`的空文件。</br>

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
`subMaxLevel: 2`表示只显示`h1~h2`的标题，对应`#`和`##`。</br>
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
你也可以按照如下来写多级导航栏：</br>
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
`_navbar.md`的加载逻辑是从每层目录下获取文件，如果当前目录不存在该文件则回退到上一级目录。</br>
例如当前路径为`/zh-cn/more-pages`则从`/zh-cn/_navbar.md`获取文件，如果不存在则从`_navbar.md`获取。</br>
### 封面
设置：
```html
window.$docsify = {
    coverpage: true,
}
```
后再根目录创建`_coverpage.md`
输入内容就可以显示在封面了
效果见[https://xhemj.gitee.io/books/](https://xhemj.gitee.io/books/)
### 主题颜色
设置：
```html
window.$docsify = {
    themeColor: '#c30aff',
}
```
`#c30aff`就是主题的颜色了
### 外链打开方式
设置：
```html
window.$docsify = {
	externalLinkTarget: '_blank',
}
```
`_blank`表示在新标签页中打开