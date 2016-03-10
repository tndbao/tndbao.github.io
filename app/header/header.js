/* RequireJs module dependences */
var dependences = [
    'jquery',
    'angular',
    'angular-animate',
    'angular-aria',
    'angular-messages',
    'angular-material',

    'config'
];

define(dependences, function() {

    /* Angular module dependences */
    var moduleDependences = [
        'ngMaterial',
        'ngMessages'
    ];

    HeaderModule = angular.module('b.header', moduleDependences);
    HeaderModule.directive('bHeader', ['$mdSidenav', '$log', '$q', bHeaderDirective]);

    function bHeaderDirective($mdSidenav, $log, $q) {
        return {
            restrict: 'E',
            scope: {},
            link: function(scope, element, attrs) {
                scope.toggleRight = buildToggler('right');
                function buildToggler(navID) {
                    return function() {
                        $mdSidenav(navID)
                            .toggle()
                            .then(function() {
                                $log.debug("toggle " + navID + " is done");
                            });
                    }
                }
            },
            templateUrl: './app/header/header.html'
        };
    }
});
