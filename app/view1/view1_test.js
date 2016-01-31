'use strict';

describe('myApp.view1 module', function () {

    beforeEach(module('myApp.view1'));

    describe('view1 controller', function () {

        // Then we create some variables we're going to use
        var driversController, scope;

        beforeEach(inject(function ($controller, $rootScope) {
            scope = $rootScope.$new();
        }));

        it('controller should be defined', inject(function ($controller) {
            //spec body
            var view1Ctrl = $controller('View1Ctrl', {$scope: scope});
            expect(view1Ctrl).toBeDefined();
        }));

        it('loginUserId should be anonymous', inject(function ($controller) {
            //spec body
            var view1Ctrl = $controller('View1Ctrl', {$scope: scope});
            expect(view1Ctrl.LoginUserId).toEqual('anonymous');
        }));

        it('loginPassword should be Password', inject(function ($controller) {
            //spec body
            var view1Ctrl = $controller('View1Ctrl', {$scope: scope});
            expect(view1Ctrl.LoginPassword).toEqual('Password');
        }));
    });
});