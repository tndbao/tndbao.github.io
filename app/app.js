/* RequireJs module dependences */
var dependences = [
    'jquery',
    'angular',
    'angular-route',

    'config',

    'header',

    'channel',
    'login'
];

define(dependences, function() {

    /* Angular module dependences */
    var moduleDependences = [
        'ngRoute',

        /* Header module */
        'b.header',

        /* Channel module */
        'b.channel',

        /* Login module */
        'b.login',
    ];

    var bApp = angular.module('b', moduleDependences);

    bApp.config(function($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('blue')
            .accentPalette('pink');
    });

    bApp.config(function($sceDelegateProvider) {
        $sceDelegateProvider.resourceUrlWhitelist([
            // Allow same origin resource loads.
            'self',
            // Allow loading from outer templates domain.
            SERVER_URL + '/**'
        ]);
    });

    bApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
        $routeProvider.
        when('/channel', {
            templateUrl: './app/channel/channel.html',
            controller: 'b.channel.ctrl',
            // css: ['../assets/css/default_top.css']
        }).
        when('/login', {
            templateUrl: './app/login/login.html',
            controller: 'b.login.ctrl',
            // css: ['../assets/css/default_top.css']
        }).
        otherwise({
            redirectTo: '/login'
        });

        // $locationProvider.html5Mode(true).hashPrefix("!");
    }]);

    // Start up angular application
    angular.bootstrap(document, ['b']);
});
