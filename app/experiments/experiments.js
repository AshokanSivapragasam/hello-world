angular.module('myApp.experiments', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/experiments', {
            templateUrl: 'experiments/experiments.html',
            controller: 'ControllerZero'
        });
    }])

    .run(function ($rootScope) {
        /*
         Receive emitted message and broadcast it.
         Event names must be distinct or browser will blow up!
         */
        $rootScope.$on('handleEmit', function (event, args) {
            $rootScope.$broadcast('handleBroadcast', args);
        });
    })

    .controller('ControllerZero', function ($scope) {
        $scope.handleClick = function (msg) {
            $scope.$emit('handleEmit', {message: msg});
        };

        $scope.$on('handleBroadcast', function (event, args) {
            $scope.zeromessage = 'ZERO: ' + args.message;
        });
    })

    .controller('ControllerOne', function ($scope) {
        $scope.$on('handleBroadcast', function (event, args) {
            $scope.message = 'ONE: ' + args.message;
        });
    })

    .controller('ControllerTwo', function ($scope) {
        $scope.$on('handleBroadcast', function (event, args) {
            $scope.message = 'TWO: ' + args.message;
        });
    });

