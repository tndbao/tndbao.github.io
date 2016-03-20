var require = {
    baseUrl: '',
    waitSeconds: 0,
    paths: {
        'jquery'                     : '../assets/libs/jquery/dist/jquery.min',
        'domReady'                   : '../assets/libs/domReady/domReady',

        /* Angular framework */
        'angular'                    : '../assets/libs/angular/angular.min',
        'angular-route'              : '../assets/libs/angular-route/angular-route.min',
        'angular-animate'            : '../assets/libs/angular-animate/angular-animate.min',
        'angular-aria'               : '../assets/libs/angular-aria/angular-aria.min',
        'angular-messages'           : '../assets/libs/angular-messages/angular-messages.min',
        'angular-sanitize'           : '../assets/libs/angular-sanitize/angular-sanitize.min',
        'angular-material'           : '../assets/libs/angular-material/angular-material',

        /* Underscore */
        'underscore'                 : '../assets/libs/underscore/underscore-min',

        /* common */
        'config'                     : './config',

        /* Screen controller */
        'channel'                    : './channel/channel',
        'login'                      : './login/login',


        /* Components */
        'header'                     : './header/header',


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