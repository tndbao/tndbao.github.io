/** 
 * Copyright (C) 2015 NTT Software Corporation
 */

/* RequireJs module dependences */
var dependences = [
    'jquery',
    'angular',
    'angular-route',

    'config',

    'main'
];

define(dependences, function() {

    /* Angular module dependences */
    var moduleDependences = [
        'ngRoute',

        /* Main screen module */
        'b.main',
    ];

    var bApp = angular.module('b', moduleDependences);

    bApp.config(function($sceDelegateProvider) {
        $sceDelegateProvider.resourceUrlWhitelist([
            // Allow same origin resource loads.
            'self',
            // Allow loading from outer templates domain.
            SERVER_URL + '/**'
        ]); 
    });

    bApp.config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.
            when('/', {
                templateUrl: './app/main/index.html',
                controller: 'b.main.ctrl',
                // css: ['../assets/css/default_top.css']
            }).
            otherwise({
                redirectTo: '/'
            });
        }
    ]);

    // Start up angular application
    angular.bootstrap(document, ['b']);
});
