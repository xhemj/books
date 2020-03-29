# 如何用Git.io来生成自定义后缀名的短网址
[git.io](http://git.io/)是Github的官方短网址，它是用来缩短Github上项目的网址。</br>
效果：</br>
[Git.io/wacsh](http://git.io/wacsh)将会跳转到[https://xhemj.gitee.io/ERSS-Wiki/](https://xhemj.gitee.io/ERSS-Wiki/)</br>
方法：</br>
1.因为Git.io只能缩短Github的链接，所以参考[Mabbs](https://github.com/mabbs)大佬的方法自己写了一个，先将你要的网址`URL`放入以下网址`https://xhemj.github.io/go.html?url=URL`</br>
2.执行以下命令`$ curl -i https://git.io -F url="URL" -F "code=CODE"`，其中`URL`为上方生成的链接，`CODE`为你自己自定义的链接，如`$ curl -i https://git.io -F url="http://xhemj.github.io/go.html?url=https://xhemj.gitee.io/ERSS-Wiki/" -F "code=wacsh"`</br>
![](/Git-io-short-url.jpg)</br>
3.最终效果是有没有成功见上方`Location: https://git.io/wacsh`显示的链接为准，很可能会生成失败，`wacsh`就是你自己定义的`CODE`。后就可以通过`git.io/wacsh`来访问`http://xhemj.github.io/go.html?url=https://xhemj.gitee.io/ERSS-Wiki/`了哦！！</br>