window.$docsify = {
        name: 'Xhemj文档中心',
        repo: '',
        loadSidebar: true,
        loadNavbar: true,
        coverpage: true,
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
        //底部上下篇插件
        pagination: {
            previousText: '上一篇',
            nextText: '下一篇',
            crossChapter: true,
            crossChapterText: true,
        },
//        //docsify黑暗模式插件
//        dark: {
//            background: "#1c2022",
//            toggleBtnBg: "#34495e",
//            textColor: "#b4b4b4"
//        },
//        light: {
//            background: "white",
//            toggleBtnBg: "var(--theme-color)",
//            textColor: "var(--theme-color)"
//        },
        //底部公共footer插件
         footer: {
            //copy: '<strong>© 2020 Xhemj</strong>&nbsp;|&nbsp;<a href="/books" target="_blank">官网</a>&nbsp|&nbsp;<a href="https://xhemj.gitee.io/oneQRCodeforPay/" target="_blank">赞助本网站</a>&nbsp|&nbsp;<a href="mailto:xhemj2680@163.com" target="_blank">联系我</a></br><img src="https://xhemj.js.org/logo.png" width="50" height="50">',
            //auth: '<strong>BY: X H E M J</strong></br><strong>"这只是Xhemj的文档中心而已，也没有什么别的！"</strong><div id="cc-myssl-id"><a href="https://myssl.com/xhemj.js.org?from=mysslid" target="_blank"><img src="https://static.myssl.com/res/images/myssl-id3.png" alt="" style="max-height:50px;display:block;margin:0 auto"></a></br></div>',
            copy: '<style>.github-badge{display:inline-block;border-radius:4px;text-shadow:none;font-size:12px;color:#fff;line-height:15px;background-color:#ABBAC3;margin-bottom:5px;}.github-badge .badge-subject{display:inline-block;background-color:#4D4D4D;padding:4px 4px 4px 6px;border-top-left-radius:4px;border-bottom-left-radius:4px;}.github-badge .badge-value{display:inline-block;padding:4px 6px 4px 4px;border-top-right-radius:4px;border-bottom-right-radius:4px;}.github-badge .bg-brightgreen{background-color:#4DC820 !important;}.github-badge .bg-orange{background-color:#FFA500 !important;}.github-badge .bg-yellow{background-color:#D8B024 !important;}.github-badge .bg-blueviolet{background-color:#8833D7 !important;}.github-badge .bg-pink{background-color:#F26BAE !important;}.github-badge .bg-red{background-color:#e05d44 !important;}.github-badge .bg-blue{background-color:#007EC6 !important;}.github-badge .bg-lightgrey{background-color:#9F9F9F !important;}.github-badge .bg-grey,.github-badge .bg-gray{background-color:#555 !important;}.github-badge .bg-lightgrey,.github-badge .bg-lightgray{background-color:#9f9f9f !important;}</style><div class="github-badge"><span class="badge-subject">Author</span><span class="badge-value bg-blue">xhemj</div><div class="github-badge"><span class="badge-subject">Hosted</span><span class="badge-value bg-blueviolet">Github & Gitee</div><div class="github-badge"><span class="badge-subject">CDN</span><span class="badge-value bg-orange">Jsdelivr & Cloudflare</div><div class="github-badge"><span class="badge-subject">&copy;</span><span class="badge-value bg-lightgrey">2020 xhemj</div>',
            auth: '这只是xhemj的文档中心而已，也没有什么别的。',
            pre: '<hr>',
            style: 'text-align: center;'
        },
        remoteMarkdown: {
                tag: 'md',
        },
        count:{
                countable:true,
                fontsize:'0.9em',
                color:'rgb(90,90,90)',
                language:'chinese'
                },
        }
