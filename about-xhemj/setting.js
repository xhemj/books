window.$docsify = {
        name: 'Xhemj',
        repo: '',
        loadSidebar: true,
        loadNavbar: true,
        coverpage: false,
        subMaxLevel: 3,
        auto2top: true,
        relativePath: false,
        themeColor: '#c30aff',
        mergeNavbar: true,
        formatUpdated: '{YYYY}/{MM}/{DD} {HH}:{mm}',
        externalLinkTarget: '_blank',
        notFoundPage: true,
        //搜索插件
        search: 'auto',
        search: {
            maxAge: 86400000,
            paths: '/',
            placeholder: '搜索...',
            noData: '未找到结果，换个搜索词试试？',
            namespace: 'XhemjBlog',
        },
        //底部公共footer插件
         footer: {
            copy: '<strong>© 2020 Xhemj</strong>&nbsp;|&nbsp;<a href="/books" target="_blank">官网</a>&nbsp|&nbsp;<a href="https://xhemj.gitee.io/oneQRCodeforPay/" target="_blank">赞助本网站</a>&nbsp|&nbsp;<a href="https://gitee.com/xhemj/books/" target="_blank">Gitee</a>&nbsp|&nbsp;<a href="mailto:xhemj2680@163.com" target="_blank">联系我</a></br><img src="https://xhemj.gitee.io/logo.png" width="50" height="50">',
            auth: '<strong>BY: X H E M J</strong></br><strong>"这只是Xhemj的个人资料而已，也没有什么别的！"</strong><div id="cc-myssl-id"><a href="https://myssl.com/xhemj.gitee.io?from=mysslid" target="_blank"><img src="https://static.myssl.com/res/images/myssl-id3.png" alt="" style="max-height:50px;display:block;margin:0 auto"></a></br></div>',
            pre: '<hr>',
            style:'text-align: center;'
        },
        remoteMarkdown: {
    tag: 'md',
  },
    }