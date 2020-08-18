# 如何免费申请js.org二级域名

> 作者：xhemj

![](https://cdn.jsdelivr.net/gh/xhemj/xhemj.github.io@master/img/js-org/js-org-logo.png)</br>
最近看到很多人都去申请了js.org的域名，我就来写个教程吧！</br>
（本教程只注重于申请域名，而不是如何使用Github）</br>
看看我的成品：[https://xhemj.js.org/](https://xhemj.js.org/)</br>
[官网](https://js.org/)是这么写的：</br>
```text
Are you a JavaScript developer looking for free webspace to host your project?
Check out GitHub Pages. 
To make things perfect we provide you with a free and sleek URL as shown in the examples above.
We don't mind whether it's a User-, Organization- or Project-Page - as long as you provide some reasonable content! 
Just follow these four steps to get your own free JS.ORG subdomain for your GitHub Page:
```
您是JavaScript开发人员吗？，您是否正在寻找免费的网站空间来托管您的项目？</br>
那就看看GitHub Pages吧。</br>
为了使事情变得完美，我们为您提供了一个免费且时尚的域名，如上面的示例所示。</br>
只要您提供一些合理的内容，</br>
我们都不介意是用户页面、组织页面还是项目页面。</br>
您只需按照以下四个步骤为GitHub Pages获取自己的免费JS.ORG子域。</br>
并且js.org还有免费https证书和cdn加速</br>
是不是很心动？</br>
## 第一步：注册
先去注册一个Github的账号（这边不详细说明）</br>
注册网址：[Github.com](https://github.com/)</br>
注册好后在`Repositories`旁点击`new`</br>
信息随便填写（前提你能记住）</br>
## 第二步：上传
将你的网站(index.html)放入Github</br>
关于Git上传Github的教程欢迎参考[https://gitee.com/progit/](https://gitee.com/progit/)或[https://www.progit.cn/](https://www.progit.cn/)</br>
之后到你自己仓库的`Settings`里找到`GitHub Pages`，选择你要部署的分区，可以看到一条</br>
```text
Your site is published at https://xhemj.github.io/
```
就表示部署成功了，可以访问以下确认部署正确</br>
## 第三部：Fork仓库
先进入[https://github.com/js-org/js.org](https://github.com/js-org/js.org)</br>
点击右上角`Fork`，fork仓库到你自己的仓库</br>
稍等一会儿刷新就可以看到仓库由`js-org/js.org`变成了`USERNAME/js.org`</br>
在自己的仓库里打开`cnames_active.js`</br>
可以看到里面有上千条别人的域名</br>
## 第三部：申请
现在先想好你要申请的域名</br>
如：xhemj.js.org</br>
现在浏览器中先访问以下，看看有没有被占用
还好我的还在~</br>
进入`cnames_active.js`，修改，</br>
将你的域名按照如下格式*按照首字母顺序*（一定要按照字母顺序）放入相应的行数</br>
比如说我的xhemj.js.org就可以放入第2176行：</br>
```html
"xhemj": "xhemj.github.io/books",
```
那我们来解释一下：</br>
1.`"xhemj"`表示你要申请的域名，如你要申请`xhemj.js.org`就填入`xhemj`</br>
2.`: `就是一个冒号+空格</br>
3.`"xhemj.github.io/books"`表示你原来网站GithubPages的链接</br>
4.`,`一定要记得在后面加一个逗号！
注意：在后面不要加任何注释！（非常重要）</br>
之后返回你的`USERNAME/js.org`，点击`Pull requests`，向js.org发送一个申请</br>
内容如下：</br>
标题：你要申请的域名，如：xhemj.js.org</br>
内容：会自动帮你写好，不用更改</br>
内容翻译过来就是：</br>
```text
页面上有合理的内容（请参阅：无内容）
我已阅读并接受条款和条件
```
肯定接受啊！！</br>
记得回到要申请的仓库里新建`CHAME`文件，在里面输入你的.js.org域名</br>
之后到[https://github.com/js-org/js.org](https://github.com/js-org/js.org)的`Pull requests`就可以看到你的申请</br>
如下：</br>
![](https://cdn.jsdelivr.net/gh/xhemj/static@master/img/js-org/js-org-pull-open.png)</br>
一个小建议：因为时差，最好在晚上12点前提交，这样审核人员刚好起床，可以进行审核</br>
之后等待过关后：</br>
![](https://cdn.jsdelivr.net/gh/xhemj/static@master/img/js-org/js-org-pull-merged.png)</br>
![](https://cdn.jsdelivr.net/gh/xhemj/static@master/img/js-org/js-org-pull-merged-info.png)</br>
就成功啦！！</br>
要是没通过，要注意的是网站不能太简单太难看，最好和js沾点边</br>
一半做博客的都可以过的</br>
没过也必要气馁，继续努力吧</br>
## 结尾
基本上配置就是这样了！本文当基于[官网](https://js.org/)书写</br>
要是有什么说不到位的欢迎私信我或者发邮件到[xhemj2680@163.com](mailto:xhemj2680@163.com)哦！</br>
好看就分享一下吧！</br>
