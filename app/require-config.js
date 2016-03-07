var require = {
    baseUrl: '',
    waitSeconds: 0,
    paths: {
        'jquery'                     : '../node_modules/jquery/dist/jquery.min',
        'domReady'                   : '../libs/domReady/domReady',

        /* Angular framework */
        'angular'                    : '../node_modules/angular/angular.min',
        'angular-route'              : '../node_modules/angular-route/angular-route.min',
        'angular-animate'            : '../node_modules/angular-animate/angular-animate.min',
        'angular-aria'               : '../node_modules/angular-aria/angular-aria.min',
        'angular-messages'           : '../node_modules/angular-messages/angular-messages.min',
        'angular-sanitize'           : '../node_modules/angular-sanitize/angular-sanitize.min',
        'angular-material'           : '../node_modules/angular-material/angular-material',

        /* Underscore */
        'underscore'                 : '../assets/libs/underscore/underscore-min',

        /* common */
        'config'                     : './config',

        /* Screen controller */
        'main'                 : './main/main',


        /* Components */


        /* Model */


        /* Service */


    },
    shim: {
        'angular': {
            /* F
            These script dependencies should be loaded before loading
            angular.js
            */
            deps: ['jquery'],
            /* 
            Once loaded, use the global 'angular' as the
            module value.
            */
            exports: 'angular'
        },
        'angular-route': {
            deps: ['angular']
        },
        'angular-sanitize': {
            deps: ['angular']
        },
        'angular-animate': {
            deps: ['angular']
        },
        'angular-messages': {
            deps: ['angular']
        },
        'angular-aria': {
            deps: ['angular']
        },
        'angular-material': {
            deps: ['angular', 'angular-aria', 'angular-animate']
        }
    }
};