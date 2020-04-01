# 使用Docsify做文档网站的详细配置教程

> 作者：xhemj

## 插件
### 图片缩放插件
```html
<script src="//cdn.jsdelivr.net/npm/docsify/lib/plugins/zoom-image.min.js"></script>
```
效果就是点击一下图片可以放大</br>
如：</br>
![logo](https://docsify.js.org/_media/icon.svg]</br>
如果不想缩放可以设置：</br>
```markdown
![](image.png ":no-zoom")
```
### 复制代码插件
```html
<script src="//cdn.jsdelivr.net/npm/docsify-copy-code"></script>
```
效果可以自己看上面的所有代码</br>
### Disqus评论插件
```html
<script>
  window.$docsify = {
    disqus: 'shortname'
  }
</script>
<script src="//cdn.jsdelivr.net/npm/docsify/lib/plugins/disqus.min.js"></script>
```
详见：[https://disqus.com/](https://disqus.com/)</br>
### Gitalk评论插件
```html
<link rel="stylesheet" href="//cdn.jsdelivr.net/npm/gitalk/dist/gitalk.css">

<script src="//cdn.jsdelivr.net/npm/docsify/lib/plugins/gitalk.min.js"></script>
<script src="//cdn.jsdelivr.net/npm/gitalk/dist/gitalk.min.js"></script>
<script>
  var gitalk = new Gitalk({
    clientID: 'Github Application Client ID',
    clientSecret: 'Github Application Client Secret',
    repo: 'Github repo',
    owner: 'Github repo owner',
    admin: ['Github repo collaborators, only these guys can initialize github issues'],
    // facebook-like distraction free mode
    distractionFreeMode: false
  })
</script>
```
可以使文章实现评论效果，教程详见：[https://github.com/gitalk/gitalk/](https://github.com/gitalk/gitalk/)</br>
### 链接下一篇文章插件
可以再文章底部显示“下一篇”和“上一篇”</br>
效果见[https://xhemj.gitee.io/books/#/p/how-to-use-Docsify.md](https://xhemj.gitee.io/books/#/p/how-to-use-Docsify)</br>
```html
<script src="//cdn.jsdelivr.net/npm/docsify-pagination/dist/docsify-pagination.min.js"></script>
```
也可以自定义：</br>
```html
window.$docsify = {
pagination: {
            previousText: '上一篇',
            nextText: '下一篇',
            crossChapter: true,
            crossChapterText: true,
        },
	}
```
更多插件可以见[https://docsify.js.org/#/awesome?id=plugins](https://docsify.js.org/#/awesome?id=plugins)</br>

!> 以下是我自己使用的插件

### Social Share分享插件
经过测试，无法直接在`index.html`中嵌入代码</br>
需要先安装上面的外链脚本插件</br>
```html
<script src="//cdn.jsdelivr.net/npm/docsify/lib/plugins/external-script.min.js"></script>
```
后在`.md`文件中写下：</br>
```markdown
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/social-share.js/1.0.16/css/share.min.css">
<div class="social-share"></div>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/social-share.js/1.0.16/js/social-share.min.js"></script>
```
即可在文件中嵌入分享插件</br>
详细自定义教程可见：[https://github.com/overtrue/share.js](https://github.com/overtrue/share.js)</br>
### 嵌入Markdown文件插件
```html
<script src="https://unpkg.com/docsify-remote-markdown/dist/docsify-remote-markdown.min.js">
```
可以自定义：</br>
```html
window.$docsify = {
remoteMarkdown: {
    tag: 'md',
		},
	}
```
使用方法：</br>
```markdown
[你设置的tag，如：md](https://domain.com/markdown.md)
```
效果如上方的分享插件就可以直接链接：</br>
[md](https://xhemj.gitee.io/share.md)</br>
而不用写分享代码</br>
源文件是：[https://xhemj.gitee.io/share.md](https://xhemj.gitee.io/share.md)</br>
### 底部公共Footer插件
```html
<script src="https://unpkg.com/docsify-footer-enh/dist/docsify-footer-enh.min.js"></script>
```
自定义：</br>
```html
window.$docsify = {
footer: {
            copy: '',
            auth: '',
            pre: '<hr>',
            style:'text-align: center;'
        },
	}
```
实测`copy`和`auth`可以随便写</br>
写什么文字代码都可以</br>
`pre`是正文和Footer的分割线，默认`<hr>`</br>
效果可以见[https://xhemj.gitee.io/books/#/p/how-to-use-Docsify.md](https://xhemj.gitee.io/books/#/p/how-to-use-Docsify)</br>