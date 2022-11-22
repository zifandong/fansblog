module.exports = {
    // 部署站点的基础路径，和仓库名一致
    base:'/fanblog/',
    //站点信息
    title: 'Fans Blog',
    head: [
        ['link', { rel: 'icon', href: '/kite.png' }]
    ],
    themeConfig:{
        // 配置左上角的 logo
    logo: '/kite.png',
    // 导航栏
    nav: require('./nav.js'),
    // 侧边栏
    // sidebar: require('./sidebar.js'),
    // sidebar: 'auto',
    // 标题深度，2 表示提取 h2 和 h3 标题
    // sidebarDepth: 2,
    // 启用页面滚动效果
    smoothScroll: true,
    // 最后更新时间
    lastUpdated: 'Last Updated',
    // 默认值是 true 。设置为 false 来禁用所有页面的 下一篇 链接
    nextLinks: true,
    // 默认值是 true 。设置为 false 来禁用所有页面的 上一篇 链接
    prevLinks: true,
    // 导航栏显示 源码 仓库
    repo: 'https://gitee.com/brucecai55520/bruceblog',
    repoLabel: '查看源码',
    }
}