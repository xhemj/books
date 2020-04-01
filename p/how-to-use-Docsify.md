# 使用Docsify做文档网站的详细配置教程
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
如本教程文章Markdown文件为：[https://gitee.com/xhemj/books/raw/master/p/how-to-use-Docsify.md](https://gitee.com/xhemj/books/raw/master/p/how-to-use-Docsify.md)
渲染成：[https://xhemj.gitee.io/books/#/p/how-to-use-Docsify.md](https://xhemj.gitee.io/books/#/p/how-to-use-Docsify)
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
## 插件
### 表情插件
先在在`index.html`中新增：</br>
```html
<script src="//cdn.jsdelivr.net/npm/docsify/lib/plugins/emoji.min.js"></script>
```

!> 我自己测试是我上面推荐的三个CDN都可以使用

即可输入</br>
`:100:` => :100:
### 搜索插件
新增`index.html`：</br>
```html
<script>
  window.$docsify = {
    search: 'auto', 

    search : [
      '/',            // => /README.md
      '/guide',       // => /guide.md
      '/get-started', // => /get-started.md
      '/zh-cn/',      // => /zh-cn/README.md
    ],

    
    search: {
      maxAge: 86400000, 
      paths: [], 
      placeholder: 'Type to search',

      
      placeholder: {
        '/zh-cn/': '搜索',
        '/': 'Type to search'
      },

      noData: 'No Results!',


      noData: {
        '/zh-cn/': '找不到结果',
        '/': 'No Results'
      },

      depth: 2,

      hideOtherSidebarContent: false,


      namespace: 'website-1',
    }
  }
</script>
<script src="//cdn.jsdelivr.net/npm/docsify/lib/plugins/search.min.js"></script>
```
那我们来解释一下：</br>
1.指定搜索路径</br>
`search: 'auto',`表示是否搜索，默认是`auto`</br>
或：</br>
```html
search : [
      '/',            // => /README.md
      '/guide',       // => /guide.md
      '/get-started', // => /get-started.md
      '/zh-cn/',      // => /zh-cn/README.md
    ],
```
如：`/`就表示`README.md`</br>
`guide`表示`/guide.md`</br>
设置后就表示只搜索这几个目录</br>
2.`maxAge: 86400000,`到期时间（官方这么说），不用改动</br>
3.`paths: [], `可以设置搜索的目录，或设置`auto`或`/`，貌似和`search:[]`一样？</br>
4.搜索框的提示</br>
`placeholder: 'Type to search',`
或：</br>
```html
placeholder: {
        '/zh-cn/': '搜索',
        '/': 'Type to search'
      },
```
这样可以设置中英文目录的搜索框的提示</br>
`noData: 'No Results!',`表示无结果时显示的文字</br>
或：</br>
```html
noData: {
        '/zh-cn/': '找不到结果',
        '/': 'No Results'
      },
```
分别设置中英文</br>
5.标题深度</br>
`depth: 2,`（官方这么解释）可以设置为`1-6`</br>
6.隐藏其他侧边栏内容</br>
`hideOtherSidebarContent: false,`（官方这么解释）默认为`false`</br>
7.避免搜索索引冲突</br>
`namespace: 'website-1',`可以自己设置</br>
同一域下的多个网站之间可以设置名称</br>
避免搜索索引冲突</br>
其实有很多参数都不用设置</br>
比如我的配置是：</br>
```html
search: 'auto',
search: {
maxAge: 86400000,
paths: '/',
placeholder: '搜索...',
noData: '未找到结果，换个搜索词试试？',
namespace: 'XhemjBlog',
	},
```
### 