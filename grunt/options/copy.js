'use strict';

module.exports = {
    templates: {
        files: [
            {
                cwd     : 'src/templates/',
                src     : '**/*.html',
                dest    : '.build/templates/',
                flatten : false,
                expand  : true
            }
        ]
    },
    css: {
        files: [
            {
                cwd     : 'src/css/',
                src     : '**/*.css',
                dest    : '.build/css/',
                flatten : false,
                expand  : true
            }
        ]
    },
    images: {
        files: [
            {
                cwd     : 'src/images/',
                src     : '**/*',
                dest    : '.build/images/',
                flatten : false,
                expand  : true
            }
        ]
    },
    videos: {
        files: [
            {
                cwd     : 'src/videos/',
                src     : '**/*',
                dest    : '.build/videos/',
                flatten : false,
                expand  : true
            }
        ]
    },
    seo: {
        files: [
            {
                cwd     : 'src/',
                src     : 'robots.txt',
                dest    : '.build/',
                flatten : false,
                expand  : true
            },
            {
                cwd     : 'src/',
                src     : 'sitemap.xml',
                dest    : '.build/',
                flatten : false,
                expand  : true
            }
        ]
    }
};
