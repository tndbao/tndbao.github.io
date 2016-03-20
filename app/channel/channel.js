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

    MainModule = angular.module('b.channel', moduleDependences)
        .controller('b.channel.ctrl', ['$scope', '$mdSidenav', '$mdDialog', '$mdMedia', '$location', mainCtrl])
        .controller('b.channel.rightNav.ctrl', ['$scope', '$timeout', '$mdSidenav', '$log', '$q', rightNavCtrl]);

    function mainCtrl($scope, $mdSidenav, $mdDialog, $mdMedia, $location) {
        $('#b-loading-container').fadeOut();
        $scope.customFullscreen = $mdMedia('xs') || $mdMedia('sm');
        var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;

        var imagePath = './assets/images/matt.jpg';

        $scope.messages = [{
            face: imagePath,
            what: 'Brunch this weekend?',
            who: 'Min Li Chan',
            when: '3:08PM',
            file: './assets/images/eiffel_tower_at_sunrise-wallpaper-1920x1080.jpg',
            notes: " I'll be in your neighborhood doing errands I'll be in your neighborhood doing errands I'll be in your neighborhood doing errands I'll be in your neighborhood doing errands I'll be in your neighborhood doing errands"
        },
        {
            face: imagePath,
            same: true,
            who: 'Min Li Chan',
            what: 'Brunch this weekend?',
            when: '3:08PM',
            file: './assets/images/danh.gif',
            notes: " I'll be in your neighborhood doing errands I'll be in your neighborhood doing errands I'll be in your neighborhood doing errands I'll be in your neighborhood doing errands"
        }, {
            face: imagePath,
            same: true,
            who: 'Min Li Chan',
            what: 'Brunch this weekend?',
            when: '3:08PM',
            notes: " I'll be in your neighborhood doing errands"
        }, {
            face: imagePath,
            me: true,
            what: 'Brunch this weekend?',
            who: 'Min Li Chan',
            when: '3:08PM',
            notes: " I'll be in your neighborhood doing errands"
        }, {
            face: imagePath,
            me: true,
            same: true,
            what: 'Brunch this weekend?',
            who: 'Min Li Chan',
            when: '3:08PM',
            notes: " I'll be in your neighborhood doing errands"
        },{
            face: imagePath,
            what: 'Brunch this weekend?',
            who: 'Min Li Chan',
            when: '3:08PM',
            notes: " I'll be in your neighborhood doing errands I'll be in your neighborhood doing errands I'll be in your neighborhood doing errands I'll be in your neighborhood doing errands I'll be in your neighborhood doing errands"
        }, {
            face: imagePath,
            same: true,
            who: 'Min Li Chan',
            what: 'Brunch this weekend?',
            when: '3:08PM',
            notes: " I'll be in your neighborhood doing errands I'll be in your neighborhood doing errands I'll be in your neighborhood doing errands I'll be in your neighborhood doing errands"
        }, {
            face: imagePath,
            me: true,
            what: 'Brunch this weekend?',
            who: 'Min Li Chan',
            when: '3:08PM',
            notes: " I'll be in your neighborhood doing errands"
        }, {
            face: imagePath,
            me: true,
            same: true,
            what: 'Brunch this weekend?',
            who: 'Min Li Chan',
            when: '3:08PM',
            notes: " I'll be in your neighborhood doing errands"
        },{
            face: imagePath,
            what: 'Brunch this weekend?',
            who: 'Min Li Chan',
            when: '3:08PM',
            notes: " I'll be in your neighborhood doing errands"
        },{
            face: imagePath,
            what: 'Brunch this weekend?',
            who: 'Min Li Chan',
            when: '3:08PM',
            notes: " I'll be in your neighborhood doing errands"
        },{
            face: imagePath,
            what: 'Brunch this weekend?',
            who: 'Min Li Chan',
            when: '3:08PM',
            notes: " I'll be in your neighborhood doing errands"
        },{
            face: imagePath,
            what: 'Brunch this weekend?',
            who: 'Min Li Chan',
            when: '3:08PM',
            notes: " I'll be in your neighborhood doing errands"
        },{
            face: imagePath,
            what: 'Brunch this weekend?',
            who: 'Min Li Chan',
            when: '3:08PM',
            notes: " I'll be in your neighborhood doing errands"
        },{
            face: imagePath,
            what: 'Brunch this weekend?',
            who: 'Min Li Chan',
            when: '3:08PM',
            notes: " I'll be in your neighborhood doing errands"
        },{
            face: imagePath,
            what: 'Brunch this weekend?',
            who: 'Min Li Chan',
            when: '3:08PM',
            notes: " I'll be in your neighborhood doing errands"
        },];
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
