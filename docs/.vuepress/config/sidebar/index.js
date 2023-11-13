//侧边栏
module.exports = {
    '/views/': [
        '',
        {
            title: '🏹 前端 Front-end',
            collapsable: true,
            children: [
                'frontend/EChartsStudy', 'frontend/js-json', 'frontend/viaStart', 'frontend/vue-demo',
                'frontend/reco-info', 'frontend/vuepress-plugin-boxx', 'frontend/TCP&UDP',
            ]
        },
        {
            title: '🔗 随笔 Essay',
            collapsable: true,
            children: [
                'essay/20190928', 'essay/20191109', 'essay/20191116', 'essay/20191130', 'essay/20200227',
                'essay/20200301', 'essay/20200703', 'essay/20200715', 'essay/20200813', 'essay/20201012',
                'essay/20201119', 'essay/20211216', 'essay/20220808', 'essay/20230605',
            ]
        }
    ]
}
