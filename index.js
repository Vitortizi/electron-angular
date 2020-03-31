const { remote } = require('electron');

var win = remote.getCurrentWindow();

var ang = angular.module("app", []);
ang.controller("myCtrl", function ($scope) {
    
    $scope.minimize = function () {
        win.minimize();
    }

    $scope.maximize = function () {
        if (!win.isMaximized()) {
            win.maximize();
        } else{
            win.unmaximize();
        }
    }

    $scope.close = function () {
        win.close();
    }
});