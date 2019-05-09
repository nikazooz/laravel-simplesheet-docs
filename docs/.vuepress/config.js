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
                    {text: '1.0', link: '/1.0/'},
                ]
            },
        ],

        sidebar: {
            '/1.0/': require('./1.0'),
        },
    },
};
