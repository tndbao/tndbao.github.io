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

    MainModule = angular.module('b.login', moduleDependences)
        .controller('b.login.ctrl', ['$scope', '$mdDialog', '$location', loginCtrl])

    function loginCtrl($scope, $mdDialog, $location) {
        $('#b-loading-container').fadeOut();
        $scope.showLoginDialog = function(ev) {
            $mdDialog.show({
                    controller: DialogController,
                    templateUrl: './app/login/login.html',
                    parent: angular.element(document.body),
                    targetEvent: ev,
                    autoWrap: false,
                    clickOutsideToClose: false,
                })
                .then(function(answer) {
                    $location.path('/channel');
                }, function() {
                    $scope.status = 'You cancelled the dialog.';
                });
        };

        function DialogController($scope, $mdDialog) {
            $scope.onKeyUp = function(keyCode) {
                if (keyCode === 13) {
                    $scope.login($scope.username, $scope.password, $scope.rememberMe);
                }
            };

            $scope.login = function(username, password, rememberMe) {
                if (!username || !password) {
                    return;
                }
                console.log(username, password, rememberMe);
                $mdDialog.hide();
            };

            $scope.register = function() {
                $mdDialog.cancel();
            };
        }

        $scope.showLoginDialog();
    }
});