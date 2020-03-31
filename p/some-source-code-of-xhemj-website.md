# xhemj网站使用的一些功能的源码
## 1.Social-Share社会化分享插件
```html
<div id="social-share" style="text-align: center;">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/social-share.js/1.0.16/css/share.min.css">
	<div class="social-share"></div>
	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/social-share.js/1.0.16/js/social-share.min.js"></script>
	<script>
		var cfg = {
		sites: ['qq', 'qzone', 'wechat', 'weibo', 'facebook', 'twitter'],
		image: "https://xhemj.gitee.io/logo.png",
		wechatQrcodeTitle: "分享",
		wechatQrcodeHelper: "使用微信扫一扫分享"}
		socialShare('.social-share', cfg);
	</script>
</div>
```
> 开源地址：[https://github.com/overtrue/share.js](https://github.com/overtrue/share.js)