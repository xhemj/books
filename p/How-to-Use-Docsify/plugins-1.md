# 使用Docsify做文档网站的详细配置教程

> 作者：xhemj

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
`placeholder: 'Type to search',`</br>
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
### Google Analytics
就是谷歌统计</br>
直接新增：</br>
```html
<script>
  window.$docsify = {
    ga: 'UA-XXXXX-Y'
  }
</script>
<script src="//cdn.jsdelivr.net/npm/docsify/lib/plugins/ga.min.js"></script>
```
`ga: 'UA-XXXXX-Y'`就是谷歌统计的编号</br>
或：</br>
```html
<script src="//cdn.jsdelivr.net/npm/docsify/lib/docsify.min.js" data-ga="UA-XXXXX-Y"></script>
<script src="//cdn.jsdelivr.net/npm/docsify/lib/plugins/ga.min.js"></script>
```
`ga: 'UA-XXXXX-Y'`=`data-ga="UA-XXXXX-Y"`
### 外链脚本插件
如果你需要在`.md`文件中引用如：</br>
```html
<script src="https://domain.com/xxx.js" ></script>
```
安装：</br>
```
<script src="//cdn.jsdelivr.net/npm/docsify/lib/plugins/external-script.min.js"></script>
```
> 照这样看来是可以在`.md`中写`.html`的……

