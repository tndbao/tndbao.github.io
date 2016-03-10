/* RequireJs module dependences */
var dependences = [
    'jquery',
    'angular',
    'angular-route',

    'config',

    'header',

    'main'
];

define(dependences, function() {

    /* Angular module dependences */
    var moduleDependences = [
        'ngRoute',

        /* Header module */
        'b.header',

        /* Main screen module */
        'b.main',
    ];

    var bApp = angular.module('b', moduleDependences);

    bApp.config(function($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('deep-orange')
            .accentPalette('orange');
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
            templateUrl: './app/main/main.html',
            controller: 'b.main.ctrl',
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
