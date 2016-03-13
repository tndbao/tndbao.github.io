/* RequireJs module dependences */
var dependences = [
    'jquery',
    'angular',
    'angular-route',

    'config',

    'header',

    'channel'
];

define(dependences, function() {

    /* Angular module dependences */
    var moduleDependences = [
        'ngRoute',

        /* Header module */
        'b.header',

        /* Main screen module */
        'b.channel',
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
        when('/', {
            templateUrl: './app/channel/channel.html',
            controller: 'b.channel.ctrl',
            // css: ['../assets/css/default_top.css']
        }).
        otherwise({
            redirectTo: '/'
        });

        // $locationProvider.html5Mode(true).hashPrefix("!");
    }]);

    // Start up angular application
    angular.bootstrap(document, ['b']);
});
