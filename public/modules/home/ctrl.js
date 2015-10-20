angular
    .module('public')
    .controller('home.ctrl', ['$scope', function($scope) {
        console.log('hello world!');

        $scope.testOC = function() {
            $scope.$root.$broadcast('offcanvas.toggle');
        }
    }]);