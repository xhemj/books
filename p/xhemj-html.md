# 常用html整合
## CSS实现Shields徽章
### css部分：
```css
.github-badge {
	display: inline-block;
	border-radius: 4px;
	text-shadow: none;
	font-size: 12px;
	color: #fff;
	line-height: 15px;
	background-color: #ABBAC3;
	margin-bottom: 5px;
}

.github-badge .badge-subject {
	display: inline-block;
	background-color: #4D4D4D;
	padding: 4px 4px 4px 6px;
	border-top-left-radius: 4px;
	border-bottom-left-radius: 4px;
}

.github-badge .badge-value {
	display: inline-block;
	padding: 4px 6px 4px 4px;
	border-top-right-radius: 4px;
	border-bottom-right-radius: 4px;
}

.github-badge .bg-brightgreen {
	background-color: #4DC820 !important;
}

.github-badge .bg-orange {
	background-color: #FFA500 !important;
}

.github-badge .bg-yellow {
	background-color: #D8B024 !important;
}

.github-badge .bg-blueviolet {
	background-color: #8833D7 !important;
}

.github-badge .bg-pink {
	background-color: #F26BAE !important;
}

.github-badge .bg-red {
	background-color: #e05d44 !important;
}

.github-badge .bg-blue {
	background-color: #007EC6 !important;
}

.github-badge .bg-lightgrey {
	background-color: #9F9F9F !important;
}

.github-badge .bg-grey,.github-badge .bg-gray {
	background-color: #555 !important;
}

.github-badge .bg-lightgrey,.github-badge .bg-lightgray {
	background-color: #9f9f9f !important;
}
```
### 可选颜色：

红色   | 亮绿           | 橙色       |黄色      |紫色          |粉色    |蓝色    |亮灰色       |灰色    
------ | -------------- | --------- | -------- | ------------ | ------ | ------ | ----------- | -------
bg-red | bg-brightgreen | bg-orange |bg-yellow |bg-blueviolet |bg-pink |bg-blue |bg-lightgrey |bg-pink 

### 用法：
```html
<div class="github-badge"><span class="badge-subject">填写文字</span><span class="badge-value bg-颜色">填写文字</div> 
```
效果就是![](https://img.shields.io/badge/%E5%A1%AB%E5%86%99%E6%96%87%E5%AD%97-%E5%A1%AB%E5%86%99%E6%96%87%E5%AD%97-brightgreen.svg)
