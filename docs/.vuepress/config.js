module.exports = {
    title: 'Laravel Simplesheet',
    description: 'Easy spreadsheet exports and imports in Laravel',

    base: '/laravel-simplesheet/',

    plugins: {
        '@vuepress/pwa': {
            serviceWorker: true,
            updatePopup: true
        },
        'sitemap': {
            hostname: 'https://nikazooz.github.io/laravel-simplesheet/'
        }
    },

    markdown: {
        lineNumbers: true,
    },

    head: [
        [
            'link',
            {
                href: 'https://fonts.googleapis.com/css?family=Nunito:100,300,400,500,600,700',
                rel: 'stylesheet',
                type: 'text/css',
            },
        ],
    ],

    themeConfig: {
        repo: 'nikazooz/laravel-simplesheet',
        docsRepo: 'nikazooz/laravel-simplesheet-docs',
        docsBranch: 'master',
        editLinks: true,
        editLinkText: 'Help us improve this page!',
        displayAllHeaders: false,
        sidebarDepth: 0,

        nav: [
            {
                text: 'Version',
                link: '/',
                items: [
                    {text: '1.x', link: '/1.x/'},
                    {text: '2.x', link: '/2.x/'},
                ]
            },
        ],

        sidebar: {
            '/1.x/': require('./1.x'),
            '/2.x/': require('./2.x'),
        },
    },
};
