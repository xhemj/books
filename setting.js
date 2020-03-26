window.$docsify = {
        name: 'Xhemj文档中心',
        repo: '',
        loadSidebar: true,
        loadNavbar: true,
        coverpage: true,
        subMaxLevel: 4,
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
            paths: 'auto',
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
            copy: '<span> &copy;2020 <strong>Xhemj文档中心</strong></span>',
            auth: '&nbsp;·&nbsp;<strong>Xhemj</strong>',
            pre: '</br>',
            style:'margin-top: 20px; text-align: center;'
        },
    }
