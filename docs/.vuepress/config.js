
const nav = require('./config/nav/')
const sidebar = require('./config/sidebar/')
const plugins = require('./config/plugins/')

module.exports = {
  // dest: 'gb-pages',//打包目录
  base: '/SmallGao/',
  title: "SmallGao",
  description: '小高的进修',
  head: [
    ["script", { "language": "javascript", "type": "text/javascript", "src": "https://cdn.bootcss.com/jquery/3.6.0/jquery.min.js"}],
    ["script", { "language": "javascript", "type": "text/javascript", "src": "/js/MouseClickEffect.js"}]
  ],

  //主题配置
  theme: '',
  themeConfig: {
    nav,
    sidebar: 'auto',// 自动形成侧边导航
    sidebar,
    authorAvatar: '/vuepress/head-fish.jpg', //首页右侧头像
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    smoothScroll: true,
    sidebarDepth: 2,
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: '分类' // 默认文案 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: '标签' // 默认文案 “标签”
      }
    },
  },
  plugins,
  markdown: {
    lineNumbers: true,
    // Markdown 文件的 headers (标题 & 小标题) 修改提取出的标题级别
    extractHeaders: ['h2', 'h3', 'h4'],
    extendMarkdown: md => {
      md.use(require("markdown-it-disable-url-encode"));
    }
  },

}
