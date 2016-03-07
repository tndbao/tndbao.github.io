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

    MainModule = angular.module('b.main', moduleDependences)
        .controller('b.main.ctrl', ['$scope', '$timeout', '$mdSidenav', '$log', '$q', mainCtrl])
        .controller('b.main.rightNav.ctrl', ['$scope', '$timeout', '$mdSidenav', '$log', '$q', rightNavCtrl]);

    function mainCtrl($scope, $timeout, $mdSidenav, $log, $q) {
        $scope.toggleLeft = buildDelayedToggler('left');
        $scope.toggleRight = buildToggler('right');

        /**
         * Supplies a function that will continue to operate until the
         * time is up.
         */
        function debounce(func, wait, context) {
            var timer;

            return function debounced() {
                var context = $scope,
                    args = Array.prototype.slice.call(arguments);
                $timeout.cancel(timer);
                timer = $timeout(function() {
                    timer = undefined;
                    func.apply(context, args);
                }, wait || 10);
            };
        }

        /**
         * Build handler to open/close a SideNav; when animation finishes
         * report completion in console
         */
        function buildDelayedToggler(navID) {
            return debounce(function() {
                $mdSidenav(navID)
                    .toggle()
                    .then(function() {
                        $log.debug("toggle " + navID + " is done");
                    });
            }, 200);
        }

        function buildToggler(navID) {
            return function() {
                $mdSidenav(navID)
                    .toggle()
                    .then(function() {
                        $log.debug("toggle " + navID + " is done");
                    });
            }
        }

        $scope.close = function() {
            $mdSidenav('right').close()
                .then(function() {
                    $log.debug("close RIGHT is done");
                });
        };
    }

    function rightNavCtrl($scope, $timeout, $mdSidenav, $log, $q) {
        var self = this;
        self.simulateQuery = false;
        self.isDisabled = false;
        self.repos = loadAll();
        self.querySearch = querySearch;
        self.selectedItemChange = selectedItemChange;
        self.searchTextChange = searchTextChange;
        // ******************************
        // Internal methods
        // ******************************
        /**
         * Search for repos... use $timeout to simulate
         * remote dataservice call.
         */
        function querySearch(query) {
            var results = query ? self.repos.filter(createFilterFor(query)) : self.repos,
                deferred;
            if (self.simulateQuery) {
                deferred = $q.defer();
                $timeout(function() { deferred.resolve(results); }, Math.random() * 1000, false);
                return deferred.promise;
            } else {
                return results;
            }
        }

        function searchTextChange(text) {
            $log.info('Text changed to ' + text);
        }

        function selectedItemChange(item) {
            $log.info('Item changed to ' + JSON.stringify(item));
        }
        /**
         * Build `components` list of key/value pairs
         */
        function loadAll() {
            var repos = [{
                'name': 'Angular 1',
                'url': 'https://github.com/angular/angular.js',
                'watchers': '3,623',
                'forks': '16,175',
            }, {
                'name': 'Angular 2',
                'url': 'https://github.com/angular/angular',
                'watchers': '469',
                'forks': '760',
            }, {
                'name': 'Angular Material',
                'url': 'https://github.com/angular/material',
                'watchers': '727',
                'forks': '1,241',
            }, {
                'name': 'Bower Material',
                'url': 'https://github.com/angular/bower-material',
                'watchers': '42',
                'forks': '84',
            }, {
                'name': 'Material Start',
                'url': 'https://github.com/angular/material-start',
                'watchers': '81',
                'forks': '303',
            }];
            return repos.map(function(repo) {
                repo.value = repo.name.toLowerCase();
                return repo;
            });
        }
        /**
         * Create filter function for a query string
         */
        function createFilterFor(query) {
            var lowercaseQuery = angular.lowercase(query);
            return function filterFn(item) {
                return (item.value.indexOf(lowercaseQuery) === 0);
            };
        }
    }
});
