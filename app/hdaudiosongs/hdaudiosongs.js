'use strict';

angular.module('myApp.hdaudiosongs', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/hdaudiosongs', {
            templateUrl: 'hdaudiosongs/hdaudiosongs.html',
            controller: 'HdAudioSongsController'
        });
    }])

    .controller('HdAudioSongsController', ['$rootScope', '$scope', '$http', '$sce', '$routeParams', '$timeout', '$log', 'commonService', function ($rootScope, $scope, $http, $sce, $routeParams, $timeout, $log, commonService) {
        $scope.hdaudiosongs = [
            {
                id: 'audioplayer1',
                title: 'Munbe vaa rocking theme',
                url: $sce.trustAsResourceUrl('http://localhost/vault/audio/Munbe_vaa_theme.mp3'),
                audioType: 'audio/mp3',
                openPlayer: false
            },
            {
                id: 'audioplayer2',
                title: 'Munbe vaa rocking theme',
                url: $sce.trustAsResourceUrl('http://localhost/vault/audio/Munbe_vaa_theme.mp3'),
                audioType: 'audio/mp3',
                openPlayer: false
            },
            {
                id: 'audioplayer3',
                title: 'Munbe vaa rocking theme',
                url: $sce.trustAsResourceUrl('http://localhost/vault/audio/Munbe_vaa_theme.mp3'),
                audioType: 'audio/mp3',
                openPlayer: false
            }
        ];

        $scope.playMusic = function (audioPlayerId) {
            document.getElementById(audioPlayerId).play();
        }

        $scope.stopMusic = function (audioPlayerId) {
            document.getElementById(audioPlayerId).pause();
            document.getElementById(audioPlayerId).currentTime = 0;
        }
    }])

    .directive('customAudioPlayer', ['$parse', function ($parse) {
        return {
            restrict: 'A',
            link: function (scope, element, attributes) {
                var model = $parse(attributes.fileModel);
                var modelSetter = model.assign;

                element.bind('timeupdate', function () {
                    scope.$apply(function () {
                        modelSetter(scope, element.currentTime / element.duration);
                    });
                });
            }
        };
    }]);
