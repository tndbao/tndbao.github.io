'use strict';

/* App Module */

var bChannelKanji = angular.module('bChannel.kanji', ['bChannel.kanji.services']);
bChannelKanji.controller('kanjiCtrl', ['$scope', 'KanjiService', kanjiCtrl]);

function kanjiCtrl($scope, KanjiService) {
    $scope.kotoba = KanjiService.getNextWord();

    $scope.getNextWord = function (argument) {
      $scope.kotoba = KanjiService.getNextWord();
    };

    $scope.getPreviousWord = function (argument) {
      $scope.kotoba = KanjiService.getPreviousWord();
    };
}
