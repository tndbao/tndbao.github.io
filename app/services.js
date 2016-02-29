'use strict';

/* Services */

var KanjiServices = angular.module('bChannel.kanji.services', []);

KanjiServices.factory('KanjiService', [function($) {
    var kotobaList = [];
    var currentWordIndex = -1;

    function shuffle(array) {
        var currentIndex = array.length,
            temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

    kotobaList = shuffle(kanjiList.kanjiList);

    function getNextWord() {
    	currentWordIndex = currentWordIndex + 1 >= kotobaList.length ? 0 : currentWordIndex + 1;
        return kotobaList[currentWordIndex];
    }

    function getPreviousWord() {
    	currentWordIndex = currentWordIndex - 1 < 0 ? kotobaList.length - 1 : currentWordIndex - 1;
        return kotobaList[currentWordIndex];
    }

    return {
        getNextWord: getNextWord,
        getPreviousWord: getPreviousWord,
    };
}]);
